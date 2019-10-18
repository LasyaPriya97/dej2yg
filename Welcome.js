
import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import First from './First';
import Second from './Second';
import Third from './Third';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
        
              <Tabs value={location.pathname}>
                <Tab label="Item One" component={Link} to="/" />
                <Tab label="Item Two" component={Link} to="/second" />
                <Tab
                  label="Item Three"
                   component={Link}
                  to="/third"
                />
              </Tabs>
              <Switch>
                <Route path="/second" render={() => <div><Second/></div>} />
                <Route path="/third" render={() => <div><third/></div>} />
                <Route path="/" render={() => <div><First/></div>} />
              </Switch>
            
            </Fragment>
          )}
        />
      </div>
    </BrowserRouter>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);