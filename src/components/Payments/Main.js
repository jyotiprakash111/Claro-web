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
import Dialog2 from "./Popover2";
import "./style.css";
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
      <Grid container>
        <Grid item lg={5}>
          <form style={{}}>
            <fieldset>
              <label style={{ marginTop: 10 }} for="business">
                Select payment method
              </label>
              <select
                style={{ borderRadius: 20, height: 40, color: "#323232" }}
                id="business"
                name="user_job"
              >
                <option value="Surgical Oncologist">Bank Transfer</option>
                <option value="Clinical Oncologist">Clinical Oncologist</option>
                <option value="Healthcare Provider">
                  Radiation Oncologist
                </option>
              </select>
              <label style={{ marginTop: 100 }} for="mail">
                Alternate number
              </label>
              <input
                type="text"
                style={{ width: 250 }}
                placeholder="Eg CR27502891"
                id="mail"
                name="user_email"
              />
            </fieldset>
          </form>
        </Grid>
        <Grid item lg={6}>
          <Grid style={{ marginLeft: 40 }} container>
            <Grid item lg={6}>
              <Dialog open={false} />
              <Dialog2 open={false} />
              <Button
                variant="contained"
                style={{
                  background: "#65B1EC",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: 20,
                  width: 150,
                }}
              >
                Add text field
              </Button>
            </Grid>
            <Grid item lg={6}>
              <div>
                <Button
                  style={{
                    background: "#65B1EC",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: 20,
                    width: 150,
                    marginLeft: 50,
                  }}
                >
                  Add image
                </Button>
                <label style={{ marginTop: 30 }} for="mail">
                  Image title
                </label>
                <input
                  type="text"
                  style={{ width: 250 }}
                  placeholder="Eg Bank account QR code"
                  id="mail"
                  name="user_email"
                />
                <label for="mail">Upload image</label>
                <div>
                  <Button
                    style={{
                      color: "rgba(101, 177, 236, 1)",
                      border: "1px solid rgba(101, 177, 236, 1)",
                      textTransform: "none",
                      borderRadius: 40,
                      width: 250,
                      fontWeight: 400,
                      marginTop: 20,
                      fontSize: 12,
                      height: 45,
                    }}
                    variant="outlined"
                  >
                    <PublishIcon style={{ marginRight: 10 }} /> Drag and drop /
                    click to upload
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox name="gilad" />}
          label="I have legal access to this account and have verified all the info before submitting"
          className={classes.select}
        />
      </FormGroup>
    </div>
  );
}
