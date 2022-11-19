import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMoviesById } from "services/theMoviedbAPI";
// import MovieDetailsPage from "components/MovieDetailsPage";

export function FilmPage () {
  const [status, setStatus] = useState('idle');
  const [film, setFilm] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();


  useEffect(() => {
    async function fetchFilmDetailsPage() {
      try {
        setStatus('pending');
        const MovieDetails = await fetchMoviesById(movieId);
        setFilm(MovieDetails)
        setStatus('resolved')
      } catch (error) {
        setStatus('rejected')
        setError(error)
      }
    }
    fetchFilmDetailsPage();
  }, [movieId]);

  console.log(film);

  if (status === 'idle') {
    return <p>Try again</p>;
  }

  if (status === 'pending') {
    return <p>Wait....</p>
  }

   if (status === 'resolved') {
    return <p>FilmDetailPage</p>
  }

  if (status === "rejected") {
    return <h2>{error.messaage}</h2>
  }
  
}