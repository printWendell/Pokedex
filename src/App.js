import React from 'react';
import './App.css';
import Header from './Components/Header.Component/header'
import Pokelist from './Components/Pokelist.Component/pokeList'
import Footer from './Components/Footer.Component/footer'


function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="container">
        <Pokelist />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
