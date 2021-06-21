import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import Main from "./Main/tabBar";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header to='/settings' title="Notification" name="Notification" avatar={true}/>
          <Main />
        </div>
      </div>
    );
  }
}
