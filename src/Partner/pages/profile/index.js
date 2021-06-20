import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./style.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header name="User Profile" />
          <div id="user_profile">
            <Breadcrumbs
              style={{ marginTop: 20 }}
              separator="›"
              aria-label="breadcrumb"
            >
              <Link color="inherit" href="/">
                Setup
              </Link>
              <Typography color="textPrimary">User profile</Typography>
            </Breadcrumbs>
            <p style={{ marginTop: 0 }}>
              Manage personal details and login credential
            </p>
            <Grid container>
              <Grid lg={7} item>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <form style={{ maxWidth: 480, marginTop: 10 }}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <label for="name">First name </label>
                        <div style={{ display: "flex" }}>
                          <input
                            type="text"
                            id="name"
                            name="user_name"
                            placeholder="E.g. Jane"
                            style={{ color: "#323232" }}
                          />
                        </div>
                      </div>
                      <div>
                        <label for="name">Last name </label>
                        <div style={{ display: "flex" }}>
                          <input
                            type="text"
                            id="name"
                            name="user_name"
                            placeholder="E.g. Doe"
                            style={{ color: "#323232" }}
                          />
                        </div>
                      </div>
                    </div>

                    <label for="name">Email address*</label>
                    <div style={{ display: "flex" }}>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        placeholder="Email address"
                        style={{ color: "#323232" }}
                      />
                    </div>
                    <label for="name">Phone number*</label>
                    <div style={{ display: "flex" }}>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        placeholder="+91 "
                        style={{ color: "#323232" }}
                      />
                    </div>
                    <Button
                      variant="contained"
                      style={{
                        color: "#fff",
                        background: "#FF8021",
                        width: 200,
                        borderRadius: 5,
                        marginTop: 10,
                      }}
                    >
                      Submit
                    </Button>
                  </form>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
