import { ListSearchFilms, ItemSearchFilms } from './SearchMovies.styled'
import PropTypes from 'prop-types'


export default function SearchMovies ({films}) {
  return (
    <>
      <ListSearchFilms>
        {films.map(film => (
          <li key={film.id}>
            <ItemSearchFilms to={String(film.id)}>{film.original_title}</ItemSearchFilms>
          </li>
        ))}
      </ListSearchFilms>
    </>
  )
}

SearchMovies.propTypes = {
  films: PropTypes.array.isRequired
}

 
