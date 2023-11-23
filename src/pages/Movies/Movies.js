import MovieList from 'components/MovieList/MovieList';
import Search from 'components/SearchMovie/SearchMovie';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SearchMovies } from 'services/ApiTMDB';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [params, setParams] = useSearchParams();
  const query = params.get('query');

  const handleSubmit = query => {
    setParams({ query });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    async function SearchTitle() {
      try {
        const cardTv = await SearchMovies(query);
        if (cardTv.length === 0) {
          alert(`for query "${query}", no videos found`);
        }
        setMovies(cardTv);
      } catch (error) {
        toast.error('no cinema', { position: 'top-right' });
      }
    }

    SearchTitle();
  }, [query]);

  return (
    <>
      <Search onSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </>
  );
};

export default Movies;
