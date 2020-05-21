import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Test from './pages/Test';
import JsonFormat from './pages/JsonFormat';
import ImageConvert from './pages/ImageConvert';

function App() {
  return (
    <Router>
      <div style={{flexDirection:"row"}}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Test">Test</Link>
          </li>
          <li>
            <Link to="/JsonFormat">JsonFormat</Link>
          </li>
          <li>
            <Link to="/ImageConvert">ImageConvert</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Test">
            <Test />
          </Route>
          <Route path="/JsonFormat">
            <JsonFormat />
          </Route>
          <Route path="/ImageConvert">
            <ImageConvert />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

export default App;
