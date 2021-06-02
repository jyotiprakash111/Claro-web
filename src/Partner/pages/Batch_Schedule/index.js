import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import Main from "./main/tabBar";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <p
            style={{
              fontSize: 30,
              borderBottom: "1px solid #ccc",
              paddingBottom: 20,
            }}
          >
            Class title
          </p>
          <Main />
        </div>
      </div>
    );
  }
}
