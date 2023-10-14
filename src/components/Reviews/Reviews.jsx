import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { fetchMovie } from 'services/api-themovie';

function Reviews() {
  const [dataReviews, setdataReviews] = useState(null);
  // const [error, setError] = useState(null);

  const { movieId } = useParams();
  //   console.log('movieId :>> ', movieId);

  useEffect(() => {
    async function fetchTrendingFilm() {
      //   setLoading(true);
      try {
        const { results } = await fetchMovie(`movie/${movieId}/reviews`);
        // console.log('cast :>> ', cast);

        setdataReviews(results);
        console.log('results :>> ', results);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    }

    fetchTrendingFilm();
  }, [movieId]);

  console.log('dataReviews :>> ', dataReviews);
  return (
    <ul>
      {dataReviews &&
        dataReviews.map(reviews => (
          <li key={reviews.id}>
            <h3>Author: {reviews.author}</h3>
            <p>{reviews.content}</p>
          </li>
        ))}
    </ul>
  );
}

export default Reviews;
