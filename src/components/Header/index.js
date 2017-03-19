import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="header__top">
          <Link to='/' className="header__name">Clément Vion </Link>
          <a href="#"className="header__contact">clementvion1@gmail.com</a>
        </div>
      </header>
    );
  }
}

export default Header;