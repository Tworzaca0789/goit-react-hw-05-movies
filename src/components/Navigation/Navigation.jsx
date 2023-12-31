import { Link, Outlet } from 'react-router-dom';
import styles from './Navigation.module.css';
import { Suspense } from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.NavigateMovies}>
        <Link to="/" end>
          <p className={styles.ColorHome}>Home</p>
        </Link>
        <Link to="/movies">
          <p className={styles.ColorMovies}>Movies</p>
        </Link>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </nav>
  );
};
export default Navigation;
