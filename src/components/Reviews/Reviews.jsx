import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieReviews } from 'services/ApiTMDB';
import styles from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function ReviewsInfo() {
      try {
        const reviewInfo = await MovieReviews(movieId);
        setReviews(reviewInfo);
      } catch (error) {
        console.log(error);
      }
    }
    ReviewsInfo();
  }, [movieId]);

  return (
    <>
      {reviews.length ? (
        <ul className={styles.ReviewList}>
          {reviews.map(({ id, content }) => (
            <li className={styles.ReviewItem} key={id}>
              <p className={styles.ReviewContent}>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.ReviewEmpty}>
          There is no information about Reviews
        </p>
      )}
    </>
  );
}
