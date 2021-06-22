import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Main from "./main/tabBar";
import Header from "../../components/common/HeaderMain";


export default class index extends Component {
  render() {
    return (
      <div id="batch_schedule">
        <SideBar />
        <div style={{ marginLeft: 300 }}>
         <Header  name ="Batch Schedule" avatar={true}/>
          <Main />
        </div>
      </div>
    );
  }
}
