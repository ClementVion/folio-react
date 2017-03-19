import React, { Component } from 'react'
import Header from '../../components/Header'
import ProjectHome from '../../components/ProjectHome'
import projects from '../../projects.json'

class HomeScene extends Component {
  
  render() {
    return (
      <div className="Home">
        <Header />
        { projects.map(this.renderProject) }
      </div>
    )
  }
  
  renderProject({title, id}) {
    return <ProjectHome key={id} title={title} />
  }
}

export default HomeScene