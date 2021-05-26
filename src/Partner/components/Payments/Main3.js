import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";
import Dialog from "./Popover";
import "./style3.css";
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
    <div id="payment3" style={{ marginTop: 20 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div item>
          <label>Select payment method</label>
          <select
            style={{
              borderRadius: 20,
              height: 40,
              color: "#323232",
              width: 300,
            }}
            id="business"
            name="user_job"
          >
            <option value="Surgical Oncologist">Other / Online wallet</option>
            <option value="Clinical Oncologist">Clinical Oncologist</option>
            <option value="Healthcare Provider">Radiation Oncologist</option>
          </select>
          <label style={{ marginTop: 20 }}>Name the payment method</label>
          <input
            type="text"
            style={{ width: 200 }}
            placeholder="Eg Google pay"
            id="mail"
            name="user_email"
          />
        </div>
        <div style={{ display: "flex" }} item>
          <Button
            style={{
              background: "#65B1EC",
              color: "#fff",
              textTransform: "none",
              borderRadius: 20,
              width: 150,
            }}
            variant="contained"
          >
            Add text field
          </Button>
          <Button
            style={{
              background: "#65B1EC",
              color: "#fff",
              textTransform: "none",
              borderRadius: 20,
              width: 150,
              marginLeft: 20,
            }}
            variant="contained"
          >
            Add image
          </Button>
        </div>
      </div>
    </div>
  );
}
