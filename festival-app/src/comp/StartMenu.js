import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import '../css/menu.css'


function StartMenu() {
  return (

    <div className='menu'>

      <ul>
        <li>
          <a href="/" className="logo" >  <img src={logo} alt="logo" width={270} /></a>
        </li>
        <li>
          <Link className='text-menu' to="/Scene">Scene</Link>
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
          <Link className='text-menu' to="/About">about</Link>
        </li>
      </ul>
    </div>

  );
}

export default StartMenu;