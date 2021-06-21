import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Main from "./main/tabBar";

export default class index extends Component {
  render() {
    return (
      <div id="batch_schedule">
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <p className="batch_schedule_title">Class title</p>
          <Main />
        </div>
      </div>
    );
  }
}
