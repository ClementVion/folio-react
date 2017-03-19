import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomeScene from './scenes/HomeScene'
import './App.css'
import projects from './projects.json'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <Route path="/" component={HomeScene} />
        </Router>
      </div>
    );
  }
  
}

export default App;
