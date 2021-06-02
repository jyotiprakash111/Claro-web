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
      <div id="main">
        <div className="landing">
          <Tabbar />
        </div>
      </div>
    );
  }
}

export default index;
