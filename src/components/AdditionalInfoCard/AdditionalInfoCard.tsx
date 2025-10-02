import { Link, useLocation } from 'react-router-dom';
import css from './AdditionalInfoCard.module.css';

export default function AdditionalInfoCard({ testState }) {
  const backLinkRef = testState.state?.from ?? '/movies';

  return (
    <div className={css.additionalCard}>
      <p className={css.additionalTitle}>Additional information</p>
      <ul className={css.additionalInfoList}>
        <li className={css.additionalInfoListItem}>
          <Link to="cast" state={backLinkRef}>
            Cast
          </Link>
        </li>
        <li className={css.additionalInfoListItem}>
          <Link to="reviews" state={backLinkRef}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
}
