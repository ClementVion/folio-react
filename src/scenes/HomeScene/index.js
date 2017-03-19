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
          { projects.map(this.renderProject) }
             
        </ReactCSSTransitionGroup>
      </div>
    )
  }
  
  renderProject({id, title, slug}) {
    return <ProjectHome key={id} title={title} slug={slug} />
  }
}

export default HomeScene