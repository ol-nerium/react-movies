import { useEffect, useState } from 'react';
import { getMoviesListByName } from '@/utils/api';
import { useSearchParams } from 'react-router-dom';

import MoviesList from '@/components/MoviesList/MoviesList';
import SearchBox from '@/components/SearchBox/SearchBox';

export default function Movies() {
  const [resArr, setResArr] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchingRequestValue = searchParams.get('query') ?? '';

  // Функція оновлення ключа url
  const updateSearchParams = (key: string, value: string) => {
    const updatedParams = new URLSearchParams(searchParams);
    updatedParams.set(key, value);
    setSearchParams(updatedParams);
  };

  function handleSubmit(value: string) {
    updateSearchParams('query', value);
  }

  useEffect(() => {
    if (searchingRequestValue === '') return;
    getMoviesListByName(searchingRequestValue).then(res =>
      setResArr(res.data.results)
    );
  }, [searchingRequestValue]);

  return (
    <>
      <SearchBox onSubmit={handleSubmit} />
      {!searchingRequestValue || <MoviesList filmsArr={resArr} />}
    </>
  );
}
