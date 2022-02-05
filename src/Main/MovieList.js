import React from 'react';
import Movie from './Movie';

export default function MovieList({
  allMovies,
  setAllMovies,
  filteredMovies,
}) {

  function deleteMovie(id) {
    const i = allMovies.findIndex(movie => movie.id === id);
    allMovies.splice(i, 1);
    setAllMovies([...allMovies]);
  }

  return (
    <>
      <section>
        {filteredMovies.map((movie, i) =>
          <Movie key={movie, i}
            id={movie.id}
            movieTitle={movie.movieTitle}
            movieDirector={movie.movieDirector}
            yearReleased={movie.yearReleased}
            color={movie.color}
            deleteMovie={deleteMovie} />
        )}
      </section>
    </>
  );
}