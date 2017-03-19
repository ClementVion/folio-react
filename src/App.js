import React, { Component } from 'react';
import HomeScene from './scenes/HomeScene';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      projects: [
        {
          'title': 'Thaddé Méneur Portfolio',
          'id': '0'
        },
        {
          'title': 'Anais Profit',
          'id': '1'
        },
      ]
    }
  }
  
  render() {
    return (
      <div className="App">
        <HomeScene projects={this.state.projects} />
      </div>
    );
  }
  
}

export default App;
