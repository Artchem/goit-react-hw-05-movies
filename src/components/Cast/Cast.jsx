import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from 'services/api-themovie';

function Cast() {
  const [infoCasts, setInfoCasts] = useState(null);
  // const [error, setError] = useState(null);

  const { movieId } = useParams();
  //   console.log('movieId :>> ', movieId);

  useEffect(() => {
    async function fetchTrendingFilm() {
      //   setLoading(true);
      try {
        const { cast } = await fetchMovie(`movie/${movieId}/credits`);
        // console.log('cast :>> ', cast);

        setInfoCasts(cast);
        // console.log('infoCast :>> ', dataCast);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    }

    fetchTrendingFilm();
  }, [movieId]);

  console.log('infoCasts :>> ', infoCasts);
  return (
    <ul>
      {infoCasts &&
        infoCasts.map(cast => (
          <li key={cast.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${cast.profile_path}`}
              alt={cast.name}
            />
            <div>
              <title>{cast.name}</title>
              <p>Character: {cast.character}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default Cast;
