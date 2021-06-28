import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import BasicInformation from "./basic_information/index";
import Location from "./location/index2";
import Pricing from "./pricing/index";
import OtherOptions from "./other_options/index";
import Schedule from "./Batch_Schedule/main/scheduleTable";

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
    color: "rgba(50, 50, 50, 0.5)",
    width: "150px",
    height: "42px",
    textTransform: "none",
    fontSize: "20px",
    marginRight: 20,
    "&:hover, &:focus": {
      // background: "#FF8021",
      // color: "#fff",
      borderBottom: "1px solid #FF8021",
    },
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNext = () => {
    setActiveStep((newValue) => newValue + 1);
  };

  return (
    <div className={classes.root}>
      <AppBar
        style={{ background: "#fff", width: "95%", marginLeft: 24, marginTop:"2%"}}
        position="static"
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          TabIndicatorProps={{ style: { background: "#FF8021", height: 3 } }}
        >
          <Tab
            style={{ color: "#323232", textTransform: "none", fontSize: 17 }}
            label="Basic Information"
            {...a11yProps(0)}
          />
          <Tab
            style={{ color: "#323232", textTransform: "none", fontSize: 17 }}
            label="Schedule"
            {...a11yProps(1)}
          />
          <Tab
            style={{ color: "#323232", textTransform: "none", fontSize: 17 }}
            label="Location"
            {...a11yProps(2)}
          />
          <Tab
            style={{ color: "#323232", textTransform: "none", fontSize: 17 }}
            label="Pricing"
            {...a11yProps(3)}
          />
          <Tab
            style={{ color: "#323232", textTransform: "none", fontSize: 17 }}
            label="Other Options"
            {...a11yProps(4)}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <BasicInformation handleNext={handleNext} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Schedule handleNext={handleChange} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Location />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Pricing />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <OtherOptions />
      </TabPanel>
    </div>
  );
}
