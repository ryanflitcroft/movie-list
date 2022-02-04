import React from 'react';
import Movie from './Movie';
import MovieFilter from './MovieFilter';

export default function MovieList({
  allMovies,
  filteredMovies,
  filter,
  setFilter,
  movieTitle,
  movieDirector,
  yearReleased,
  color
}) {

  return (
    <section>
      <MovieFilter filter={filter}
        setFilter={setFilter} />
        
      {filteredMovies.map((movie, i) =>
        <Movie key={movie, i}
          movie={movie} />
      )}
    </section>
  );
}
