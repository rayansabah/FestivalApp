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
            case "/Mat":
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