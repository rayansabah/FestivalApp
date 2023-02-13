import React from 'react'
import logo from './logo.png';


export default function Menu() {
    return (
        <navbar className="nav">
            <ul>
                <li>
                    <a href="/" className="logo" >  <img src={logo}  alt="logo" width={270} /></a>
                </li>
            </ul>

            <ul>

                <li>
                    <a href="/Scene">Scener</a>
                </li>
                <li>
                    <a href="/Location">Område</a>
                </li>
                
                <li>
                    <a href="/Food">Mat</a>
                </li>
                
                <li>
                    <a href="/Contact">Kontakta Oss</a>
                </li>
                <li>
                    <a href="/About">Om oss</a>
                </li>
            </ul>

        </navbar>
    )
}


