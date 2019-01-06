import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./layout/NavBar";
import Dashboard from "../components/dashboard/Dashboard";
import ProjectDetails from "../components/projects/ProjectDetails";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import CreateProject from "../components/projects/CreateProject";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          {/* only one route is loaded at one time, the route inside a switch  */}
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
