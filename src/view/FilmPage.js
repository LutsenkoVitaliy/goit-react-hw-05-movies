import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "services/theMoviedbAPI";
import MovieDetailsPage from "components/MovieDetailsPage";

export function FilmPage () {
  const [status, setStatus] = useState('idle');
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);

  const { movieId } = useParams();


  useEffect(() => {
    async function fetchFilmDetailsPage(movieId) {
      try {
        setStatus('pending');
        const Movie = await fetchMoviesById(movieId);
        setFilm(Movie)
        console.log(Movie);
        setStatus('resolved')
      } catch (error) {
        setStatus('rejected')
        setError(error)
      }
    }
    fetchFilmDetailsPage(movieId)
  }, [movieId])

  console.log(film);

  if (status === 'idle') {
    return <p>Try again</p>;
  }

  if (status === 'pending') {
    return <p>Wait....</p>
  }

  if (status === "rejected") {
    return <h2>{error.messaage}</h2>
  }

  if (status === 'resolved') {
    return <p>FilmDetailPage</p>
  }

  
}