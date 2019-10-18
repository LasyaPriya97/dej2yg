import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function Sample() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">ab</Link>
            </li>
            <li>
              <Link to="/second">Second</Link>
            </li>
            <li>
              <Link to="/third">Third</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/first">
            <First />
          </Route>
          <Route path="/second">
            <Second />
          </Route>
          <Route path="/third">
            <Third />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
  return <h3> home</h3>;
}

function First(){
  return <First/>;
}

function Second(){
 return <Second/>;
}

function Third(){
  return <third/>;
}

