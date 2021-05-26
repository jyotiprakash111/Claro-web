import React, { Component } from "react";
import SideBar from "../common/SideBar";
import Header from "../common/HeaderMain";
import SearchBar from "./SearchBar";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Table from "./Table";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header name="Customers" avatar={true} />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 30,
              paddingRight: 100,
            }}
          >
            <SearchBar />
            <Button
              variant="outlined"
              style={{
                color: "#FF8021",
                border: "1px solid #FF8021",
                height: 40,
              }}
            >
              New Customer
            </Button>
          </div>
          <p style={{ color: "#FF8021" }}>Ordering: Latest booking first</p>
          <Table />
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ color: "#FF8021" }}>Show More</p>
            <ArrowDropDownIcon style={{ color: "#FF8021", marginTop: 3 }} />
          </div>
        </div>
      </div>
    );
  }
}
