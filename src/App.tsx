import { Routes, Route, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './App.module.css';

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
    <>
      <nav>
        <NavLink className={buildLinkClass} to="/">
          Home
        </NavLink>
        <NavLink className={buildLinkClass} to="/Movies">
          Movies
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Movies/:filmId" element={<MovieCard />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
