import React from 'react';
import Header from './components/Header';
import Presentation from './components/Presentation';
import Portfolio from './components/Portfolio';
import Competences from './components/Competences';
import Experiences from './components/Experiences';
import Logos from './components/Logos';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="container-fluid px-0">
      <Header />
      <Presentation />
      <Portfolio />
      <Competences />
      <Experiences />
      <Logos />
      <Contact />
    </div>
  );
}

export default App;
