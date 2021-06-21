import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import Main from "./main/Main";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header to='/settings' name="Testimonial" title="Testimonial" avatar={true}/>
          <Main />
        </div>
      </div>
    );
  }
}
