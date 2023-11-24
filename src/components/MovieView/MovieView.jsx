import styles from './MovieView.module.css';
import { FcLeft } from 'react-icons/fc';
import PropTypes from 'prop-types';
const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';

const MovieView = ({ handleBack, title, average, genres, img, overview }) => {
  return (
    <div className={styles.MovieWrapper}>
      <button className={styles.ButtonBack} type="button" onClick={handleBack}>
        <FcLeft />
        Go back
      </button>
      <container class={styles.MovieContainer}>
        <div>
          <img
            className={styles.ImgMovies}
            src={`${BASE_IMG + img}`}
            alt={title}
          ></img>
        </div>

        <div className={styles.WrapperTitle}>
          <h2 className={styles.MovieTitle}>{title}</h2>
          <p className={styles.TitleAverage}>Average: {average}</p>
          <h2 className={styles.TitleOverview}>Overview</h2>
          {overview ?? <p className={styles.OverviewContent}>{overview}</p>}
          <h2 className={styles.GenresTitle}>Genres</h2>
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

MovieView.propTypes = {
  handleBack: PropTypes.func,
  title: PropTypes.string,
  average: PropTypes.number,
  genres: PropTypes.string,
  img: PropTypes.string,
  overview: PropTypes.string,
};

//<Link to={location?.state?.from ?? '/home'}></Link>
