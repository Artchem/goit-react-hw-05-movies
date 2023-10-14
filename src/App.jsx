// import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
// import Cast from 'components/Cast/Cast';
// import Layout from 'components/Layout/Layout';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Reviews from 'components/Reviews/Reviews';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
import { lazy } from 'react';
// import Layout from 'components/Layout/Layout';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));
const Layout = lazy(() => import('./components/Layout/Layout'));
const MovieDetails = lazy(() => import('./pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
