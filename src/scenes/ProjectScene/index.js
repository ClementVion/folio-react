import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import projects from '../../projects.json'
import HeaderProject from '../../components/HeaderProject'
import CaseStudyProject from '../../components/CaseStudyProject'

class ProjectScene extends Component {
  
  render() {
    const slug = this.props.match.params.project;
    const project = projects.find(item => item.slug === slug)
    
    return (
      <div className="Project">
        <ReactCSSTransitionGroup 
            transitionName="example"
            transitionAppear={true} 
            transitionAppearTimeout={400}
            transitionEnter={false} 
            transitionLeave={false}>
          
          <HeaderProject project={project} />  
          <CaseStudyProject project={project} />  
          
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default ProjectScene