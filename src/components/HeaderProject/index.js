import React, { Component } from 'react'
import './HeaderProject.css'

class HeaderProject extends Component {
  
  render() {
    return(
      <section className="HeaderProject">
        <h1 className="HeaderProject__title">{this.props.project.title}</h1>
        <p className="HeaderProject__description">{this.props.project.desc}</p>
        <div className="HeaderProject__infos">
					<div className="HeaderProject__info">
						<span className='HeaderProject__infoName'>date</span>
						<span className='HeaderProject__infoSpec'>{this.props.project.date}</span>
					</div>
					<div className="HeaderProject__info">
						<span className='HeaderProject__infoName'>role</span>
						<span className='HeaderProject__infoSpec'>{this.props.project.role}</span>
					</div>
					<div className="HeaderProject__info">
						<span className='HeaderProject__infoName'>client</span>
						<span className='HeaderProject__infoSpec'>{this.props.project.client}</span>
					</div>
        </div>
      </section>
    )
  }
  
}

export default HeaderProject