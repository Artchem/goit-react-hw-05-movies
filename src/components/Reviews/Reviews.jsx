import Error from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovie } from 'services/api-themovie';
import { StyledItem, StyledList } from './Reviews.styled';

function Reviews() {
  const [dataReviews, setdataReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  //   console.log('movieId :>> ', movieId);

  useEffect(() => {
    if (!movieId) return;
    async function fetchTrendingFilm() {
      setLoading(true);
      try {
        const { results } = await fetchMovie(`movie/${movieId}/reviews`);
        // console.log('cast :>> ', cast);
        if (results.length === 0) {
          toast.info(`We don't have any reviews for this movie`);
        }
        setdataReviews(results);
        // console.log('results :>> ', results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingFilm();
  }, [movieId]);

  // console.log('dataReviews :>> ', dataReviews);
  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <StyledList>
        {dataReviews && dataReviews.length !== 0 ? (
          dataReviews.map(reviews => (
            <StyledItem key={reviews.id}>
              <h3>Author: {reviews.author}</h3>
              <p>{reviews.content}</p>
            </StyledItem>
          ))
        ) : (
          <p>"We don't have any reviews for this movie"</p>
        )}
      </StyledList>
    </>
  );
}

export default Reviews;
