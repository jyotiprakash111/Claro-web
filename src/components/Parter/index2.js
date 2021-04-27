import React, { Component } from "react";
import SideBar from "./sidebar2";
import Header from "./Header";
import SearchBar from "./SearchBar";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Table from "./Table";
import PartnerHome from "./Schedule/index";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header />
          <PartnerHome />
        </div>
      </div>
    );
  }
}
