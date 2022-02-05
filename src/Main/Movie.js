import React from 'react';

export default function Movie({ id,
  movieTitle,
  movieDirector,
  yearReleased,
  color, 
  deleteMovie }) {

  return (
    <article onClick={() => deleteMovie && deleteMovie(id)}
      style={{ backgroundColor: color }}>
      <h3>{movieTitle}</h3>
      <p>{movieDirector}</p>
      <p>{yearReleased}</p>
    </article>
  );
}