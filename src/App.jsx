// import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
// import Cast from 'components/Cast/Cast';
// import Layout from 'components/Layout/Layout';
// import MovieDetails from 'pages/MovieDetails/MovieDetails';
// import Reviews from 'components/Reviews/Reviews';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import { lazy } from 'react';

// const Home = lazy(() => import(''));
// const Movies = lazy(() => import('..'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<div />}>
        <Route index element={<div />} />
        <Route path="movies" element={<div />} />
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
