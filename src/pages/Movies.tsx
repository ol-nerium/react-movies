import { useEffect, useState } from 'react';
import { getMoviesListByName } from '@/utils/api';
import { useSearchParams } from 'react-router-dom';
// import MovieCard from '@/components/MovieCard/MovieCard';
import MoviesList from '@/components/MoviesList/MoviesList';

export default function Movies() {
  const [value, setValue] = useState('');
  const [resArr, setResArr] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchingRequestValue = searchParams.get('query');

  // Функція оновлення певного ключа
  const updateSearchParams = (key, value) => {
    // 1. Копіюємо існуючі параметри
    const updatedParams = new URLSearchParams(searchParams);

    // 2. Оновлюємо певний ключ
    updatedParams.set(key, value);

    // 3. Застосовуємо зміни до URL
    setSearchParams(updatedParams);
  };

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateSearchParams('query', value);
    setValue('');
  }

  useEffect(() => {
    if (searchingRequestValue === null) return;
    console.log(searchingRequestValue);
    getMoviesListByName(searchingRequestValue).then(res =>
      setResArr(res.data.results)
    );
  }, [searchingRequestValue]);

  return (
    <>
      {searchingRequestValue || (
        <form onSubmit={handleSubmit}>
          <input type="text" value={value} onChange={handleChange} />
          <button type="submit">Search</button>
        </form>
      )}
      <MoviesList filmsArr={resArr} />
    </>
  );
}
