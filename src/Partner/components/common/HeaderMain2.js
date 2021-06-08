import React, { Component } from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";
import Menu from "./menu2.js";
import Menu2 from "./menu3.js";

export default function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  return (
    <div>
      <div
        style={{
          borderBottom: "1px solid #65B1EC",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <h1 style={{ fontWeight: 400, marginBottom: 0 }}>{props.name}</h1>
          <p
            style={{
              fontSize: 15,
              color: "#65B1EC",
              marginTop: 0,
              marginBottom: 0,
            }}
          >
            {props.to_text ? props.to_text : ""}
          </p>
        </div>
        <Menu handleClose={() => handleClose()} anchorEl={anchorEl} />
        <Menu2 handleClose={() => handleClose2()} anchorEl={anchorEl2} />
        {props.avatar ? (
          <div style={{ display: "flex", alignItems: "center" }}>
            <NotificationsNoneIcon
              onClick={handleClick2}
              style={{ fontSize: 30, marginRight: 10, color: "#323232" }}
            />

            <Avatar
              style={{
                background: "#65B1EC",
                marginRight: 20,
              }}
              onClick={handleClick}
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </div>
        ) : (
          ""
        )}
      </div>
      {props.to ? (
        <div style={{ marginTop: 10 }}>
          <Link
            style={{ color: "#65B1EC", textDecoration: "none" }}
            to={props.to}
          >
            {props.to_text ? props.to_text : "Back to Setup"}
          </Link>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
