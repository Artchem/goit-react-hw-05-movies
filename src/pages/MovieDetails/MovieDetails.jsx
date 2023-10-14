import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovie } from 'services/api-themovie';

function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  console.log('movieId :>> ', movieId);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function fetchTrendingFilm() {
      //   setLoading(true);
      try {
        const data = await fetchMovie(`movie/${movieId}`);
        console.log('data :>> ', data);
        // setPhotos(prevState => [...prevState, ...hits]);
        setMovieDetails(data);
        console.log('results :>> ', data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        // setLoading(false);
      }
    }

    fetchTrendingFilm();
  }, [movieId]);

  console.log('location moviedetails:>> ', location);

  return (
    movieDetails && (
      <>
        <Link to={backLinkLocationRef.current}>Go back</Link>
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt=""
          />
          <h2>{movieDetails.title}</h2>
          <p>User Score: {movieDetails.popularity}</p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h3>Genres</h3>
          <p>{movieDetails.genres[0].name}</p>
        </div>
        <div>
          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      </>
    )
  );
}

export default MovieDetails;
