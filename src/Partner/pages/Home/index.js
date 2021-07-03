import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Confetti from "../../assets/img/confetti.png";
import Sales from "../../assets/img/sales.png";
import Calender from "../../assets/img/calender1.png";
import useStyles from "./style";
import Button from "../../components/Button/button";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button2 from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";

import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import RightIcon from "@material-ui/icons/ArrowRightAlt";
import ButtonMain from "@material-ui/core/Button";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const percentage = 66;
export default function SimpleSelect() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  return (
    <div className={classes.container}>
      <SideBar />
      <div style={{ marginLeft: 300 }}>
        <Header
          avatar={true}
          name="Home"
          to_text="www.business_name.claroo.co"
        />
        {/* Popup Starts */}
        <HomePageDialog handleClose={() => setOpen(false)} open={open} />
        <Grid spacing={3} container>
          <Grid item lg={4}>
            <Paper className={classes.paper}>
              <h3 style={{ fontSize: 30, marginTop: 15 }}>Hello Aditi!</h3>
              <img src={Confetti} />
              <p className={classes.p}>
                Welcome to Claroo. Let’s take -business name- online..
              </p>
              <Button
                onClick={() => setOpen(true)}
                variant="contained"
                width={150}
                text="Book a free demo"
              />
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
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button
                      onClick={() => setOpen(true)}
                      width={150}
                      variant="contained"
                      text="Start step 1"
                    />
                    <Link
                      to="/homescreen"
                      style={{
                        color: "#65B1EC",
                        textTransform: "capitalize",
                        textDecoration: "underline",
                        marginLeft: 10,
                      }}
                    >
                      See all the steps
                    </Link>
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
            <Paper
              className={classes.paper}
              style={{ marginTop: 5, padding: 5 }}
            >
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
                  <div
                    style={{ background: "#fff", padding: 10, paddingTop: 5 }}
                  >
                    <p style={{ color: "#65B1EC" }}>Confirmed sales</p>
                    <h2 style={{ padding: 0, margin: 0 }}>0 INR</h2>
                  </div>
                </Grid>

                <Grid item lg={6}>
                  <div
                    style={{ background: "#fff", padding: 10, paddingTop: 5 }}
                  >
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
                  <div
                    style={{ background: "#fff", padding: 10, paddingTop: 5 }}
                  >
                    <p style={{ color: "#65B1EC" }}>Bookings today</p>
                    <h2 style={{ padding: 0, margin: 0 }}>0 INR</h2>
                  </div>
                </Grid>

                <Grid item lg={6}>
                  <div
                    style={{ background: "#fff", padding: 10, paddingTop: 5 }}
                  >
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
              <p style={{ fontSize: 18 }}>
                You have no more bookings for today
              </p>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={() => props.onClose()}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

function HomePageDialog(props) {
  return (
    <div>
      <Dialog
        onClose={() => props.handleClose()}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <div>
          <DialogTitle
            style={{ borderBottom: "1px solid #65B1EC" }}
            id="customized-dialog-title"
            onClose={() => props.handleClose()}
          >
            <h2 style={{ margin: 0 }}> Steps to Class Setup</h2>
          </DialogTitle>
          <DialogContent dividers>
            <ClassSetupLists />
          </DialogContent>
        </div>
      </Dialog>
    </div>
  );
}

function ClassSetupLists() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem className={classes.list} button>
          <p className={classes.list_h3}>1. Create your first class</p>
          <p className={classes.list_P}>Takes 5 minutes</p>
          <ListItemIcon>
            <RightIcon className={classes.right_icon} />
          </ListItemIcon>
        </ListItem>

        <ListItem className={classes.list2} button>
          <p className={classes.list2_h3}>2. Business Profle</p>
          <p className={classes.list2_P}>Takes 5 minutes</p>
          <ListItemIcon>
            <RightIcon className={classes.right2_icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem className={classes.list2} button>
          <p className={classes.list2_h3}>3. Details on Payments </p>
          <p className={classes.list2_P}>Takes 2 minutes</p>
          <ListItemIcon>
            <RightIcon className={classes.right2_icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem className={classes.list2} button>
          <p className={classes.list2_h3}>4. Online Listing </p>
          <p className={classes.list2_P}>Takes 2 minutes</p>
          <ListItemIcon>
            <RightIcon className={classes.right2_icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem className={classes.list2} button>
          <p className={classes.list2_h3}>5. Invite customers </p>
          <p className={classes.list2_P}>Takes 1 minutes</p>
          <ListItemIcon>
            <RightIcon className={classes.right2_icon} />
          </ListItemIcon>
        </ListItem>
      </List>
      <div style={{ textAlign: "center" }}>
        <ButtonMain className={classes.go_to_step1}>Go to step1</ButtonMain>
      </div>
    </div>
  );
}
