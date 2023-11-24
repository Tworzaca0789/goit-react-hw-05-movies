import MovieView from 'components/MovieView/MovieView';
import { useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { FetchMovieDetails } from 'services/ApiTMDB';
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movies, setMovies] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    async function fetchDetails() {
      try {
        const movie = await FetchMovieDetails(movieId);
        setMovies(movie);
      } catch (error) {
        toast.error('Every thing is empty', { position: 'top-right' });
      }
    }
    fetchDetails();
  }, [movieId]);

  const handleBack = () => {
    navigate(location.state.from);
  };
  if (!movies) {
    return;
  }

  return (
    <>
      <MovieView
        handleBack={handleBack}
        img={movies.poster_path}
        title={movies.title}
        average={movies.vote_average}
        genres={movies.genres}
        overview={movies.overview}
      />

      <div>
        <h2 className={styles.DetalisMov}>Aditional Information:</h2>
        <div className={styles.DetalisLink}>
          <Link to="cast" state={location.state}>
            <p className={styles.TitleCast}>Сast</p>
          </Link>
          <Link to="reviews" state={location.state}>
            <p className={styles.TitleReview}>Reviews</p>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default MovieDetails;
