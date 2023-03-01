import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import StartMenu from './comp/StartMenu';
import './css/fonts.css'

import Scene from './pages/Scene';
import Location from './pages/Location';
import Food from './pages/Food';
import Contact from './pages/Contact';
import Sponsor from './pages/Sponsor';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StartMenu />
        </Route>
        <Route path="/sponsor">
          <Sponsor/>
        </Route>
        <Route path="/scene">
          <Scene />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/Food">
          <Food />
        </Route>
        <Route path="/Location">
          <Location />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;