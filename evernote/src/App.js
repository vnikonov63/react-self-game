import React from "react";
import "./App.css";
import LogIn from "./components/login";
import Registration from "./components/registration";
import NavBar from "./components/navbar";
import TableCards from "./components/TableCards/TableCards.js";
import User from "./components/user";
import PrivateRouter from "./components/PrivateRouter";

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
          <PrivateRouter path="/user/:id" exact>
            <div className="flex margin">
              <User></User>
            </div>
          </PrivateRouter>
          <PrivateRouter path="/user/:id/game" exact>
            THE GAME FOR THE USER
          </PrivateRouter>
          <PrivateRouter path="/secret" exact></PrivateRouter>
        </Switch>
      </Router>
      <TableCards />
    </>
  );
}

export default App;
