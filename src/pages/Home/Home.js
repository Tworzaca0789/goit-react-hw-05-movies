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
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </>
  );
};
export default Home;
