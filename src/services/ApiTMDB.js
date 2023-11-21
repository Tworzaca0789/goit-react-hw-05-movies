import axios from 'axios';
import { API_KEY, BASE_URL } from 'consts/ApiTmdbConsts';

export async function FetchTrendingMovies() {
  const res = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return res.data.results;
}
