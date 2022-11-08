import { useState } from "react"
import PropTypes from "prop-types";
import { Form, Input, Button } from "./SearchForm.styled";



export default function SearchForm({onSearchSubmit}) {
  const [searchFilm, setSearchFilm] = useState('')

  const handleFilmChange = e => {
    setSearchFilm(e.target.value.toLowerCase())
  }

  const handleSubmit = e => {
    e.preventDefault();

    if (!searchFilm.trim()) {
      alert('Поисковая строка пуста');
      return;
    }

    onSearchSubmit(searchFilm);
    setSearchFilm('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search film"
        value={searchFilm}
        onChange={handleFilmChange}
      />
      <Button type="submit">Search</Button>
    </Form>
  )
}

SearchForm.propType = {
  onSearchSubmit: PropTypes.func.isRequired
}