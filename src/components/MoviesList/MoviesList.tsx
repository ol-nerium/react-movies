import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ filmsArr }: { filmsArr: any[] }) {
  const location = useLocation();
  location.state = { from: `${location.pathname}${location.search}` };
  return (
    <ul>
      {filmsArr.map(({ id, title }: { id: string; title: string }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location.state}>
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
