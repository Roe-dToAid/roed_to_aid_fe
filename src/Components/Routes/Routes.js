import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import HomeView from "../../Views/HomeView/HomeView";
import AboutView from "../../Views/AboutView/AboutView";
import ClinicsView from "../../Views/ClinicsView/ClinicsView";
import StatePoliciesView from "../../Views/StatePoliciesView/StatePoliciesView";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/about">
          <AboutView />
        </Route>
        <Route exact path="/clinics">
          <ClinicsView />
        </Route>
        <Route exact path="/states-policies">
          <StatePoliciesView />
        </Route>
        <Route exact path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
