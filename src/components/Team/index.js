import React, { Component } from "react";
import SideBar from "../common/SideBar";
import Header from "./Header";
import Main from "./Table";
import MenuHeader from "./Main";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header />
          <MenuHeader />
        </div>
      </div>
    );
  }
}
