import React, { useState, useEffect } from 'react';
import Menu from './comp/Menu'
import Mat from './pages/Mat';

function App() {
    const [component, setComponent] = useState(null)

    useEffect(() => {
        switch (window.location.pathname) {
            case "/":
                setComponent(<Menu />)
                break;
            case "/Scene":
                setComponent(<Mat />)
                break;
            case "/Omrade":
                setComponent(<Mat />)
                break;
            case "/Mat":
                setComponent(<Mat />)
                break;
            case "/Kontakt":
                setComponent(<Mat />)
                break;
            case "/About":
                setComponent(<Mat />)
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