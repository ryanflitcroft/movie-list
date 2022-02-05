import React from 'react';

export default function MovieForm({
  movieTitle, setMovieTitle,
  movieDirector, setMovieDirector,
  yearReleased, setYearReleased,
  color, setColor,
  allMovies, setAllMovies
}) {

  function handleSubmit(e) {
    e.preventDefault();

    const submitMovie = {
      id: Math.random(),
      movieTitle,
      movieDirector,
      yearReleased,
      color
    };

    setAllMovies([...allMovies, submitMovie]);
    setMovieTitle('');
    setMovieDirector('');
    setYearReleased('');
    setColor('');
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Add a DVD</h2>
        <label htmlFor='name'>Title</label>
        <input onChange={(e) => setMovieTitle(e.target.value)}
          name='title' 
          type='text' 
          placeholder='Paranoid Park' 
          value={movieTitle} 
          required
          autoFocus />
        <label htmlFor='director'>Director</label>
        <input onChange={(e) => setMovieDirector(e.target.value)}
          name='director' 
          type='text' 
          placeholder='Gus Van Sant' 
          value={movieDirector} 
          required />
        <label htmlFor='yearReleased'>Year Released</label>
        <input onChange={(e) => setYearReleased(e.target.value)}
          name='yearReleased' 
          type='number' 
          min='1888' 
          max='2022' 
          placeholder='2007' 
          value={yearReleased} 
          required />
        <label htmlFor='color'>Color</label>
        <input onChange={(e) => setColor(e.target.value)}
          type='color' 
          value={color} 
          required />
        <button value='submit'>Submit</button>
      </form>
    </>
  );
}