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
import General from "../components/General/index";
import General_Testimonial from "../components/General/Testimonial/index";
import General_Location from "../components/General/index2";
import Team from "../components/Team/index";
import TeamAddNew from "../components/Team/Team_add_new";
import Profile from "./Profile/index";
import Payments from "./Payments/index";
import Notification from "./Notification/index";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <Switch>
            <Route exact path="/" component={Partner} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/partner" component={Partner} />
            <Route exact path="/partner_home" component={PartnerHome} />
            <Route exact path="/sales" component={Sales} />
            <Route exact path="/schedule" component={Schedule} />
            <Route exact path="/general" component={General} />
            <Route
              exact
              path="/general_location"
              component={General_Location}
            />
            <Route
              exact
              path="/general_testimonial"
              component={General_Testimonial}
            />
            <Route exact path="/payments" component={Payments} />
            <Route exact path="/notification" component={Notification} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/team" component={Team} />
            <Route exact path="/team_add_new" component={TeamAddNew} />
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
