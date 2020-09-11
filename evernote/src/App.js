import React from "react";
import "./App.css";
import LogIn from "./components/login";
import Registration from "./components/registration";
import NavBar from "./components/navbar";
import TableCards from "./components/TableCards/TableCards.js";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route path="/login" exact>
            <div className="flex margin">
              <LogIn></LogIn>
            </div>
          </Route>
          <Route path="/register" exact>
            <div className="flex margin">
              <Registration></Registration>
            </div>
          </Route>
          <Route path="/secret" exact>
            <div className="flex margin">The OK WAS GOOD</div>
          </Route>
        </Switch>
      </Router>
      <TableCards />
    </>
  );
}

export default App;
