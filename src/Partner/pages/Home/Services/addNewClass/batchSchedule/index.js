import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
// import EditBatch from "./main/singleBatch";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
// import MoreEvents from "./schedule/moreEvents";

//Batch Schedule
import Dialog from "@material-ui/core/Dialog";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CancelIcon from "@material-ui/icons/Cancel";
import { Divider } from "@material-ui/core";
import { Controller, FormProvider, useForm } from "react-hook-form";
import FormDatePicker from "../../../../../components/controls/FormDatePicker";
import FormTimePicker from "../../../../../components/controls/FormTimePicker";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";

//Menu Item
import IconButton from "@material-ui/core/IconButton";
import MenuItem from "@material-ui/core/MenuItem";
// import MoreEvents from "./moreEvents";
const options = ["Edit", "View"];

const ITEM_HEIGHT = 48;

const useStyles = makeStyles({
  table: {},
});

//More Events
const names = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function createData(name, calories, fat, carbs, protein, location) {
  return { name, calories, fat, carbs, protein, location };
}

const rows = [
  createData("Jane Doe", "15 Jan", "10 Feb", "6", "June,Mary", "Online"),
  createData("Jane Doe", "15 Jan", "10 Feb", "6", "June,Mary", "Online"),
  createData("Jane Doe", "15 Jan", "10 Feb", "6", "June,Mary", "Online"),
  createData("Jane Doe", "15 Jan", "10 Feb", "6", "June,Mary", "Online"),
];

