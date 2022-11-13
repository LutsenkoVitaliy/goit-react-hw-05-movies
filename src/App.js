import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';

import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Navigation from "./components/Navigation/Navigation";
import { Cast, HomePage, MovieDetailsPage, MoviesPage, Reviews } from './view';

export default function App (){
  return (
  <>
  <Routes>
    <Route path="/" element={<Navigation />}>
    <Route index element={<HomePage />} />
    <Route path="movies" element={<MoviesPage/>}/>
      <Route path="movies/:movieId" element={<MovieDetailsPage/>}>
        <Route path="cast" element={<Cast/>}/>
        <Route path="reviews" element={<Reviews />} />
      </Route>
    <Route path="*" element={<Navigate to="/"/>}/>  
    </Route>
  </Routes> 
  
  <ToastContainer autoClose={3000} />
  </>
  );
};
