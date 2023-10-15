import Error from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie } from 'services/api-themovie';
import { StyledImage, StyledItem, StyledList, StyledText } from './Cast.styled';

function Cast() {
  const [infoCasts, setInfoCasts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;
    async function fetchTrendingFilm() {
      setLoading(true);
      try {
        const { cast } = await fetchMovie(`movie/${movieId}/credits`);

        setInfoCasts(cast);
        // console.log('infoCast :>> ', dataCast);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingFilm();
  }, [movieId]);

  console.log('infoCasts :>> ', infoCasts);
  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <StyledList>
        {infoCasts &&
          infoCasts.map(cast => (
            <StyledItem key={cast.id}>
              <StyledImage
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImg
                }
                alt={cast.name}
              />
              <div>
                <StyledText>Name: {cast.name}</StyledText>
                <StyledText>Character: {cast.character}</StyledText>
              </div>
            </StyledItem>
          ))}
      </StyledList>
    </>
  );
}

export default Cast;
