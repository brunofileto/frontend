import React from "react";
import { isAuthenticated } from "./services/auth";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Enrollment from "./pages/Enrollment";
import UserHome from "./pages/UserHome";
import Evaluation from "./pages/Evaluation";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <PrivateRoute path="/enrollment" component={Enrollment} />
      <PrivateRoute path="/evaluation" component={Evaluation} />
      <PrivateRoute path="/userhome" component={UserHome} />
      <Route component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
