import React, { Component } from "react";
import SideBar from "../../../components/common/SideBar";
import Header from "../../../components/common/HeaderMain";
import Servies from "./Services";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header name="Home" avatar={true}/>
          <Servies />
        </div>
      </div>
    );
  }
}
