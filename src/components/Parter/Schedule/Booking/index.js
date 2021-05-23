import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Current from "./Current";
import Card from "./Card";

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
  link: {
    textTransform: "capitalize",
    border: "1px solid #323232",
    marginRight: 20,
    borderRadius: 10,
  },
  active_link: {
    background: "#FF8021",
    borderRadius: 10,
    color: "#fff",
    border: "none",
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
      <AppBar
        style={{
          background: "transparent",
          boxShadow: "none",
          color: "#323232",
          textTransform: "Capitalize",
        }}
        position="static"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          TabIndicatorProps={{ style: { background: "transparent" } }}
        >
          <Tab
            className={[classes.link, classes.active_link]}
            label="Current"
            {...a11yProps(0)}
          />
          <Tab className={classes.link} label="Post" {...a11yProps(1)} />
          <Tab className={classes.link} label="Cancelled" {...a11yProps(2)} />
          <Tab className={classes.link} label="Pending" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Card />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </div>
  );
}
