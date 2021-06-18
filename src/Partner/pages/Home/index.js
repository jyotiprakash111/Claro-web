import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import Main from "./main/index";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header
            avatar={true}
            name="Services"
            to_text="www.business_name.claroo.co"
          />
          <Main />
        </div>
      </div>
    );
  }
}
