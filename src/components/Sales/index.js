import React, { Component } from "react";
import SideBar from "./sidebar2";
import Header from "./Header";
import Main from "./Main";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}
