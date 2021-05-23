import React, { Component } from "react";
import SideBar from "../common/SideBar";
import Header from "../common/HeaderMain";
import Main from "./Main";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header name="Schedule" avatar={true} />
          <Main />
        </div>
      </div>
    );
  }
}
