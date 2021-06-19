import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import partner from "./Partner/pages/customers/index";
import partnerSingle from "./Partner/pages/singleCustomers/index";
import testimonial from "./Partner/pages/testimonial/index";
import general from "./Partner/pages/general/index";
import schedule from "./Partner/pages/schedule/index";
import sales from "./Partner/pages/sales/index";
import team from "./Partner/pages/team/index";
import notification from "./Partner/pages/notification/index";
import profile from "./Partner/pages/profile/index";
import location from "./Partner/pages/location/index";
import payment from "./Partner/pages/payment/index";
import settings from "./Partner/pages/Setting/index";
import batchSchedule from "./Partner/pages/Batch_Schedule/index";
import home from "./Partner/pages/Home/index";
import home_services from "./Partner/pages/Home/Services/index";
import home_classes from "./Partner/pages/Home/Services/Classes/index";
import homeScreen from "./Partner/pages/homePage/index";
import onlineBooking from "./Partner/pages/onlineBooking/index.js";
import NewClass from "./Partner/pages/Home/Services/add-new-class/index";
import NewSchedule from './Partner/pages/newClassSchedule';

import "./style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="root">
          <Switch>
            <Route exact path="/" component={homeScreen} />
            <Route path="/homescreen" component={home} />
            <Route path="/home_services" component={home_services} />
            <Route path="/home_classes" component={home_classes} />
            <Route path="/customer" component={partner} />
            <Route path="/partner_home" component={partnerSingle} />
            <Route path="/testimonial" component={testimonial} />
            <Route path="/general" component={general} />
            <Route path="/schedule" component={schedule} />
            <Route path="/sales" component={sales} />
            <Route path="/team" component={team} />
            <Route path="/notification" component={notification} />
            <Route path="/profile" component={profile} />
            <Route path="/location" component={location} />
            <Route path="/payment" component={payment} />
            <Route path="/settings" component={settings} />
            <Route path="/batch_schedule" component={batchSchedule} />
            <Route path="/online_booking" component={onlineBooking} />
            <Route path="/new_class" component={NewClass} />


            <Route path="/new_class_schedule" component={NewSchedule} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
