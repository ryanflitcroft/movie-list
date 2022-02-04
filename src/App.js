import './App.css';
import React from 'react';
import useAppState from './useAppState';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  const {
    allMovies, setAllMovies,
    filteredMovies, setFilteredMovies,
    filter, setFilter,
    movieTitle, setMovieTitle,
    yearReleased, setYearReleased,
    movieDirector, setMovieDirector,
    color, setColor
  } = useAppState();

  return (
    <>
      <Header />
      <Main allMovies={allMovies} setAllMovies={setAllMovies}
        filteredMovies={filteredMovies} setFilteredMovies={setFilteredMovies}
        filter={filter} setFilter={setFilter}
        movieTitle={movieTitle} setMovieTitle={setMovieTitle}
        yearReleased={yearReleased} setYearReleased={setYearReleased}
        movieDirector={movieDirector} setMovieDirector={setMovieDirector}
        color={color} setColor={setColor} />
      <Footer />
    </>
  );
}

export default App;