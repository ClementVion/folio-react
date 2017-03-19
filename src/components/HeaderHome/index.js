import React, { Component } from 'react'
import './HeaderHome.css'

class HeaderHome extends Component {
  
  render() {
    return(
      <section className="HeaderHome">
        <h1 className="HeaderHome__title">Front End Developer</h1>
        <p className="HeaderHome__description">Welcome to my portfolio, I'm currently 
        a third year web student at HETIC in Paris. Here are the projects 
        I'm most proud of. One more thing, I'm looking for an internship from 
        July to October 2017. Feel free to contact me !</p>
      </section>
    )
  }
  
}

export default HeaderHome