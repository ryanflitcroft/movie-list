import React from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

export default function Main({
  allMovies, setAllMovies,
  filteredMovies, setFilteredMovies,
  filter, setFilter,
  movieTitle, setMovieTitle,
  yearReleased, setYearReleased,
  movieDirector, setMovieDirector,
  color, setColor
}) {

  return (
    <main>
      <MovieForm />
      <MovieList />
    </main>
  );
}
