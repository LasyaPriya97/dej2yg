import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";

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
                  <Tab label="Page Two" component={Link} to="/two" />
                  <Tab label="Page Three" component={Link} to="/three" />
                  <Tab label="Page Four" component={Link} to="/four" />
                </Tabs>
                <Tab label="Page Five" component={Link} to="/five" />
              </AppBar>
              <br />
              <Switch>
                <Route
                  path="/Two"
                  render={() => (
                    <div>
                      <Two/>
                    </div>
                  )}
                />
                <Route
                  path="/Three"
                  render={() => (
                    <div>
                      <Three/>
                    </div>
                  )}
                />
                <Route
                  path="/Four"
                  render={() => (
                    <div>
                      <Four />
                    </div>
                  )}
                />
                <Route
                  path="/Five"
                  render={() => (
                    <div>
                      <Five />
                    </div>
                  )}
                />
                <Route
                  path="/"
                  render={() => (
                    <div>
                      <One />
                    </div>
                  )}
                />
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
