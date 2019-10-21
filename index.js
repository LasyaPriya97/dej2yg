import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import First from './First';
import Second from './Second';
import Four from './Four';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route
          path="/"
          render={({ location }) => (
            <Fragment>
             <AppBar position="static">
              <Tabs value={location.pathname}>
                <Tab label="Page One" component={Link} to="/" />
                <Tab label="Page Two" component={Link} to="/second" />
                <Tab
                  label="Page Three"
                   component={Link}
                  to="/four"
                />
              </Tabs>
              </AppBar>
              <br/>
              <Switch>
                <Route path="/second" render={() => <div><Second/></div>} />
                <Route path="/four" render={() => <div><Four/></div>} />
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