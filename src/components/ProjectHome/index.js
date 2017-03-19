import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './ProjectHome.css'

class ProjectHome extends Component {
  
  render() {
    return(
      <section className="ProjectHome">
        <Link to={'/projects/' + this.props.project.slug }>
          <div className="ProjectHome__infos">
            <span className="ProjectHome__name"> {this.props.project.title} / </span>
            <span className="ProjectHome__role">  {this.props.project.role} </span>
          </div>
          
          <div className="ProjectHome__screenshot">
            <img src={this.props.project.images[0].src} alt="website screenshot"></img>
            <h3 className="ProjectHome__discover">Discover</h3>
          </div>
        </Link>
      </section>
    );
  }
}

export default ProjectHome;