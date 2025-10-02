import { getReviews } from '@/utils/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { filmId } = useParams();
  useEffect(() => {
    getReviews(filmId).then(res => setReviews(res.data.results));
  }, [filmId]);
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <div>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </div>
          </li>
        ))
      ) : (
        <p>We don't have reviews for this movie</p>
      )}
    </ul>
  );
}
