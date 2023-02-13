import './App.css';



import Menu from './comp/Menu'

import Mat from './pages/Mat';
import React,{userState} from 'react';



function App() {
    
    let component
    switch (window.location.pathname) {
        case "/":
            component = <Menu/>
            break;
        case "/Mat":
            component = <Mat />
            break

        default:
            break;
    }

    


    return (
        <>
           
           
            {component}

        </>


    );
}

export default App;