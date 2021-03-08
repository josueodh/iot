import React from "react";
import { Switch } from "react-router-dom";
import CreatePatient from "../pages/CreatePatient";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

import Route from "./Route";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/login" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/" component={Profile} />
    <Route path="/teste" component={CreatePatient} />
  </Switch>
);

export default Routes;
