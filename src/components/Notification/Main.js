import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  select: {
    color: "#323232",
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();

  return (
    <div id="notifications">
      <FormControl
        style={{ width: 700 }}
        component="fieldset"
        className={classes.formControl}
      >
        <p
          style={{ marginBottom: 10, color: "#323232", fontWeight: "bold" }}
          component="legend"
        >
          Select when you would like to notify customers
        </p>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox name="gilad" />}
            label="Send confirmation that booking request has been recieved"
            className={classes.select}
          />
          <FormControlLabel
            control={<Checkbox name="jason" />}
            label="Send notification when a booking and payment is confirmed or rejected"
          />
          <FormControlLabel
            control={<Checkbox name="jason" />}
            label="Send notification when payment is due after 24 hours of booking request"
          />
          <FormControlLabel
            control={<Checkbox name="jason" />}
            label="Send notification when a booked session is cancelled"
          />
          <FormControlLabel
            control={<Checkbox name="jason" />}
            label="Send notification when a a booked session is rescheduled"
          />
          <FormControlLabel
            control={<Checkbox name="jason" />}
            label="Send notification for an upcoming booking one day before the class"
          />
          <FormControlLabel
            control={<Checkbox name="jason" />}
            label="Send notification for an upcoming booking 2 hours before the class"
          />
          <FormControlLabel
            control={<Checkbox name="jason" />}
            label="Send notification when all classes are completed"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
}
