import { Link } from 'react-router-dom';

export default function MoviesList({ filmsArr }) {
  return (
    <ul>
      {filmsArr.map(({ id, title, name }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
