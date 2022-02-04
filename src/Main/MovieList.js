import React from 'react';
import Movie from './Movie';
import MovieFilter from './MovieFilter';

export default function MovieList({
  allMovies,
  setAllMovies,
  filteredMovies,
  filter,
  setFilter,
  // movieTitle,
  // movieDirector,
  // yearReleased,
  // color
}) {

  function deleteMovie(id) {
    const i = allMovies.findIndex(movie => movie.id === id);
    allMovies.splice(i, 1);
    setAllMovies([...allMovies]);
  }

  return (
    <section>
      <MovieFilter filter={filter}
        setFilter={setFilter} />

      {filteredMovies.map((movie, i) =>
        <Movie key={movie, i}
          movie={movie}
          deleteMovie={deleteMovie} />
      )}
    </section>
  );
}
