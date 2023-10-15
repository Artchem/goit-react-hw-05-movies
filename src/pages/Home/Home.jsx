import Button from 'components/Button/Button';
import Error from 'components/Error/Error';
import { Loader } from 'components/Loader/Loader';
import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';
import { fetchMovie } from 'services/api-themovie';

function Home() {
  const [films, setFilms] = useState(null);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalFilms, setTotalFilms] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrendingFilm() {
      setLoading(true);
      try {
        const { results, total_results } = await fetchMovie(
          'trending/all/day',
          page
        );

        if (results.length === 0) {
          toast.info(`There are no films found`);

          setError('Sorry, there are no film found. Please try again.');
        }

        if (results.length !== 0 && page === 1) {
          toast.success(` ${total_results} images `);
        }

        if (totalFilms > 0 && totalFilms <= results.length + 20 && page !== 1) {
          toast.info(`You have reached the end`);
        }

        // console.log('data :>> ', results);
        if (page === 1) {
          setFilms(results);
        }
        setFilms(prevState => [...prevState, ...results]);

        setTotalFilms(total_results);
        setPage(page);
        console.log('results :>> ', page);
        // console.log('results total :>> ', data.total_results);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchTrendingFilm();
  }, [page, totalFilms]);
  // console.log('films :>> ', films);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <>
      {loading && <Loader />}
      {error && <Error error={error} />}
      {films && <MoviesGallery movies={films} />}
      {films && totalFilms !== films && <Button onBtnClick={loadMore} />}
    </>
  );
}
export default Home;
