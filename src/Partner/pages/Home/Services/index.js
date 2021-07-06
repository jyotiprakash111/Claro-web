import React, { Component } from "react";
import SideBar from "../../../components/common/SideBar";
import Header from "../../../components/common/HeaderMain";
import Grid from "@material-ui/core/Grid";
import Classes from "../../../assets/img/classes.png";
import Meeting from "../../../assets/img/meeting.png";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header name="Home" avatar={true} />
          <div>
            <p style={{ color: "#323232", fontSize: "32px" }}>
              What service do you want to create?
            </p>
            <Grid container spacing={0}>
              <Grid item lg={5}>
                <Link style={{ textDecoration: "none" }} to="/home_classes">
                  <Paper
                    style={{
                      padding: 40,
                      textAlign: "center",
                      background: "#F8F8F8",
                    }}
                  >
                    <img src={Classes} />
                    <h3 style={{ fontSize: "24px" }}>Classes </h3>
                    <p>
                      Great for services that occur on scheduled dates and time.
                      They can be group or private lessons and one time class or
                      recurring. Good for dance, yoga classes.
                    </p>
                    <p>
                      Example: Yoga Class on February 15th with 30 max
                      attendees, or Pilates Class every Thursday at 6pm with 10
                      attendees.
                    </p>
                  </Paper>
                </Link>
              </Grid>
              <Grid style={{ marginLeft: 100 }} item lg={5}>
                <div
                  style={{
                    padding: 40,
                    textAlign: "center",
                    position: "relative",
                    background: "#F8F8F8",
                  }}
                >
                  <Button
                    style={{
                      background: "#FF8021",
                      color: "#fff",
                      padding: 5,
                      position: "absolute",
                      left: 30,
                      textTransform: "capitalize",
                      paddingLeft: 20,
                      paddingRight: 2 + 0,
                      top: 10,
                    }}
                  >
                    Coming soon
                  </Button>
                  <img src={Meeting} />
                  <h3 style={{ fontSize: "24px" }}>Appointments</h3>
                  <p>
                    Integrate our Booking Widget to your intranet, website,
                    Facebook Page, as well as to the booking profile (i.e., the
                    microsite) we create for you.
                  </p>
                  <p>
                    View and manage classes, parent-teacher meetings and any
                    other shared event from your TIMIFY calendar.
                  </p>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}
