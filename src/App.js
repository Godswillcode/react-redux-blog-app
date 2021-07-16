import React from 'react';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>

      <div className="app__page">
        <Blogs/>
      </div>
    </div>
  );
}

export default App;
