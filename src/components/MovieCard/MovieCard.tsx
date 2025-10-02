import { useParams, Outlet, Link, useLocation } from 'react-router-dom';
import { getMovieById } from '@/utils/api';
import { useEffect, useRef, useState } from 'react';

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
  const location = useLocation();
  // const state = useRef({ from: location.pathname });
  // location.state = state;
  console.log(location);
  useEffect(() => {
    if (!filmId) return;
    getMovieById(filmId).then(res => {
      setFilmData(res.data);
    });
  }, [filmId]);

  const backLinkRef = useRef(location.state?.from ?? '/movies');
  return (
    <>
      <Link to={backLinkRef.current}>back</Link>
      <MainInfoCard filmInfo={filmData} />
      <AdditionalInfoCard state={backLinkRef.current} />
      {/* // ??? */}
      <Outlet />
    </>
  );
}
