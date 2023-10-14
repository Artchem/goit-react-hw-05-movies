import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from 'services/api-themovie';

function Cast() {
  const [infoCasts, setInfoCasts] = useState(null);
  // const [error, setError] = useState(null);

  const { movieId } = useParams();
  //   console.log('movieId :>> ', movieId);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

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
              src={
                cast.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.poster_path}`
                  : defaultImg
              }
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
