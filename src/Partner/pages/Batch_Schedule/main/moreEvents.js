import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./style.css";
import CancelIcon from "@material-ui/icons/Cancel";
import { Divider } from "@material-ui/core";
import { Controller, FormProvider, useForm } from "react-hook-form";
import { TramRounded } from "@material-ui/icons";
import FormDatePicker from "../../../components/controls/FormDatePicker";
import FormTimePicker from "../../../components/controls/FormTimePicker";

export default function FormDialog(props) {
  const [paymentType, changePaymentType] = useState(-1);
  const [open, setOpen] = useState(true);

  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
            <select
              style={{
                height: 40,
              }}
              id="business"
              name="user_job"
              onChange={(e) => changePaymentType(e.target.value)}
            >
              <option value={0}>Until a certain date</option>
              <option value={1}>For a number of events</option>
            </select>
          </div>
          <div style={{ width: "50%" }}>
            <label style={{ marginTop: 10 }} for="business">
              Batch Name
            </label>
            <FormTimePicker
              name="startTime"
              placeholder="DD/MM/YYYY"
              required={true}
            />
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
              placeholder="Eg. Afternoon Dance with Kate"
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
            <select
              style={{
                height: 40,
              }}
              id="business"
              name="user_job"
              onChange={(e) => changePaymentType(e.target.value)}
            >
              <option value={0}>Monday</option>
              <option value={1}>Tuesday</option>
              <option value={2}>Wednesday</option>
              <option value={3}>Thursday</option>
              <option value={4}>Friday</option>
              <option value={5}>Saturday</option>
              <option value={6}>Sunday</option>
            </select>
          </div>
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
              Repeat until
            </label>
            <select
              style={{
                height: 40,
              }}
              id="business"
              name="user_job"
              onChange={(e) => changePaymentType(e.target.value)}
            >
              <option value={0}>Until a certain date</option>
              <option value={1}>For a number of events</option>
            </select>
          </div>
          <div style={{ width: "50%", marginTop: 10 }}>
            <FormTimePicker
              name="startTime"
              placeholder="DD/MM/YYYY"
              required={true}
            />
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
              placeholder="Eg. Afternoon Dance with Kate"
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
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <FormProvider {...methods}>
      <div>
        <Dialog
          fullScreen
          style={{ width: 900, height: "90%", width: 800, margin: "20px auto" }}
          open={open}
          onClose={() => handleClose()}
        >
          <div style={{ padding: 20, height: 500, width: 700 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <h1>Add more timings Single event</h1>
              {/* <CancelIcon  onClose={() => handleClose()} /> */}
              <button onClick={() => handleClose()}>Close</button>
            </div>

            <Divider />
            <form id="customer" style={{}}>
              <fieldset>
                <div
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
                    <select
                      style={{
                        height: 40,
                      }}
                      id="business"
                      name="user_job"
                      onChange={(e) => changePaymentType(e.target.value)}
                    >
                      <option value={0}>Daily</option>
                      <option value={1}>Weekly</option>
                      <option value={3}>Does not repeat</option>
                    </select>
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
                  onClick={() => handleClose()}
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
