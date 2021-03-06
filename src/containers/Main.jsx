import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Edificios from "../components/Edificios";
import Dependencias from "../components/Dependencias";
import Navbar from "../components/Navbar";
import AddEdificio from "../components/AddEdificio";
import AddDependencia from "../components/AddDependencia";

export default function Main() {
  return (
    <Router>
      <div id="main">
        <Navbar />
        <Switch>
          <Route exact path="/edificios" render={() => <Edificios />} />
          <Route
            exact
            path="/dependencias/:id"
            render={({ match }) => <Dependencias id={match.params.id} />}
          />
          <Route exact path="/addEdificio" render={() => <AddEdificio />} />
          <Route
            exact
            path="/addDependencia"
            render={() => <AddDependencia />}
          />
          <Redirect from="/" to="/edificios" />
        </Switch>
      </div>
    </Router>
  );
}
