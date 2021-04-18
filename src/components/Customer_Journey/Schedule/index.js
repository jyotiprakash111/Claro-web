import React, { Component } from "react";
import Appbar from "./Appbar";
import BreadCrumbs from "./breadcrumbs";
import Tabbar from "./tabbar";
import Clock from "../../../assets/img/footer_icon/clock.png";
import Calender from "../../../assets/img/calender.png";
import "./style.css";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./footer";

class index extends Component {
  render() {
    return (
      <div id="main">
        <Appbar />
        <div className="landing">
          {/* <BreadCrumbs />
         <h1>Schedule</h1> */}
          <p style={{ color: "#323232", fontSize: 13 }}>Starting from</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 50,
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Calender}
                style={{ width: 17, height: 17, marginRight: 10 }}
              />
              <span>7 February 2021</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={Clock}
                style={{ width: 17, height: 17, marginRight: 5 }}
              />{" "}
              Indian Standard Time
            </div>
          </div>
          <Tabbar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default index;
