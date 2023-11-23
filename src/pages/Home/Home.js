import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { FetchTrending } from 'services/ApiTMDB';
import MovieList from 'components/MovieList/MovieList';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchCinema() {
      try {
        const response = await FetchTrending();
        setMovies(response);
      } catch (error) {
        toast.error('no cinema', { position: 'top-right' });
      }
    }
    fetchCinema();
  }, []);

  return (
    <>
      <MovieList movies={movies} />
      {/* <main>
        <h1 className={styles.HomeTitle}>Trending today</h1>
        <ul>
          {movies.map(item => (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </main>
      <ToastContainer autoClose={2000} /> */}
    </>
  );
};
export default Home;
