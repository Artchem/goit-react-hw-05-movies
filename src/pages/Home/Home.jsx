import Button from 'components/Button/Button';
import Error from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { useEffect, useState } from 'react';

import { fetchMovie } from 'services/api-themovie';

function Home() {
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrendingFilm() {
      setLoading(true);
      try {
        const { results } = await fetchMovie('trending/all/day', page);

        setFilms(results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingFilm();
  }, [page]);
  // console.log('films :>> ', films);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {films && <MoviesGallery movies={films} />}
      {films && <Button onBtnClick={loadMore} />}
    </>
  );
}
export default Home;
