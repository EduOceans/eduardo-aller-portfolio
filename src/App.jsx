import './App.css';
import React from 'react';
import Header from './components/header/Header';
import MainContent from './components/main-content/MainContent';

function App() {

  return (
    <>
      <div className="App">
        <div className='background-img'>
          <Header />
          <MainContent />
        </div>
      </div>
    </>
  )
}

export default App;
