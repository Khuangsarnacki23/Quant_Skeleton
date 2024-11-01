import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Data from './components/Menu/data';

function App() {
  return (
    <BrowserRouter>
    <div className = "zoomed">
      < Data/>
    </div>
    </BrowserRouter>
  );
}

export default App;
