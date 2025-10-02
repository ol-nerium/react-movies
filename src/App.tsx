import { Routes, Route, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './App.module.css';

import Container from '@/components/Container/Container';
import Home from '@/pages/Home';
import Movies from '@/pages/Movies';
import NotFound from '@/pages/NotFound';
import MovieCard from '@/components/MovieCard/MovieCard';
import Cast from '@/components/Cast/Cast';
import Reviews from '@/components/Reviews/Reviews';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

function App() {
  return (
    <Container>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies?query=:filmName" element={<MovieCard />} />

        <Route path="/movies/:filmId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
}

export default App;
