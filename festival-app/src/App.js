import React, { useState, useEffect } from 'react';
import Menu from './comp/Menu'

import Scene from './pages/Scene';
import Location from './pages/Location';
import Food from './pages/Food';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
    const [component, setComponent] = useState(null)

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                setComponent(<Menu />)
                break;
            case "/Scene":
                setComponent(<Scene />)
                break;
            case "/Location":
                setComponent(<Location />)
                break;
            case "/Food":
                setComponent(<Food />)
                break;
            case "/Contact":
                setComponent(<Contact />)
                break;
            case "/About":
                setComponent(<About />)
                break;
            default:
                break;
        }
    }, [window.location.pathname]);

    return (
        <>
            {component}
        </>
    );
}

export default App;