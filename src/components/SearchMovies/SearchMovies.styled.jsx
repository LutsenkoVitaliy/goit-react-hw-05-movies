import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  
`
export const ListSearchFilms = styled.ol`
  font-size: 20px;
  color: rgb(51, 51, 51);
`

export const ItemSearchFilms = styled(Link)`
  font-size: 20px;
  text-decoration: none;
  line-height: 1.4;
  color: rgb(51, 51, 51);

  &:hover {
    color: red;
  }
`