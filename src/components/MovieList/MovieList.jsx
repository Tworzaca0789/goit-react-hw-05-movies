import styles from './MovieList.module.css';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul className={styles.movieList}>
      {movies.map(({ id, title }) => (
        <li className={styles.movieItem} key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
