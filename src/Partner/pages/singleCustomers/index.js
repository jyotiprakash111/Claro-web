import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import PartnerHome from "../../components/customerTabBar/index";

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
