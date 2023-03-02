import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import backbutton from './chevron-left.svg'
import '../css/NavBar.css'

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="back-button">
          <Link to="/">
          <img src={ backbutton } ></img>
          </Link>
        </div>
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div></div>
      </nav>
    );
  };
  
  export default Navbar;