export default function DenseTable() {
  const classes = useStyles();
  const [temp, setTemp] = React.useState(0);
  const [open1, setDialog] = React.useState(false);

  if (temp == 0) {
    return (
      <div style={{ marginTop: 0, maxWidth: "90%" }}>
        <MoreEvents open={open1} handleClose={() => setDialog(false)} />
        <div style={{ width: 200, textAlign: "right", marginLeft: "auto" }}>
          <Button
            style={{
              textTransform: "none",
              color: "#FF8021",
              border: "1px solid #FF8021",
              marginBottom: 20,
            }}
            onClick={() => setDialog(true)}
            variant="outlined"
          >
            Add
          </Button>
        </div>
        <TableContainer id="customer" component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
            <TableHead>
              <TableRow>
                <TableCell style={{ color: "#65B1EC" }}>Batch name</TableCell>
                <TableCell style={{ color: "#65B1EC" }} align="left">
                  Batch start date
                </TableCell>
                <TableCell style={{ color: "#65B1EC" }} align="left">
                  Batch end date
                </TableCell>
                <TableCell style={{ color: "#65B1EC" }} align="left">
                  Total session{" "}
                </TableCell>
                <TableCell style={{ color: "#65B1EC" }} align="left">
                  Start time
                </TableCell>
                <TableCell style={{ color: "#65B1EC" }} align="left">
                  Class location{" "}
                </TableCell>
                <TableCell
                  style={{ color: "#65B1EC" }}
                  align="left"
                ></TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {rows.map((row) => (
                <TableRow style={{ padding: 10 }} key={row.name}>
                  <TableCell scope="row">{row.name}</TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="left">{row.protein}</TableCell>
                  <TableCell align="left">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ marginRight: 30 }}>{row.location}</span>
                      <Menu onChange2={() => setTemp(1)} />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <p
            style={{
              border: "1px solid #FF8021",
              width: "70%",
              borderRadius: 5,
              padding: 5,
              fontSize: "0.9rem",
              paddingLeft: 30,
              marginTop: 50,
            }}
          >
            <a style={{ textDecoration: "none", color: "#FF8021" }} href="#">
              Learn more{" "}
            </a>
            about setting up your class schedule in the Claroo Knowledge Base.
          </p>
        </div>
      </div>
    );
  } else if (temp == 1) {
    return <SingleBatch onChange2={(e) => setTemp(e)} />;
  } else if (temp == 2) {
    return <SingleBatch onChange2={() => setTemp(1)} />;
  }
}

function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const [open1, setDialog] = React.useState(false);
  const [open2, setDialog2] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        style={{ height: 30 }}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: 100,
            padding: 0,
          },
        }}
      >
        {options.map((option, i) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={() => props.onChange2(1)}
            style={{
              background: i == 0 ? "#65B1EC" : "",
              color: i == 0 ? "#fff" : "",
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

function MoreEvents(props) {
  const [paymentType, changePaymentType] = useState(3);
  const [temp, changeTemp] = useState(0);
  const [temp2, changeTemp2] = useState(0);
  const [open, setOpen] = useState(true);
  const [personName, setPersonName] = React.useState([]);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const renderInput = (e) => {
    if (e == 0) {
      return (
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ padding: 5, margin: 0 }}>Repeat every </p>
            <input
              type="number"
              style={{
                width: 150,
                border: "1px solid #ccc",
                marginLeft: 10,
                marginRight: 10,
              }}
              placeholder="Eg John Doe"
              id="mail"
              name="account_no"
            />
            <p>day(s)</p>
          </div>
          <div style={{ marginTop: 20, width: "50%" }}>
            <label style={{ marginTop: 10 }} for="business">
              Class repeat pattern
            </label>
            <Select
              variant="outlined"
              value={temp}
              onChange={(e) => changeTemp(e.target.value)}
              style={{
                border: "1px solid #ccc",
                height: 40,
                width: "80%",
              }}
            >
              <MenuItem value={0}>Until a certain date</MenuItem>
              <MenuItem value={1}>For a number of events</MenuItem>
            </Select>
          </div>
          <div style={{ width: "50%", marginTop: 10 }}>
            {temp == 0 ? (
              <FormDatePicker
                name="startTime"
                placeholder="DD/MM/YYYY"
                required={true}
              />
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="number"
                  style={{
                    width: 100,
                    border: "1px solid #ccc",

                    marginRight: 10,
                  }}
                  placeholder="Eg 5"
                  id="mail"
                  name="account_no"
                />
                <p style={{ padding: 0, margin: 0 }}>concurrences</p>
              </div>
            )}
          </div>
          <div style={{ width: "80%" }}>
            <label style={{ marginTop: 10 }} for="business">
              Class end time
            </label>
            <input
              type="text"
              style={{
                width: "80%",
                border: "1px solid #ccc",
              }}
              placeholder="Eg. Afternoon Dance with Kate2"
              id="mail"
              name="account_no"
            />
          </div>
        </div>
      );
    }
    if (e == 1) {
      return (
        <div>
          <div style={{ marginTop: 20, width: "50%" }}>
            <label style={{ marginTop: 10 }} for="business">
              Select days
            </label>
            <Select
              labelId="demo-mutiple-checkbox-label"
              id="demo-mutiple-checkbox"
              multiple
              value={personName}
              onChange={handleChange}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
              MenuProps={MenuProps}
              style={{
                border: "1px solid #ccc",
                height: 40,
                width: "80%",
                borderBottom: "none",
              }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p style={{ padding: 5, margin: 0 }}>Repeat every </p>
            <input
              type="number"
              style={{
                width: 100,
                border: "1px solid #ccc",
                marginLeft: 10,
                marginRight: 10,
              }}
              placeholder="Eg 5"
              id="mail"
              name="account_no"
            />
            <p>Weeks(s)</p>
          </div>
          <div style={{ marginTop: 20, width: "50%" }}>
            <label style={{ marginTop: 10 }} for="business">
              Repeat until
            </label>
            <Select
              variant="outlined"
              value={temp2}
              onChange={(e) => changeTemp2(e.target.value)}
              style={{
                border: "1px solid #ccc",
                height: 40,
                width: "80%",
              }}
            >
              <MenuItem value={0}>Until a certain date</MenuItem>
              <MenuItem value={1}>For a number of events</MenuItem>
            </Select>
          </div>

          <div style={{ width: "50%", marginTop: 10 }}>
            {temp2 == 0 ? (
              <FormDatePicker
                name="startTime"
                placeholder="DD/MM/YYYY"
                required={true}
              />
            ) : (
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="number"
                  style={{
                    width: 100,
                    border: "1px solid #ccc",

                    marginRight: 10,
                  }}
                  placeholder=""
                  id="mail"
                  name="account_no"
                />
                <p style={{ padding: 0, margin: 0 }}>concurrences</p>
              </div>
            )}
          </div>
          <div style={{ width: "80%" }}>
            <label style={{ marginTop: 10 }} for="business">
              Batch Name
            </label>
            <input
              type="text"
              style={{
                width: "80%",
                border: "1px solid #ccc",
              }}
              placeholder="Eg. Afternoon Dance with Kate2"
              id="mail"
              name="account_no"
            />
          </div>
        </div>
      );
    }
  };

  const validationSchema = yup.object().shape({});
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <FormProvider {...methods}>
      <div id="batch_schedule_schedule_more_event">
        <Dialog
          fullScreen
          className="dialog"
          style={{
            height: paymentType == 3 ? "70%" : "90%",
            width: 760,
            margin: "20px auto",
          }}
          open={props.open}
          onClose={() => props.handleClose()}
        >
          <div style={{ padding: 20, height: 500, width: 700 }}>
            <div className="batch_schedule_schedule_more_event_dialog_div">
              <h1>Add more timings Single event</h1>
              <IconButton onClick={() => props.handleClose()}>
                <CancelIcon />
              </IconButton>
            </div>

            <Divider />
            <form id="single_Event" style={{}}>
              <fieldset>
                <div
                  className="customer_div_1"
                  style={{ display: "flex", width: "100%", flexWrap: "wrap" }}
                >
                  <div style={{ width: "50%" }}>
                    <label style={{ marginTop: 10 }} for="business">
                      Class start date
                    </label>
                    <FormDatePicker name="startDate" placeholder="Start Date" />
                  </div>

                  <div style={{ width: "50%" }}>
                    {" "}
                    <label style={{ marginTop: 10 }} for="business">
                      Class repeat pattern
                    </label>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      variant="outlined"
                      value={paymentType}
                      onChange={(e) => changePaymentType(e.target.value)}
                      style={{
                        border: "1px solid #ccc",
                        height: 40,
                        width: "80%",
                      }}
                    >
                      <MenuItem value={0}>Daily</MenuItem>
                      <MenuItem value={1}>Weekly</MenuItem>
                      <MenuItem value={3}>Does not repeat</MenuItem>
                    </Select>
                  </div>
                  <div style={{ width: "50%" }}>
                    <label style={{ marginTop: 10 }} for="business">
                      Class start time
                    </label>
                    <FormTimePicker
                      name="startTime"
                      placeholder="Class Start Time"
                      required={true}
                    />
                  </div>
                  <div style={{ width: "50%" }}>
                    <label style={{ marginTop: 10 }} for="business">
                      Class end time
                    </label>
                    <FormTimePicker
                      name="classEndTime"
                      placeholder="Class End Time"
                      required={true}
                    />
                  </div>
                </div>
              </fieldset>
              <div style={{ textAlign: "left", marginLeft: 20 }}>
                <p>Time zone: Location and GMT time</p>
                {renderInput(paymentType)}
                <Button
                  style={{
                    background: "#FF8021",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: 5,
                    width: 180,
                    height: 40,
                    marginTop: 20,
                    marginBottom: 30,
                  }}
                  onClick={() => props.handleClose()}
                  variant="contained"
                >
                  Save and continue
                </Button>
              </div>
            </form>
          </div>
        </Dialog>
      </div>
    </FormProvider>
  );
}

function SingleBatch(props) {
  const [open1, setDialog] = React.useState(false);
  return (
    <div id="batch_schedule_single_batch">
      <MoreEvents open={open1} handleClose={() => setDialog(false)} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 30, margin: 0, padding: 0 }}>Batch name 1</p>
        <p style={{ fontSize: 30, margin: 0, padding: 0 }}>
          <Menu />
        </p>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ display: "flex", alignItems: "center" }}>
          <p>Sat Jul 18, 1pm - 1:45 Eastern</p>
          <CancelIcon style={{ marginLeft: 20, color: "#C95B3B" }} />
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <p>Sat Jul 18, 1pm - 1:45 Eastern</p>
          <CancelIcon style={{ marginLeft: 20, color: "#C95B3B" }} />
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <p>Sat Jul 18, 1pm - 1:45 Eastern</p>
          <CancelIcon style={{ marginLeft: 20, color: "#C95B3B" }} />
        </li>
      </ul>

      <div style={{ marginTop: 40 }}>
        <Button
          style={{
            textTransform: "none",
            border: "1px solid #FF8021",
            color: "#FF8021",
            borderRadius: 20,
          }}
          onClick={() => setDialog(true)}
          variant="outlined"
        >
          Add more session
        </Button>
        <Button
          variant="contained"
          onClick={() => props.onChange2()}
          style={{
            textTransform: "none",
            background: "#FF8021",
            color: "#fff",
            marginLeft: 20,
            borderRadius: 20,
          }}
        >
          Save and continue
        </Button>
      </div>
    </div>
  );
}
