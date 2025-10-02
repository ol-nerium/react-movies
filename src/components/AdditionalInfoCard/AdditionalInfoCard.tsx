import { Link } from 'react-router-dom';
import css from './AdditionalInfoCard.module.css';

export default function AdditionalInfoCard({ filmInfo }) {
  const {} = filmInfo;
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
