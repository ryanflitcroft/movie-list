import React, { useEffect } from 'react';
import MovieList from './MovieList';
import MovieForm from './MovieForm';
import Movie from './Movie';
import MovieFilter from './MovieFilter';

export default function Main({
  allMovies, setAllMovies,
  filteredMovies, setFilteredMovies,
  filter, setFilter,
  movieTitle, setMovieTitle,
  movieDirector, setMovieDirector,
  yearReleased, setYearReleased,
  color, setColor
}) {
  
  useEffect(() => {
    if (!filter) {
      setFilteredMovies([...allMovies]);
    } else {
      const filteredMovies = allMovies.filter(movie => movie.movieTitle.toLowerCase().includes(filter.toLowerCase()));
      setFilteredMovies([...filteredMovies]);
    }

  }
  , [allMovies, filter, setFilteredMovies]);      

  return (
    <main>
      <section>
        <Movie movieTitle={movieTitle}
          movieDirector={movieDirector}
          yearReleased={yearReleased}
          color={color} />
        <MovieForm movieTitle={movieTitle} setMovieTitle={setMovieTitle}
          movieDirector={movieDirector} setMovieDirector={setMovieDirector}
          yearReleased={yearReleased} setYearReleased={setYearReleased}
          color={color} setColor={setColor}
          allMovies={allMovies} setAllMovies={setAllMovies} />        
      </section>
      <section>
        <MovieFilter filter={filter}
          setFilter={setFilter} />
      </section>
      <section>
        <MovieList allMovies={allMovies} setAllMovies={setAllMovies}
          filteredMovies={filteredMovies}
          filter={filter} setFilter={setFilter}
          movieTitle={movieTitle}
          movieDirector={movieDirector}
          yearReleased={yearReleased}
          color={color} />
      </section>

    </main>
  );
}