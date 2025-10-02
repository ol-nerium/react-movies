const films = [{ url: '', title: '' }];

import { getData, getTranding } from '@/utils/api';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// const testArr = {
//   adult: false,
//   backdrop_path: '/bKxiLRPVWe2nZXCzt6JPr5HNWYm.jpg',
//   id: 110316,
//   name: 'Alice in Borderland',
//   original_name: '今際の国のアリス',
//   overview:
//     'With his two friends, a video-game-obsessed young man finds himself in a strange version of Tokyo where they must compete in dangerous games to win.',
//   poster_path: '/Ac8ruycRXzgcsndTZFK6ouGA0FA.jpg',
//   media_type: 'tv',
//   original_language: 'ja',
//   genre_ids: [9648, 18, 10759],
//   popularity: 421.5872,
//   first_air_date: '2020-12-10',
//   vote_average: 8.2,
//   vote_count: 2401,
//   origin_country: ['JP'],
// };

// const { id, name } = testArr;

export default function Home() {
  const [trandingArr, setTrandingArr] = useState([]);
  console.log('re-render');

  useEffect(() => {
    getTranding()
      .then(res => setTrandingArr(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {trandingArr.map(({ id, title, name }) => {
          return (
            <li key={id}>
              <Link to={`/Movies/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
