import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbar: {
    background: "#fff",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
    padding: "5px 7%",
  },
  link: {
    color: "#323232",
    fontSize: "15px",
    textTransform: "none",
    marginLeft: 10,
    fontWeight: "light",
  },
  left: {
    marginLeft: "auto",
  },
  logo: {
    width: "117px",
    height: "48px",
    background: "#C4C4C4",
  },
  active: {
    color: "#FF8021",
    borderRadius: "31px",

    width: "116px",
    height: "43px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Button className={[classes.link, classes.logo]} color="inherit">
            Partner Logo
          </Button>
          <Button className={classes.link} color="inherit">
            Home
          </Button>
          <Button className={[classes.link, classes.active]} color="inherit">
            Services
          </Button>
          <Button className={classes.link} color="inherit">
            Schedule
          </Button>
          <Button className={classes.link} color="inherit">
            Packages
          </Button>
          <Button className={classes.link} color="inherit">
            Contact
          </Button>
          <Button className={[classes.link, classes.left]} color="inherit">
            Cart
          </Button>
          <Button className={[classes.link]} color="inherit">
            Login
          </Button>
          <Button className={[classes.link, classes.active]} color="inherit">
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
