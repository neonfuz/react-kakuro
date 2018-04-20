import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Kakuro from './components/Kakuro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="KakuroWrapper">
          <Kakuro />
        </div>
      </div>
    );
  }
}

export default App;
