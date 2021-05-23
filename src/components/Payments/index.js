import React, { Component } from "react";
import Sidebar from "../common/SideBar";
import Header from "./Header";
import Main from "./Main";

export default class index extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <div style={{ marginLeft: 300 }}>
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}
