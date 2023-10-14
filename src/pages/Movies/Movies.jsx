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
  //   const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  console.log('searchParams :>> ', searchParams);
  console.log('query :>> ', query);

  useEffect(() => {
    async function addMoviesByQuery() {
      //   setLoading(true);
      try {
        const data = await getMoviesByQuery(`${query}`);
        // console.log('data :>> ', data);
        // setPhotos(prevState => [...prevState, ...hits]);
        setSearchMovies(data.results);
        console.log('searchMovies :>> ', data.results);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    }

    addMoviesByQuery();
  }, [query]);
  // console.log('films :>> ', films);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const query = searchParams.get('query') ?? '';
  // console.log('searchParams :>> ', searchParams);
  // console.log('query :>> ', query);

  // const updateQueryString = evt => {
  //   if (evt.target.value === '') {
  //     return setSearchParams({});
  //   }
  //   setSearchParams({ query: evt.target.value });
  // };

  const handleFormSubmit = query => {
    console.log(query);
    setSearchParams({ query: query });
    // setPage(1);
    // setPhotos([]);
    // setTotalPhotos(0);
    // setError(null);
  };

  console.log('location movies:>> ', location);

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {searchMovies && (
        <GalleryList>
          {searchMovies.map(movie => (
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
      )}
    </>
  );
}
export default Movies;
