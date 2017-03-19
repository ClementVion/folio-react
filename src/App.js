import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import HomeScene from './scenes/HomeScene'
import ProjectScene from './scenes/ProjectScene'
import './App.css'

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            
            <Route exact path="/" component={HomeScene} />
            <Route path="/projects/:project" component={ProjectScene} />
          </div>
        </Router>
      </div>
    );
  }
  
}

export default App;
