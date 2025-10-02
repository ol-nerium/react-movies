import MoviesList from '@/components/MoviesList/MoviesList';

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
      <h2>Trending today</h2>
      <MoviesList filmsArr={trandingArr} />
    </>
  );
}
