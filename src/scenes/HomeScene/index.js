import React, { Component } from 'react'
import Header from '../../components/Header'
import HeaderHome from '../../components/HeaderHome'
import ProjectHome from '../../components/ProjectHome'
import projects from '../../projects.json'

class HomeScene extends Component {
  
  render() {
    return (
      <div className="Home">
        <Header />
        <HeaderHome />
        { projects.map(this.renderProject) }
      </div>
    )
  }
  
  renderProject({id, title, slug}) {
    return <ProjectHome key={id} title={title} slug={slug} />
  }
}

export default HomeScene