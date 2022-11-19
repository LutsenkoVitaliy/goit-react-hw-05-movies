import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';

import SearchForm from 'components/SearchForm';
import SearchMovies from 'components/SearchMovies';
import { fetchMoviesByName } from 'services/theMoviedbAPI';



export function MoviesPage() {
  const [listFilm, setListFilm] = useState([]);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const nameFilm = searchParams.get('nameFilm') ?? ''


  const handleSearchSubmit = nameFilm => {
    setSearchParams(nameFilm !== '' ? { nameFilm } : {})
  }

  useEffect(() => {
    if (!nameFilm) {
      return
    }
    async function fetchListSearchMovies(nameFilm) {
      try {
        setStatus('pending');
        const Movies = await fetchMoviesByName(nameFilm);
        setListFilm(Movies)
        setStatus('resolved')
      } catch (error) {
        setStatus('rejected')
        setError(error)
      }
    }
    fetchListSearchMovies(nameFilm)
  }, [nameFilm])


  if (status === 'idle') {
    return <SearchForm onSearchSubmit={handleSearchSubmit}/>
  }
  if (status === 'pending') {
    return (
      <>
      <SearchForm onSearchSubmit={handleSearchSubmit}/>
        <h2>Wait....</h2>
      </>
    )
  }
  
  if (status === 'rejected') {
    return (
      <>
        <SearchForm onSearchSubmit={handleSearchSubmit} />
        <h2>{error.messaage}</h2>
      </>
      
    ) 
  }
  if (status === 'resolved') {
    return (
      <>
      <SearchForm onSearchSubmit={handleSearchSubmit} />
        <SearchMovies films={listFilm} />
      </>
    ) 
  }
}




