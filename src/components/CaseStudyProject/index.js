import React, { Component } from 'react'
import './CaseStudyProject.css'

class CaseStudyProject extends Component {
  
  render() {
    return(
      <section className="CaseStudyProject">
        
        { this.props.project.images.map( (item) => {
          return <div className="CaseStudyProject__container">
             <img key={item.id} src={item.src} alt=""></img></div>
        }) }

      </section>
    )
  }
  
}

export default CaseStudyProject