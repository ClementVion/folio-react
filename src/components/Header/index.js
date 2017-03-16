import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="header__top">
          <a href="#" className="header__name">Clément Vion</a>
          <a href="#"className="header__contact">clementvion1@gmail.com</a>
        </div>
        <h1 className="header__title">Front end developer</h1>
        <p className="header__description">Welcome to my portfolio, I'm currently 
        a third year web student at HETIC in Paris. Here are the projects 
        I'm most proud of. One more thing, I'm looking for an internship from 
        July to October 2017. Feel free to contact me !</p>
      </header>
    );
  }
}

export default Header;