import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Confetti from "../../../assets/img/confetti.png";
import useStyles from "./style";
import Button from "../../../components/Button/button";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button2 from "@material-ui/core/Button";
import Sales from "../../../assets/img/sales.png";
import Calender from "../../../assets/img/calender1.png";
import Dialog from "./Dialog";

const percentage = 66;
export default function SimpleSelect() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.container}>
      <Dialog open={open} />
      <Grid spacing={3} container>
        <Grid item lg={4}>
          <Paper className={classes.paper}>
            <h3 style={{ fontSize: 30, marginTop: 15 }}>Hello Aditi!</h3>
            <img src={Confetti} />
            <p className={classes.p}>
              Welcome to Claroo. Let’s take -business name- online.
            </p>
            <Button variant="contained" width={150} text="Book a free demo" />
          </Paper>
        </Grid>
        <Grid item lg={8}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item lg={6}>
                {" "}
                <h3>Create your first class!</h3>
                <h4>Step 1/5</h4>
                <p className={classes.p}>
                  Setting up basic information about your class
                </p>
                <div style={{ display: "flex" }}>
                  <Button width={150} variant="contained" text="Start step 1" />
                  <Button2
                    style={{
                      color: "#65B1EC",
                      textTransform: "capitalize",
                      textDecoration: "underline",
                    }}
                  >
                    See all the steps
                  </Button2>
                </div>
              </Grid>
              <Grid item lg={6}>
                <div style={{ width: 200, height: 200 }}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
              </Grid>
            </Grid>
          </Paper>
          <Paper className={classes.paper} style={{ marginTop: 5, padding: 5 }}>
            <p style={{ color: "#908F7F", marginLeft: 10 }}>
              Step 2/5: Complete your business profile for sharing with
              customers
            </p>
          </Paper>
        </Grid>
        <Grid item lg={6}>
          <Paper className={classes.paper}>
            <h2>Sales</h2>
            <Grid container spacing={6}>
              <Grid item lg={6}>
                <div style={{ background: "#fff", padding: 10, paddingTop: 5 }}>
                  <p style={{ color: "#65B1EC" }}>Confirmed sales</p>
                  <h2 style={{ padding: 0, margin: 0 }}>0 INR</h2>
                </div>
              </Grid>

              <Grid item lg={6}>
                <div style={{ background: "#fff", padding: 10, paddingTop: 5 }}>
                  <p style={{ color: "#FF8021" }}>In review</p>
                  <h2 style={{ padding: 0, margin: 0 }}>0 INR</h2>
                </div>
              </Grid>
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <h2 style={{ color: "#323232" }}>All transactions</h2>
              <Button2
                style={{
                  color: "#65B1EC",
                  textTransform: "capitalize",
                  textDecoration: "underline",
                }}
              >
                See all past transactions
              </Button2>
            </div>
            <img src={Sales} />
            <p style={{ fontSize: 18 }}>No sales registered today</p>
          </Paper>
        </Grid>

        <Grid item lg={6}>
          <Paper className={classes.paper}>
            <h2>Schedule</h2>
            <Grid container spacing={6}>
              <Grid item lg={6}>
                <div style={{ background: "#fff", padding: 10, paddingTop: 5 }}>
                  <p style={{ color: "#65B1EC" }}>Bookings today</p>
                  <h2 style={{ padding: 0, margin: 0 }}>0 INR</h2>
                </div>
              </Grid>

              <Grid item lg={6}>
                <div style={{ background: "#fff", padding: 10, paddingTop: 5 }}>
                  <p style={{ color: "#FF8021" }}>Bookings tomorrow</p>
                  <h2 style={{ padding: 0, margin: 0 }}>0 INR</h2>
                </div>
              </Grid>
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: 20,
              }}
            >
              <h2 style={{ color: "#323232" }}>All bookings</h2>
              <Button2
                style={{
                  color: "#65B1EC",
                  textTransform: "capitalize",
                  textDecoration: "underline",
                }}
              >
                See complete schedule
              </Button2>
            </div>
            <img src={Calender} />
            <p style={{ fontSize: 18 }}>You have no more bookings for today</p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
