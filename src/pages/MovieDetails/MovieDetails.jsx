import Error from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'services/api-themovie';
import {
  Container,
  FilmInfo,
  LinkButton,
  StyledImage,
  StyledInfo,
  StyledUl,
  Title,
} from './MovieDetails.styled';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log('movieId :>> ', movieId);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;
    async function fetchTrendingFilm() {
      setLoading(true);
      try {
        const data = await fetchMovie(`movie/${movieId}`);
        console.log('data :>> ', data);

        setMovieDetails(data);
        console.log('results :>> ', data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingFilm();
  }, [movieId]);

  // console.log('location moviedetails:>> ', location);

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {movieDetails && (
        <Container>
          <LinkButton to={backLinkLocationRef.current}>Go back</LinkButton>
          <FilmInfo>
            <StyledImage
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`
                  : defaultImg
              }
              alt={movieDetails.title}
            />
            <div>
              <h2>
                {movieDetails.title}{' '}
                {movieDetails.release_date
                  ? `(${movieDetails.release_date.slice(0, 4)})`
                  : ''}
              </h2>
              <p>User Score: {movieDetails.vote_average.toFixed(1) * 10}%</p>
              <h3>Overview</h3>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <p>{movieDetails.genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </FilmInfo>
          <StyledInfo>
            <Title>Additional information</Title>
            <StyledUl>
              <li>
                <LinkButton to="cast">Cast</LinkButton>
              </li>
              <li>
                <LinkButton to="reviews">Reviews</LinkButton>
              </li>
            </StyledUl>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </StyledInfo>
        </Container>
      )}
    </>
  );
}

export default MovieDetails;
