import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Divider from "@material-ui/core/Divider";
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
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Collapse from "@material-ui/core/Collapse";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { menu } from "./menu";
import { hasChildren } from "./utils";

import { Link, useParams, useLocation } from "react-router-dom";
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

const SingleLevel = ({ item, isChildren }) => {
  const location = useLocation();
  console.log(item, location.pathname, location);
  return (
    <Link
      style={{
        color: location.pathname == item.to ? "#65B1EC" : "#fff",
        textDecoration: "none",
      }}
      to={isChildren ? `${item.to}?tabopen=true` : item.to}
    >
      <ListItem
        style={{
          margin: "5px 5px",
          color: location.pathname == item.to ? "#65B1EC" : "#fff",
          background: location.pathname == item.to ? "#fff" : "transparent",
          borderTopRightRadius: "36.5px",
          borderBottomRightRadius: "36.5px",
          width: "90%",
        }}
        button
      >
        <ListItemIcon
          style={{ color: location.pathname == item.to ? "#65B1EC" : "#fff" }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText
          style={{ color: location.pathname == item.to ? "#65B1EC" : "#fff" }}
          primary={item.title}
        />
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

const MenuItem = ({ item, isChildren }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;
  return <Component isChildren={isChildren} item={item} />;
};

const getQueryStringParams = (query) => {
  return query
    ? (/^[?#]/.test(query) ? query.slice(1) : query)
        .split("&")
        .reduce((params, param) => {
          let [key, value] = param.split("=");
          params[key] = value
            ? decodeURIComponent(value.replace(/\+/g, " "))
            : "";
          return params;
        }, {})
    : {};
};

const MultiLevel = ({ item }) => {
  const classes = useStyles();
  const location = useLocation();
  console.log(item, location);
  const [openCollapse, setOpenCollapse] = React.useState(false);
  const { items: children } = item;

  const [open, setOpen] = useState(
    getQueryStringParams(location.search).tabopen == "true"
  );

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <React.Fragment>
      <Link
        to={item.to}
        style={{
          color: "#fff",
          textDecoration: "none",
        }}
      >
        <ListItem
          style={{
            margin: "5px 5px",
            color: location.pathname == item.to ? "#65B1EC" : "#fff",
            background: location.pathname == item.to ? "#fff" : "transparent",
            borderTopRightRadius: "36.5px",
            borderBottomRightRadius: "36.5px",
            width: "90%",
          }}
          button
          // selected={to === location.pathname}
          onClick={handleClick}
        >
          <ListItemIcon
            style={{ color: location.pathname == item.to ? "#65B1EC" : "#fff" }}
          >
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title} />
          {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItem>
      </Link>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {children.map((child, key) => (
            <MenuItem isChildren={true} key={key} item={child} />
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};
