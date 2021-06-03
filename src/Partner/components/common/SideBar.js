import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import TodayIcon from "@material-ui/icons/Today";
import PeopleIcon from "@material-ui/icons/People";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SortIcon from "@material-ui/icons/Sort";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import SettingsIcon from "@material-ui/icons/Settings";
import Settings from "@material-ui/icons/Settings";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { menu } from "./menu";
import { hasChildren } from "./utils";

import { Link } from "react-router-dom";
const drawerWidth = 250;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    drawer: {
      width: drawerWidth,
      color: "white",
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#262E4A",
      overflow: "hidden",
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  })
);

const SingleLevel = ({ item }) => {
  return (
    <Link style={{ color: "#fff", textDecoration: "none" }} to={item.to}>
      <ListItem style={{ color: "white", margin: "5px 5px" }} button>
        <ListItemIcon style={{ color: "#fff" }}>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItem>
    </Link>
  );
};

export default function App() {
  const classes = useStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <div
        style={{
          display: "flex",
          margin: 20,
          justifyContent: "space-around",
        }}
      >
        <span style={{ color: "#fff" }}>Business Name</span>
        <span style={{ color: "#fff", marginLeft: 20 }}>
          <ArrowDropDownIcon />
        </span>
      </div>
      {menu.map((item, key) => (
        <MenuItem key={key} item={item} />
      ))}
      {/* <ListItem
        button
        style={{ color: "white", margin: "20px 5px", marginTop: "auto" }}
      >
        <ListItemIcon style={{ color: "white" }}>
          <HelpOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="Help" />
      </ListItem> */}
      <p
        style={{
          textAlign: "center",
          color: "#fff",
          fontWeight: 300,
          marginTop: "auto",
        }}
      >
        Powered by Claroo
      </p>
    </Drawer>
  );
}

const MenuItem = ({ item }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component item={item} />;
};

const MultiLevel = ({ item }) => {
  const classes = useStyles();
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const { items: children } = item;
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Link to={item.to} style={{ color: "#fff", textDecoration: "none" }}>
        <ListItem
          style={{ color: "white", margin: "5px 5px" }}
          button
          onClick={handleClick}
        >
          <ListItemIcon style={{ color: "#fff" }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.title} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
      </Link>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};
