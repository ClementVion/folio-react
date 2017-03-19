import React, { Component } from 'react';
// import className from 'classnames';
import './ProjectHome.css';

class ProjectHome extends Component {
  
  render() {
    return(
      <section className="ProjectHome">
        <div>
          <h2 className="ProjectHome__title">{ this.props.title }</h2>
        </div>
      </section>
    );
  }
}

export default ProjectHome;