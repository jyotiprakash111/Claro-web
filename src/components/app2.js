import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import routes from "../routes";
import Main from "./Customer_Journey/Schedule/index";
import Services from "./Customer_Journey/Services/index";
import Contact from "./contact/contact";
import Partner from "./Parter/index";
import PartnerHome from "./Parter/index2";
import Sales from "./Sales/index";
import Schedule from "./Schedule/index";
import Construction from "./construction";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/partner" component={Partner} />
            <Route exact path="/partner_home" component={PartnerHome} />
            <Route exact path="/sales" component={Sales} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/404" component={Construction} />
            <Route exact path="/404/:id" component={Construction} />
            <Route exact path={routes.CONTACT} component={Contact} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
