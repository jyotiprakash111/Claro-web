import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Main from "./customer";
import Main2 from "./team";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appbar: {
    background: "transparent",
    boxShadow: "none",
    display: "flex",
    width: 450,
  },
  link: {
    color: "rgba(50, 50, 50, 0.5)",
    width: "170px",
    height: "42px",
    textTransform: "none",
    fontSize: "20px",
    marginRight: 100,
    "&:hover, &:focus": {
      // background: "#FF8021",
      // color: "#fff",
      // borderBottom: "1px solid #FF8021",
    },
    active: {},
  },
}));

export default function Notification() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: 300 }}>
        <Header
          to="/settings"
          title="Notification"
          name="Notification"
          avatar={true}
        />
        <div className={classes.root}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <AppBar className={classes.appbar} position="static">
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                TabIndicatorProps={{
                  style: { background: "#FF8021", height: 5 },
                }}
              >
                <Tab
                  className={classes.link}
                  label="Customers"
                  {...a11yProps(0)}
                />
                <Tab className={classes.link} label="Team" {...a11yProps(1)} />
              </Tabs>
            </AppBar>
          </div>
          <TabPanel value={value} index={0}>
            <Main />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Main2 />
          </TabPanel>
        </div>
      </div>
    </div>
  );
}
