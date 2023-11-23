import styles from './MovieView.module.css';
import { FcLeft } from 'react-icons/fc';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieView = ({ handleBack, title, average, genres, img, overview }) => {
  return (
    <div className={styles.MovieWrapper}>
      <button className={styles.ButtonBack} type="button" onClick={handleBack}>
        <FcLeft />
        Go back
      </button>
      <container>
        <div>
          <img
            className={styles.ImgMovies}
            src={`${BASE_IMG + img}`}
            alt={title}
          ></img>
        </div>

        <div className={styles.WrapperTitle}>
          <h2 className={styles.MovieTitle}>{title}</h2>
          <h2 className={styles.TitleAverage}>Average: {average}</h2>
          <h2 className={styles.TitleOverview}>Overview</h2>
          {overview ?? <p className={styles.OverviewContent}>{overview}</p>}
          <h2>Genres</h2>
          <ul className={styles.GenresList}>
            {genres.map(genre => (
              <li className={styles.GenreItem} key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </container>
    </div>
  );
};

export default MovieView;

//<Link to={location?.state?.from ?? '/home'}></Link>
