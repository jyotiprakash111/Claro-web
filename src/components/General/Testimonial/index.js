import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Button from "@material-ui/core/Button";
import Accordion from "./Accordion";

export default class Index extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item lg={2}>
            <div
              style={{
                width: "100%",
                minHeight: "100vh",
                height: "100%",
                background: "#262C4C",
              }}
            ></div>
          </Grid>
          <Grid item lg={10}>
            <div
              style={{
                margin: "10px 50px",
              }}
            >
              <h1
                style={{
                  borderBottom: "4px solid #65B1EC",
                  paddingBottom: 10,
                  marginBottom: 10,
                  fontWeight: 400,
                  color: "#323223",
                }}
              >
                Testimonial (fits in the biz setup with FAQ)
              </h1>

              <Accordion />
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
