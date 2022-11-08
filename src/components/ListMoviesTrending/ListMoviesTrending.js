import PropTypes from 'prop-types'

import { Title, ListTrendFilms, ItemTrendFilms } from './ListMoviesTrending.styled'

export default function ListMoviesTrending({films}) {
  return (
    <>
    <Title>Trending Films</Title>
    <ListTrendFilms>
        {films.map(film => (
          <li key={film.id}>
            <ItemTrendFilms to={`movies/${film.id}`}>
              {film.original_title}
            </ItemTrendFilms>
          </li>
        ))}
      </ListTrendFilms>
      </>
  )
}

ListMoviesTrending.propTypes = {
  films: PropTypes.array.isRequired
}


