import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import CancelIcon from "@material-ui/icons/Cancel";
import { Divider } from "@material-ui/core";
import { FormProvider, useForm } from "react-hook-form";
import FormDatePicker from "../../../../../components/controls/FormDatePicker";
import FormTimePicker from "../../../../../components/controls/FormTimePicker";
import Checkbox from "@material-ui/core/Checkbox";
import MenuItem from "@material-ui/core/MenuItem";
import Input from "@material-ui/core/Input";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import IconButton from "@material-ui/core/IconButton";

//style import//
import useStyles from "./style";

const names = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function FormDialog(props) {
  const classes = useStyles();

  const [paymentType, changePaymentType] = useState(-1);
  const [temp, changeTemp] = useState(0);
  const [temp2, changeTemp2] = useState(0);

  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
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
            <label className={classes.formSingleEventDivLabel} for="business">
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
            <label className={classes.formSingleEventDivLabel} for="business">
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
            <label className={classes.formSingleEventDivLabel} for="business">
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
            <p>day(s)</p>
          </div>
          <div style={{ marginTop: 20, width: "50%" }}>
            <label className={classes.formSingleEventDivLabel} for="business">
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
            <label className={classes.formSingleEventDivLabel} for="business">
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
  console.log(paymentType == 3);
  return (
    <FormProvider {...methods}>
      <div id="batch_schedule_schedule_more_event">
        <Dialog
          fullScreen
          className="dialog"
          style={{
            height: paymentType == 3 ? "70vh" : "90%",
            width: 760,
            margin: "20px auto",
          }}
          open={props.open}
          onClose={() => props.handleClose()}
        >
          <div className={classes.dialogContainerHeading}>
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
                  <div className={classes.formSingleEventDiv}>
                    <label
                      className={classes.formSingleEventDivLabel}
                      for="business"
                    >
                      Class start date
                    </label>
                    <FormDatePicker name="startDate" placeholder="Start Date" />
                  </div>

                  <div className={classes.formSingleEventDiv}>
                    <label
                      className={classes.formSingleEventDivLabel}
                      for="business"
                    >
                      Class repeat pattern
                    </label>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      variant="outlined"
                      value={paymentType}
                      onChange={(e) => changePaymentType(e.target.value)}
                      className={classes.formSingleEventDivSelect}
                    >
                      <MenuItem value={0}>Daily</MenuItem>
                      <MenuItem value={1}>Weekly</MenuItem>
                      <MenuItem value={3}>Does not repeat</MenuItem>
                    </Select>
                  </div>
                  <div className={classes.formSingleEventDiv}>
                    <label
                      className={classes.formSingleEventDivLabel}
                      for="business"
                    >
                      Class start time
                    </label>
                    <FormTimePicker
                      name="startTime"
                      placeholder="Class Start Time"
                      required={true}
                    />
                  </div>
                  <div className={classes.formSingleEventDiv}>
                    <label
                      className={classes.formSingleEventDivLabel}
                      for="business"
                    >
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
                  className={classes.formSingleEventDivButton}
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
