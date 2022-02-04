import React from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';

export default function Main({
  allMovies, setAllMovies,
  filteredMovies, setFilteredMovies,
  filter, setFilter,
  movieTitle, setMovieTitle,
  movieDirector, setMovieDirector,
  yearReleased, setYearReleased,
  color, setColor
}) {

  return (
    <main>
      <MovieForm movieTitle={movieTitle} setMovieTitle={setMovieTitle}
        movieDirector={movieDirector} setMovieDirector={setMovieDirector}
        yearReleased={yearReleased} setYearReleased={setYearReleased}
        color={color} setColor={setColor}
        allMovies={allMovies} setAllMovies={setAllMovies} />
      <MovieList />
    </main>
  );
}
