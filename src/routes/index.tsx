import React from "react";
import { Switch } from "react-router-dom";
import CreatePatient from "../pages/CreatePatient";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Profile from "../pages/Profile";

import Route from "./Route";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/a" exact component={Login} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/" component={CreatePatient} />
  </Switch>
);

export default Routes;
