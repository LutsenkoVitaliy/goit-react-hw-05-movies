import axios from 'axios';

const KEY = '2668bff69a6063be88c57ea7fed4c37a';
axios.defaults.baseURL = "https://api.themoviedb.org/3";


async function fetchData (URL) {
  try {
    const response = await axios.get(URL)
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export function fetchTrendingMovies() {
  return fetchData(`/trending/movie/week?api_key=${KEY}`)
};

export function fetchMoviesByName(name) {
  return fetchData(`/search/movie?api_key=${KEY}&query=${name}`)
}

export function fetchMoviesById(id) {
  return fetchData(`/movie/${id}?api_key=${KEY}&language=en-US`)
}

export function fetchMoviesActors(id) {
  return fetchData(`/movie/${id}/credits?api_key=${KEY}&language=en-US`)
}

export function fetchMoviesReviews(id) {
  return fetchData(`/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`)
}