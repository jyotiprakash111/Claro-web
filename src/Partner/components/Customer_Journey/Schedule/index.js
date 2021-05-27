import React, { Component } from "react";
import Appbar from "./Appbar";
import BreadCrumbs from "./breadcrumbs";
import Tabbar from "./tabbar";

import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./footer";

class index extends Component {
  render() {
    return (
      <div id='main'>
        <Appbar />
        <div className='landing'>
          {/* <BreadCrumbs />
         <h1>Schedule</h1> */}

          <Tabbar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default index;
