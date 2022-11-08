import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  list-style: none;
  display: flex;
  justify-content: start;
  box-shadow: 4px 2px 2px rgb(192, 192, 192);
  background: rgb(247, 247, 247);
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  margin: 10px 20px;
  font-weight: 700;
  color: black;
  &.active {
    color: red;
  }
`;