import { useParams, Outlet, Link } from 'react-router-dom';
import css from './MovieCard.module.css';
import { getMovieById, getMovieByName } from '@/utils/api';
import { useEffect, useState } from 'react';

import MainInfoCard from '@/components/MainInfoCard/MainInfoCard';
import AdditionalInfoCard from '@/components/AdditionalInfoCard/AdditionalInfoCard';

export default function MovieCard() {
  const [filmData, setFilmData] = useState({
    poster_path: '',
    title: '',
    overview: '',
    genres: [],
  });
  const { filmId } = useParams();

  useEffect(() => {
    if (!filmId) return;
    getMovieById(filmId).then(res => {
      setFilmData(res.data);
    });
  }, [filmId]);

  // useEffect(() => {
  //   console.log(filmName);
  //   if (!filmName) return;
  //   getMovieByName(filmName).then(res => {
  //     setFilmData(res.data.results);
  //   });
  // }, [filmName]);

  return (
    <>
      <Link to="/">Назад</Link>
      <MainInfoCard filmInfo={filmData} />
      <AdditionalInfoCard filmInfo={filmData} />
      <Outlet />
    </>
  );
}
