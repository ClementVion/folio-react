import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Header.css';

class Header extends Component {
  render() {
    return(
      <header className="Header">
        <div className="Header__top">
          <Link to='/' className="Header__name">Clément Vion </Link>
          <a href="#"className="Header__contact">clementvion1@gmail.com</a>
        </div>
      </header>
    );
  }
}

export default Header;