import { Link, NavLink } from 'react-router-dom';
import css from './AdditionalInfoCard.module.css';

export default function AdditionalInfoCard({ testState }) {
  const backLinkRef = testState.state;
  function linkBuilder(classes) {
    if (classes.isActive) return `${css.link} ${css.active}`;
    return css.link;
  }
  return (
    <div className={css.additionalCard}>
      <p className={css.additionalTitle}>Additional information</p>
      <ul className={css.additionalInfoList}>
        <li className={css.additionalInfoListItem}>
          <NavLink to="cast" state={backLinkRef} className={linkBuilder}>
            Cast
          </NavLink>
        </li>
        <li className={css.additionalInfoListItem}>
          <NavLink to="reviews" state={backLinkRef} className={linkBuilder}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
