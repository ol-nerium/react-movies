import { getReviews } from '@/utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import css from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();
  useEffect(() => {
    getReviews(filmId).then(res => setReviews(res.data.results));
  }, [filmId]);
  return (
    <ul className={css.reviewsList}>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id} className={css.reviewsListItem}>
            <div>
              <h3 className={css.reviewsListName}>
                Author: <span>{author}</span>
              </h3>
              <p className={css.reviewsListContent}>{content}</p>
            </div>
          </li>
        ))
      ) : (
        <p className={css.reviewsListContent}>
          We don't have reviews for this movie
        </p>
      )}
    </ul>
  );
}
