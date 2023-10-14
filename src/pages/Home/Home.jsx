// import MoviesGallery from 'components/MoviesGallery/MoviesGallery';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchMovie } from 'services/api-themovie';

function Home() {
  const [films, setFilms] = useState(null);
  //   const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchTrendingFilm() {
      //   setLoading(true);
      try {
        const data = await fetchMovie('trending/all/day');
        // console.log('data :>> ', data);
        // setPhotos(prevState => [...prevState, ...hits]);
        setFilms(data.results);
        // console.log('results :>> ', data.results);
      } catch (error) {
        // setError(error.message);
      } finally {
        // setLoading(false);
      }
    }

    fetchTrendingFilm();
  }, []);
  // console.log('films :>> ', films);

  return (
    <>
      {/* {films && <MoviesGallery movies={films} />} */}
      <ul>
        {films &&
          films.map(film => {
            return (
              <li key={film.id}>
                <Link to={`movies/${film.id}`}>
                  {film.title}
                  {film.name}
                </Link>
              </li>
            );
          })}
      </ul>
    </>
  );
}
export default Home;
