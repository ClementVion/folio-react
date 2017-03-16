import React, { Component } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Project title="Thaddé Méneur Portfolio"/>
        <Project title="Anais Profit"/>
      </div>
    );
  }
}

export default App;
