import Button from 'components/Button/Button';
import Error from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import SearchForm from 'components/SearchForm/SearchForm';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/api-themovie';
import {
  GalleryList,
  StyledImg,
  StyledItem,
  StyledText,
} from './Movies.styled';

function Movies() {
  const [searchMovies, setSearchMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalMovies, setTotalMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!query) return;
    async function addMoviesByQuery() {
      setLoading(true);
      try {
        const data = await getMoviesByQuery(`${query}`, page);

        setSearchMovies(data.results);
        setTotalMovies(data.total_results);
        // console.log('searchMovies :>> ', data.results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    addMoviesByQuery();
  }, [query, page, totalMovies]);

  const handleFormSubmit = query => {
    // console.log(query);
    setSearchParams({ query: query });
    // setPage(1);
    setSearchMovies(null);
    // setTotalMovies(0);
    // setError(null);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <SearchForm onSubmit={handleFormSubmit} />
      {searchMovies && (
        <GalleryList>
          {searchMovies.map(movie => (
            <StyledItem key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
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
      )}
      {searchMovies &&
        totalMovies !== searchMovies &&
        searchMovies.length < totalMovies && <Button onBtnClick={loadMore} />}
    </>
  );
}
export default Movies;
