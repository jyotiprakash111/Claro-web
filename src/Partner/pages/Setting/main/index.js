import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item lg={6}>
            <div
              style={{
                background: "#F8F8F8",
                padding: 20,
                margin: 30,
                marginLeft: 0,
                border: "1px solid #ccc",
              }}
            >
              <h2 style={{ paddingBottom: 0 }}>General</h2>
              <Link
                style={{
                  color: "#65B1EC",
                  fontWeight: "bold",
                  paddingTop: 0,
                  textDecoration: "none",
                }}
                to="/general"
              >
                Business Setup
              </Link>
              <p style={{}}>
                Manage basic business details like name,time zone.
              </p>
              <Divider style={{ background: "#ababab", marginBottom: 20 }} />
              <Link
                style={{
                  color: "#65B1EC",
                  fontWeight: "bold",
                  paddingTop: 0,
                  textDecoration: "none",
                }}
                to="/location"
              >
                Location
              </Link>
              <p>Manage multiple outlets for your business</p>
              <Divider style={{ background: "#ababab", marginBottom: 20 }} />
              <Link
                style={{
                  color: "#65B1EC",
                  fontWeight: "bold",
                  paddingTop: 0,
                  textDecoration: "none",
                }}
                to="/testimonial"
              >
                Testimonial
              </Link>
              <p>Manage updates for staff and consumers.</p>
            </div>
            {/* <div
              style={{
                background: "#F8F8F8",
                padding: 20,
                margin: 30,
                marginLeft: 0,
                border: "1px solid #ccc",
              }}
            >
              <h2 style={{ paddingBottom: 0 }}>Testimonial </h2>
              <Link
                style={{
                  color: "#65B1EC",
                  fontWeight: "bold",
                  paddingTop: 0,
                  textDecoration: "none",
                }}
                to="/testimonial"
              >
                Testimonial
              </Link>
              <p>Manage updates for staff and consumers.</p>
            </div> */}

            <div
              style={{
                background: "#F8F8F8",
                padding: 20,
                margin: 30,
                marginLeft: 0,
                border: "1px solid #ccc",
              }}
            >
              <h2 style={{ paddingBottom: 0 }}>Team</h2>
              <Link
                style={{
                  color: "#65B1EC",
                  fontWeight: "bold",
                  paddingTop: 0,
                  textDecoration: "none",
                }}
                to="/team"
              >
                Team schedule
              </Link>
              <p>Build a systematic work schedule for your team.</p>
              <Divider style={{ background: "#ababab" }} />
              <p
                style={{ color: "#65B1EC", fontWeight: "bold", paddingTop: 0 }}
              >
                Members
              </p>
              <p>Manage multiple outlets for your business</p>
            </div>
          </Grid>
          <Grid item lg={6}>
            <div
              style={{
                background: "#F8F8F8",
                padding: 20,
                margin: 30,
                marginLeft: 0,
                border: "1px solid #ccc",
              }}
            >
              <h2 style={{ paddingBottom: 0 }}>Payments </h2>
              <Link
                style={{
                  color: "#65B1EC",
                  fontWeight: "bold",
                  paddingTop: 0,
                  textDecoration: "none",
                }}
                to="/payment"
              >
                Payment Methods
              </Link>
              <p>
                Setup different payment options for customers to make online
                booking
              </p>
            </div>

            <div
              style={{
                background: "#F8F8F8",
                padding: 20,
                margin: 30,
                marginLeft: 0,
                border: "1px solid #ccc",
              }}
            >
              <h2 style={{ paddingBottom: 0 }}>Communication </h2>
              <Link
                style={{
                  color: "#65B1EC",
                  fontWeight: "bold",
                  paddingTop: 0,
                  textDecoration: "none",
                }}
                to="/notification"
              >
                Notifications
              </Link>
              <p>Manage updates for staff and consumers.</p>
            </div>
            <div
              style={{
                background: "#F8F8F8",
                padding: 20,
                margin: 30,
                marginLeft: 0,
                border: "1px solid #ccc",
              }}
            >
              <h2 style={{ paddingBottom: 0 }}>User Profile </h2>
              <Link
                style={{
                  color: "#65B1EC",
                  fontWeight: "bold",
                  paddingTop: 0,
                  textDecoration: "none",
                }}
                to="/profile"
              >
                Personal Details
              </Link>
              <p>Provide your personal details or change your password</p>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
