import { Link, useLocation } from 'react-router-dom';

function MoviesGallery({ movies }) {
  console.log('movies gallery    movies :>> ', movies);

  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
            {movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default MoviesGallery;
