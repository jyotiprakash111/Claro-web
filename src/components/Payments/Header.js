import React, { Component } from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";

export default class Header extends Component {
  render() {
    return (
      <div
        style={{
          borderBottom: "1px solid #65B1EC",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h1 style={{ fontWeight: 400 }}>Payment</h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Button
            style={{
              background: "rgba(255, 128, 33, 1)",
              borderRadius: 30,
              width: 120,
              color: "#fff",
              textTransform: "none",
              marginRight: 200,
            }}
          >
            Save
          </Button>
        </div>
      </div>
    );
  }
}
