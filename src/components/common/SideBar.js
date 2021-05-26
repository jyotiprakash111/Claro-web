import React, { ReactChild } from "react";
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
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
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

interface LeftSideBarProps {
  children: ReactChild;
}

export default function LeftSidebar({ children }: LeftSideBarProps) {
  const classes = useStyles();
  const makerRouter = (type) => {
    console.log(type);
    switch (type) {
      case "Services":
        return "/services";
      case "Customers":
        return "/partner";
      case "Home":
        return "/partner_home";
      case "Sales":
        return "/sales";
      case "Schedule":
        return "/schedule";
      case "Online Booking":
        return "/404/online booking";
      case "Settings":
        return "/general";
      default:
        return "/404";
    }
  };
  return (
    <div className={classes.root}>
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

        <List>
          {[
            "Home",
            "Services",
            "Schedule",
            "Sales",
            "Customers",
            "Online Booking",
            "Settings",
          ].map((text, index) => (
            <Link style={{ textDecoration: "none" }} to={makerRouter(text)}>
              <ListItem
                button
                key={text}
                style={{ color: "white", margin: "10px 5px" }}
              >
                <ListItemIcon style={{ color: "#fff" }}>
                  {index === 0 && <HomeIcon />}
                  {index === 1 && <SortIcon />}
                  {index === 2 && <TodayIcon />}
                  {index === 3 && <MonetizationOnIcon />}
                  {index === 4 && <PeopleIcon />}
                  {index === 5 && <LoyaltyIcon />}
                  {index === 6 && <SettingsIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        <ListItem
          button
          style={{ color: "white", margin: "20px 5px", marginTop: "auto" }}
        >
          <ListItemIcon style={{ color: "white" }}>
            <HelpOutlineIcon />
          </ListItemIcon>
          <ListItemText primary="Help" />
        </ListItem>
        <p style={{ textAlign: "center", color: "#fff", fontWeight: 300 }}>
          Powered by Claroo
        </p>
      </Drawer>
    </div>
  );
}
