import { useParams } from 'react-router-dom';
import { getCredits } from '@/utils/api';
import { useEffect, useState } from 'react';
import picture from './noImage.jpg';

import css from './Cast.module.css';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { filmId } = useParams();

  useEffect(() => {
    if (!filmId) return;
    getCredits(filmId).then(res => {
      setCast(res.data.cast);
    });
  }, [filmId]);
  return (
    <ul className={css.castList}>
      {cast.length > 0 ? (
        cast.map(({ id, profile_path, name, character }) => (
          <li key={`${id}${character}`} className={css.castListItem}>
            <div className={css.castItemImgWrap}>
              <img
                className={css.castItemImg}
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                    : picture
                }
                alt={name}
              />
            </div>
            <ul className={css.castItemContent}>
              <li>
                <p className={css.castItemText}>
                  Name: <span>{name}</span>
                </p>
              </li>
              <li>
                <p className={css.castItemText}>
                  Character: <span>{character}</span>
                </p>
              </li>
            </ul>
          </li>
        ))
      ) : (
        <p className={css.withoutInfo}>No Info(</p>
      )}
    </ul>
  );
}
