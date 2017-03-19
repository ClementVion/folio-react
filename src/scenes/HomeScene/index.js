import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import HeaderHome from '../../components/HeaderHome'
import ProjectHome from '../../components/ProjectHome'
import projects from '../../projects.json'

class HomeScene extends Component {
  
  render() {
    return (
      <div className="Home">
        <ReactCSSTransitionGroup 
            transitionName="example"
            transitionAppear={true} 
            transitionAppearTimeout={400}
            transitionEnter={false} 
            transitionLeave={false}>
          
          <HeaderHome />
          { projects.map( (project) => {
            return <ProjectHome key={project.id} project={project} />
          }) }
             
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default HomeScene