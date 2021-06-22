import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import Main from "./main/tabbar.js";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header name="Online Booking" avatar={true} />
          <Main />
        </div>
      </div>
    );
  }
}