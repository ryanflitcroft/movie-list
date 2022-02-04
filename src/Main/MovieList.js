import React from 'react';
import Movie from './Movie';

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
      {allMovies.map((movie, i) =>
        <Movie key={movie, i}
          movie={movie} />
      )}
    </section>
  );
}
