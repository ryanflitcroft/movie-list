import { useState } from 'react';

export default function useAppState() {
  const [allMovies, setAllMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filter, setFilter] = useState('');
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDirector, setMovieDirector] = useState('');
  const [yearReleased, setYearReleased] = useState('');
  const [color, setColor] = useState(''); 

  return {
    allMovies, setAllMovies,
    filteredMovies, setFilteredMovies,
    filter, setFilter,
    movieTitle, setMovieTitle,
    movieDirector, setMovieDirector,
    yearReleased, setYearReleased,
    color, setColor
  };
}