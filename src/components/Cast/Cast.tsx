import { useParams } from 'react-router-dom';
import { getCredits } from '@/utils/api';
import { useEffect, useState } from 'react';
import picture from './empty.jpeg';

export default function Cast() {
  const [cast, setCast] = useState([]);
  const { filmId } = useParams();
  useEffect(() => {
    getCredits(filmId).then(res => setCast(res.data.cast));
  }, [filmId]);

  return (
    <ul>
      {/* <p>{JSON.stringify(cast)}</p> */}
      {cast.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <div>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : picture
              }
              alt={name}
            />
            <p>Name:{name}</p>
            <p>Character: {character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
