import { Link, useLocation } from 'react-router-dom';
import {
  GalleryList,
  StyledImg,
  StyledItem,
  StyledText,
} from './MoviesGallery.styled';

function MoviesGallery({ movies }) {
  // console.log('movies gallery    movies :>> ', movies);
  const location = useLocation();
  // const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  // const location = useLocation();
  return (
    <GalleryList>
      {movies.map(movie => (
        <StyledItem key={movie.id}>
          <Link to={`movies/${movie.id}`} state={{ from: location }}>
            <StyledImg
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
            />
            <StyledText>
              {movie.title}
              {movie.name}
            </StyledText>
          </Link>
        </StyledItem>
      ))}
    </GalleryList>
  );
}

export default MoviesGallery;
