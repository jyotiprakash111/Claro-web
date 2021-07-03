import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import CloseIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import "../style.css";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { TextField, MenuItem, Grid, Button, Checkbox } from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const currencies = [
  {
    value: "0",
    label: "No instructor assigned",
  },
  {
    value: "1",
    label: "Instructor name 1",
  },
  {
    value: "2",
    label: "Instructor name 2",
  },
];
const business_location = [
  {
    value: "0",
    label: "Business location",
  },
  {
    value: "1",
    label: "Online",
  },
  {
    value: "2",
    label: "Customer's location",
  },
];

const useStyles = makeStyles({});

function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

function createData(name, calories, fat, carbs, protein, amount) {
  return { name, calories, fat, carbs, protein, amount };
}

const rows = [
  createData("xxxx", "dd mmm yyyy", "John Doe", "One-time Fee", "Paid", "$ xx"),
  createData(
    "xxxx",
    "dd mmm yyyy",
    "John Doe",
    "Monthly/Weekly Fee",
    "Paid",
    "$ xx"
  ),
  createData("xxxx", "dd mmm yyyy", "John Doe", "Custom Plan", "Paid", "$ xx"),
];

export default function FormDialog(props) {
  const [changePricingType] = React.useState(-1);

  const [temp, setTemp] = useState(0);
  const [temp2, setTemp2] = useState(0);
  const [temp3, setTemp3] = useState(0);

  const top100Films = [
    { title: "The Shawshank Redemption", year: 1994 },
    { title: "The Godfather", year: 1972 },
    { title: "The Godfather: Part II", year: 1974 },
    { title: "The Dark Knight", year: 2008 },
    { title: "12 Angry Men", year: 1957 },
    { title: "Schindler's List", year: 1993 },
  ];

  return (
    <div>
      <Dialog
        fullScreen
        style={{
          width: 800,
          margin: "0px auto",
        }}
        open={props.open}
        onClose={() => {
          changePricingType(0);
          props.handleClose();
        }}
      >
        <div style={{ padding: 20, height: 500, width: 750 }}>
          <div className="batch_schedule_schedule_more_event_dialog_div">
            <h1>Location</h1>
            <IconButton onClick={() => props.handleClose()}>
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          <div
            style={{ padding: 20, height: 500, width: 700, marginBottom: 40 }}
          >
            <div>
              <p>
                Yay! You are 40% done. Let’s now add timing, location and
                instructors
              </p>
              <Grid container spacing={3}>
                <Grid item lg={6}>
                  <label style={{ color: "#827575", marginBottom: 10 }}>
                    Instructors
                  </label>
                  <TextField
                    id="outlined-select-currency"
                    select
                    size="large"
                    style={{ width: "100%", marginTop: 10 }}
                    value="0"
                    // helperText="Please select your currency"
                    variant="outlined"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={6}></Grid>
                <Grid item lg={6}>
                  <label style={{ color: "#827575" }}>
                    Location for this class
                  </label>
                  <TextField
                    id="outlined-select-currency"
                    select
                    size="large"
                    style={{ width: "100%", marginTop: 10 }}
                    value={temp2}
                    onChange={(e) => setTemp2(e.target.value)}
                    variant="outlined"
                  >
                    {business_location.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={6}></Grid>
                <Grid item lg={6}>
                  <label style={{ color: "#827575" }}>Select the batches</label>
                  <Autocomplete
                    multiple
                    id="checkboxes-tags-demo"
                    options={top100Films}
                    disableCloseOnSelect
                    getOptionLabel={(option) => option.title}
                    renderOption={(option, { selected }) => (
                      <React.Fragment>
                        <StyledCheckbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          style={{ marginRight: 8 }}
                          checked={selected}
                        />
                        {option.title}
                      </React.Fragment>
                    )}
                    style={{ marginTop: 10 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="outlined"
                        placeholder="Select Batches"
                      />
                    )}
                  />
                </Grid>
                {temp2 == 1 ? (
                  <div>
                    <Grid item lg={12} style={{ marginLeft: "2%" }}>
                      <label style={{ color: "#827575" }}>
                        Platform for hosting the online class
                      </label>
                      <div>
                        {["Zoom", "Google Meet", "Skype", "Others"].map(
                          (item, i) => {
                            return (
                              <Button
                                variant="outlined"
                                style={{
                                  minWidth: 90,
                                  color: "#ccc",
                                  border: "1px solid #65B1EC",
                                  background: temp == i ? "#65B1EC" : "",
                                  color: temp == i ? "#fff" : "#65B1EC",
                                  marginRight: 10,
                                  borderRadius: 30,
                                  padding: "15px 20px",
                                  marginTop: 10,
                                }}
                                onClick={() => setTemp(i)}
                              >
                                {item}
                              </Button>
                            );
                          }
                        )}
                      </div>
                    </Grid>
                    <div>
                      <Grid
                        style={{ marginTop: 20, marginLeft: "2%" }}
                        item
                        lg={12}
                      >
                        <label style={{ color: "#827575" }}>
                          Enter link to join the class (optional)
                        </label>
                        <TextField
                          variant="outlined"
                          placeholder="Enter here"
                          size="large"
                          style={{
                            width: "100%",
                            marginBottom: "20px",
                            marginTop: 10,
                          }}
                        />
                      </Grid>
                      <Grid item lg={12} style={{ marginLeft: "2%" }}>
                        <label style={{ color: "#827575" }}>
                          Enter any other details to send to participants
                          (optional)
                        </label>
                        <TextField
                          variant="outlined"
                          placeholder="Enter here"
                          size="large"
                          style={{
                            width: "100%",
                            height: "50px",
                            marginTop: 10,
                          }}
                        />
                      </Grid>
                    </div>
                    {temp == 3 ? (
                      <div>
                        <Grid item lg={12} style={{ marginLeft: "2%" }}>
                          <label style={{ color: "#827575" }}>
                            Please mention the platform used for taking the
                            class
                          </label>
                          <TextField
                            variant="outlined"
                            placeholder="Enter here"
                            size="large"
                            style={{
                              width: "100%",
                              height: "50px",
                              marginTop: 10,
                            }}
                          />
                        </Grid>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>
                ) : (
                  <div />
                )}
              </Grid>
              <div style={{ width: 200, marginLeft: "auto", marginTop: 50 }}>
                <Button
                  variant="contained"
                  style={{ background: "#FF8021", color: "#fff" }}
                >
                  Save and Continue
                </Button>
              </div>
              <div>
                <p
                  style={{
                    border: "1px solid #FF8021",
                    width: "100%",
                    borderRadius: 5,
                    padding: 5,
                    fontSize: "1rem",
                    paddingLeft: 30,
                    marginTop: 50,
                  }}
                >
                  <a
                    style={{ textDecoration: "none", color: "#FF8021" }}
                    href="#"
                  >
                    Learn more{" "}
                  </a>
                  about setting up your class schedule in the Claroo Knowledge
                  Base.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
