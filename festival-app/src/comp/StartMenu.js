import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import '../css/menu.css'
import Footer from "./Footer";

function StartMenu() {
  return (
    <>
      <div className='menu'>


        <li>
          <a href="/" className="logo" >  <img src={logo} alt="logo"/></a>
        </li>
        <li>
          <Link className='text-menu' to="/Scene">Scener</Link>
        </li>
        <li>
          <Link className='text-menu' to="/Location">Område</Link>
        </li>
        <li>
          <Link className='text-menu' to="/Food">Mat</Link>
        </li>
        <li>
          <Link className='text-menu' to="/Contact">Kontakta oss</Link>
        </li>
        <li>
          <Link className='text-menu' to="/sponsor">Sponsorer</Link>
        </li>

      </div>
      <Footer/>
    </>
  );
}

export default StartMenu;