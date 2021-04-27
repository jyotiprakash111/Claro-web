import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AllClasses from "./AllClasses";
import Booking from "./Booking/index";
import Profile from "./Profile/index";
import Saved from "../Services/index2";
import Notification from "./notifications";

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
  },
  link: {
    color: "rgba(50, 50, 50, 0.5)",
    width: "170px",
    height: "42px",
    textTransform: "none",
    fontSize: "25px",
    marginRight: 100,
    "&:hover, &:focus": {
      // background: "#FF8021",
      // color: "#fff",
      // borderBottom: "1px solid #FF8021",
    },
    active: {},
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          TabIndicatorProps={{ style: { background: "#FF8021", height: 5 } }}
        >
          <Tab className={classes.link} label="Profile" {...a11yProps(0)} />
          <Tab
            className={[classes.link]}
            // style={{ fontWeight: "500", color: "#323232", fontSize: "32px" }}
            label="Schedule"
            {...a11yProps(0)}
          />
          <Tab className={classes.link} label="Bookings" {...a11yProps(1)} />
          <Tab
            className={classes.link}
            label="Transactions"
            {...a11yProps(2)}
          />
          {/* <Tab className={classes.link} label="Saved" {...a11yProps(3)} /> */}
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AllClasses />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Booking />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Notification />
      </TabPanel>
    </div>
  );
}
