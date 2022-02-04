import React from 'react';

export default function Movie({ movie }) {
  return (
    <div style={{ backgroundColor: movie.color }}>
      <h3>{movie.movieTitle}</h3>
      <p>{movie.movieDirector}</p>
      <p>{movie.yearReleased}</p>
    </div>
  );
}
