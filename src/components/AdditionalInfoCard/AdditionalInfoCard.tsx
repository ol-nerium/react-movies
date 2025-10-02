import { Link, useLocation } from 'react-router-dom';
import css from './AdditionalInfoCard.module.css';

export default function AdditionalInfoCard() {
  // const location = useLocation();
  // location.state = state;
  // console.log(location);
  return (
    <div className={css.additionalCard}>
      <p className={css.additionalTitle}>Additional information</p>
      <ul className={css.additionalInfoList}>
        <li className={css.additionalInfoListItem}>
          <Link to="cast">Cast</Link>
        </li>
        <li className={css.additionalInfoListItem}>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
}
