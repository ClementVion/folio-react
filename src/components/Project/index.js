import React, { Component } from 'react';
// import className from 'classnames';
import './Project.css';

class Project extends Component {
  
  render() {
    return(
      <section className="App-project">
        <div>
          <h2 className="title">{ this.props.title }</h2>
        </div>
      </section>
    );
  }
}

export default Project;