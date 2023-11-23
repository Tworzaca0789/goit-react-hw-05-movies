import axios from 'axios';
import { API_KEY, BASE_URL } from 'consts/ApiTmdbConsts';

export async function FetchTrending() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`
  );
  return response.data.results;
}

export async function SearchMovies(query) {
  const searchMovie = await axios.get(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1`
  );
  return searchMovie.data.results;
}

export const FetchMovieDetails = async movieId => {
  const detailMovie = await axios.get(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return detailMovie.data;
};

export async function MovieCredits(movieId) {
  const creditsMovie = await axios.get(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return creditsMovie.data.cast;
}

export async function MovieReviews(movieId) {
  const review = await axios.get(
    `${BASE_URL}/movie/${movieId}/reviews?api_key =${API_KEY}&language=en-US&page=1`
  );
  return review.data.results;
}
