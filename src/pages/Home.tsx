import MoviesList from '@/components/MoviesList/MoviesList';
import Title from '@/components/Title/Title';
import { getTranding } from '@/utils/api';
import { useState, useEffect } from 'react';

export default function Home() {
  const [trandingArr, setTrandingArr] = useState([]);

  useEffect(() => {
    getTranding()
      .then(res => setTrandingArr(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <Title text="Trending today" />
      <MoviesList filmsArr={trandingArr} />
    </>
  );
}
