import { useParams, Outlet, Link } from 'react-router-dom';
import css from './MovieCard.module.css';
import { getMovieById } from '@/utils/api';
import { useEffect, useState } from 'react';
export default function MovieCard() {
  const [filmData, setFilmData] = useState({
    poster_path: '',
    title: '',
    overview: '',
    genres: [],
  });
  const { filmId } = useParams();
  console.log(filmId);
  useEffect(() => {
    getMovieById(filmId).then(res => {
      console.log(res.data);
      setFilmData(res.data);
    });
  }, []);

  return (
    <>
      <Link to="/"></Link>
      <div>
        <div className="imgWrap">
          <img
            src={`https://image.tmdb.org/t/p/w780/${filmData.poster_path}`}
            alt={filmData.title}
          />
        </div>
        <h3 className={css.cardTitle}>{filmData.title}</h3>
        <p className={css.score}></p>
        <h4 className={css.overviewTitle}>Overview</h4>
        <p className={css.overviewText}>{filmData.overview}</p>
        <h5 className={css.genresTitle}>Genres</h5>
        <p className={css.genres}>
          {filmData.genres
            .map(item => item.name)
            .join(' ')
            .trim()}
        </p>
      </div>
      <div className={css.additionalCard}>
        <p className={css.additionalTitle}>Additional information</p>
        <ul className={css.additionalInfoList}>
          <li className={css.additionalInfoListItem}>
            <Link to="cast">Cast</Link>
          </li>
          <li className={css.additionalInfoListItem}>
            <Link to="reviews">Reviwes</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
}
