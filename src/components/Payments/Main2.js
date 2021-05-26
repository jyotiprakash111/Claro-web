import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "./Popover";
import "./style.css";
import { Divider } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div id="payment">
      <p style={{ width: 800 }}>
        Customers will be able to book a service and make pay using any of the
        method you mention. Upon booking you will receive an email and the
        booking will appear under ‘Pending review’ in your homepage. After your
        payment verification and confirmation of booking, the customer will be
        notified. Please refer to this article or video for further
        clarification.
      </p>
      <div style={{ fontSize: 30, fontWeight: "lighter", color: "#323232" }}>
        Bank transfer
      </div>
      <Divider />
      <Grid container>
        <Grid item lg={8}>
          <p>Account name</p>
          <label style={{ color: "rgba(50,50,50,0.5)" }}>Jane Doe</label>
          <p style={{ marginTop: 50 }}>Account name</p>
          <label style={{ color: "rgba(50,50,50,0.5)" }}>CR27592891</label>
          <p style={{ marginTop: 50 }}>IFSC Code any field</p>
          <label style={{ color: "rgba(50,50,50,0.5)" }}>ICICIafakjkurk</label>
        </Grid>
        <Grid item lg={4}>
          <p>Image (e.g QR Code)</p>
        </Grid>
      </Grid>
    </div>
  );
}
