import React from 'react';

export default function Movie({ movie, 
  deleteMovie }) {

  return (
    <div onClick={() => deleteMovie(movie.id)}
      style={{ backgroundColor: movie.color }}>
      <h3>{movie.movieTitle}</h3>
      <p>{movie.movieDirector}</p>
      <p>{movie.yearReleased}</p>
    </div>
  );
}
