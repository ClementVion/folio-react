import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProjectHome.css'

class ProjectHome extends Component {
  
  render() {
    return(
      <section className="ProjectHome">
        <div>
          <Link to={'/projects/' + this.props.slug }>{this.props.title}</Link>
        </div>
      </section>
    );
  }
}

export default ProjectHome;