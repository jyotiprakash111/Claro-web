import React, { Component } from "react";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
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
            <h1 style={{ fontWeight: 400, marginBottom: 0 }}>
              {this.props.name}
            </h1>
            <p
              style={{
                fontSize: 15,
                color: "#65B1EC",
                marginTop: 0,
                marginBottom: 0,
              }}
            >
              {this.props.to_text ? this.props.to_text : ""}
            </p>
          </div>

          {this.props.avatar ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <Link to='/notification'>
                <NotificationsNoneIcon
                  style={{ fontSize: 30, marginRight: 10, color: "#323232" }}
                />
              </Link>
              <Link to='/profile' style={{ textDecoration: "none" }}>
                <Avatar
                  style={{
                    background: "#65B1EC",
                    marginRight: 20,
                  }}
                  alt='Remy Sharp'
                  src='/static/images/avatar/1.jpg'
                />
              </Link>
            </div>
          ) : (
            ""
          )}
        </div>
        {this.props.to ? (
          // <div style={{ marginTop: 10 }}>
          //   <Link
          //     style={{ color: "#65B1EC", textDecoration: "none" }}
          //     to={this.props.to}
          //   >
          //     {this.props.to_text ? this.props.to_text : "Back to Setup"}
          //   </Link>
          // </div>
          <div style={{ marginTop: 10 }}>
            <Breadcrumbs
              style={{ marginTop: 20 }}
              separator='›'
              aria-label='breadcrumb'
            >
              <Link
                style={{ color: "#65B1EC", textDecoration: "none" }}
                to={this.props.to}
              >
                {this.props.to_text ? this.props.to_text : "Back to Setup"}
              </Link>
              <Typography color='textPrimary'>{this.props.title}</Typography>
            </Breadcrumbs>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
