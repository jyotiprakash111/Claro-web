import React, { Component } from "react";
import SideBar from "../common/SideBar";
import Header from "../common/HeaderMain";
import PartnerHome from "./Schedule/index";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header name="Customers" avatar={true} />
          <PartnerHome />
        </div>
      </div>
    );
  }
}
