import { Outlet } from "react-router-dom";
import { Link, Nav } from "./Navigation.styled";


export default function Navigation () {
  return (
    <>
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </Nav>
      <Outlet />
    </>
  );
}

