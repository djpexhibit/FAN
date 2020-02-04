import React from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.scss";

import Home from "./containers/home/Home";
import Dashboard from "./containers/dashboard/Dashboard";
import Register from "./containers/register/Register";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default withRouter(App);
