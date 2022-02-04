import './App.css';
import React from 'react';
import useAppState from './useAppState';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/Footer';

function App() {
  const {
    
  } = useAppState();

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;