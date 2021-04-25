import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "../routes";
import Main from "./Customer_Journey/Schedule/index";
import Services from "./Customer_Journey/Services/index";
import Contact from "./contact/contact";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/services" component={Services} />
            <Route exact path={routes.CONTACT} component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
