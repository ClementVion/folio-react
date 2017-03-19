import React, { Component } from 'react'
import Header from '../../components/Header'
import projects from '../../projects.json'

class ProjectScene extends Component {
  
  render() {
    const slug = this.props.match.params.project;
    const project = projects.find(item => item.slug === slug)
    
    return (
      <div className="Project">
        <Header />
        Project {project.title}
      </div>
    )
  }
}

export default ProjectScene