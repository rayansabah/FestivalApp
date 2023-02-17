import React from 'react'
import logo from './logo.png';
import '../css/menu.css'


export default function Menu() {
    return (
        <navbar className="nav">
            <ul>
                <li>
                    <a href="/" className="logo" >  <img src={logo}  alt="logo" width={270} /></a>
                </li>
            </ul>
            <ul>
                <div className='menu'>

                <li>
                    <a className='text-menu' href="/Scene">Scener</a>
                </li>
                <li>
                    <a className='text-menu' href="/Location">Område</a>
                </li>
                
                <li>
                    <a className='text-menu' href="/Food">Mat</a>
                </li>
                
                <li>
                    <a className='text-menu' href="/Contact">Kontakta Oss</a>
                </li>
                <li>
                    <a className='text-menu' href="/About">Om oss</a>
                </li>
                </div>
            </ul>
        </navbar>
    )
}


