// import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
// import Cast from 'components/Cast/Cast';
// import Layout from 'components/Layout/Layout';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Reviews from 'components/Reviews/Reviews';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
import { lazy } from 'react';

const Home = lazy(() => import('./pages/Home/Home'));
const Movies = lazy(() => import('./pages/Movies/Movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<div />}>
          <Route path="cast" element={<div />} />
          <Route path="reviews" element={<div />} />
        </Route>
        <Route path="*" element={<div />} />
      </Route>
    </Routes>
  );
};

export default App;
