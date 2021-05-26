import React, { Component } from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";

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
        <h1 style={{ fontWeight: 400, marginBottom: 15 }}>{this.props.name}</h1>
        {this.props.avatar ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <NotificationsNoneIcon
              style={{ fontSize: 30, marginRight: 10, color: "#323232" }}
            />
            <Avatar
              style={{ background: "#65B1EC", marginRight: 20 }}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}