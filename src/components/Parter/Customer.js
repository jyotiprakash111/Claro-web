import React, { Component } from "react";
import SideBar from "./sidebar2";
import Header from "./Header";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ padding: 200 }}>
          <Header />
        </div>
      </div>
    );
  }
}
