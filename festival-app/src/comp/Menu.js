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
                    <a href="/Mat">Mat</a>
                </li>

            </ul>

        </navbar>
    )
}


