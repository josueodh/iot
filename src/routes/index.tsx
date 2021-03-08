import React from "react";
import { Switch } from "react-router-dom";
import CreatePatient from "../pages/CreatePatient";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

import Route from "./Route";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile/:id" component={Profile} isPrivate />
    <Route path="/patient" component={CreatePatient} isPrivate />
  </Switch>
);

export default Routes;
