import React, { Component } from "react";
import SideBar from "../../../components/common/SideBar";
import Header from "../../../components/common/HeaderMain";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  FormControl,
  Select,
  Button,
  Grid,
  Divider,
} from "@material-ui/core";
import { Add as DateRangeIcon, Add as GroupIcon } from "@material-ui/icons";
import FormDatePicker from "../../../components/controls/FormDatePicker";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import "./style.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Schedule() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const validationSchema = yup.object().shape({});
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div>
      <div>
        <div id="schedules">
          <div>
            <p>Starting from</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingRight: 50,
              }}
            >
              <FormProvider {...methods}>
                <div style={{ textTransform: "none", fontSize: 20 }}>
                  <FormDatePicker
                    name="startTime"
                    placeholder="DD/MM/YYYY"
                    required={true}
                  />
                </div>
              </FormProvider>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={10}
                    onChange={handleChange}
                    size="small"
                    style={{ height: 40 }}
                  >
                    <MenuItem value={10}>All location </MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={10}
                    onChange={handleChange}
                    size="small"
                    style={{ height: 40 }}
                  >
                    <MenuItem value={10}>All Instructors</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </div>
              <Button
                style={{ height: 40, marginLeft: "auto" }}
                variant="outlined"
                onClick={() => setOpen2(true)}
              >
                Add New
              </Button>
            </div>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid item lg={5}>
                <p
                  style={{
                    color: "#FF8021",
                    fontSize: 20,
                  }}
                >
                  8 Feb, Monday
                </p>
                <Divider style={{ margin: "20px 0" }} />
                <table>
                  <tr>
                    <td>Class start time</td>
                    <td>Class title</td>
                    <td>
                      <span style={{ color: "#FF8021" }}>x/y</span> booked
                    </td>
                  </tr>
                </table>
                <Divider style={{ margin: "40px 0 20px 0" }} />
                <table>
                  <tr>
                    <td>
                      <b>5:00 pm - 6:00 pm</b>
                    </td>
                    <td>Class title</td>
                  </tr>
                </table>
                <p
                  style={{
                    color: "#FF8021",
                    fontSize: 20,
                    marginTop: 50,
                  }}
                >
                  8 Feb, Monday
                </p>
                <Divider style={{ margin: "20px 0" }} />
                <table>
                  <tr>
                    <td>
                      <b>5:00 pm - 6:00 pm</b>
                    </td>
                    <td>
                      Class title
                      <br />
                      Instructor Name
                    </td>
                  </tr>
                </table>

                <Button
                  variant="outlined"
                  style={{
                    color: "#FF8021",
                    border: "1px solid #FF8021",
                    marginTop: 50,
                  }}
                >
                  Show more
                </Button>
              </Grid>
              <Grid item lg={7}>
                <div
                  style={{
                    width: "70%",
                    border: "1px solid #323232",
                    padding: 30,
                    borderRadius: 10,
                    marginTop: 30,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <p style={{ fontSize: 20 }}>Class title</p>
                    <Button
                      variant="contained"
                      style={{
                        borderRadius: 5,
                        background: "#65B1EC",
                        color: "#fff",
                        width: 100,
                        textTransform: "none",
                      }}
                      onClick={() => setOpen(true)}
                    >
                      Edit
                    </Button>
                  </div>
                  <Divider />
                  <div
                    style={{
                      display: "flex",
                      marginTop: 20,
                      alignItems: "flex-start",
                    }}
                  >
                    <div>
                      <DateRangeIcon
                        style={{
                          color: "#FF8021",
                          fontSize: 35,
                          marginRight: 20,
                        }}
                      />
                    </div>
                    <div>
                      <p
                        style={{
                          marginTop: 0,
                          padding: 0,
                          fontSize: 17,
                          color: "#323232",
                        }}
                      >
                        8 Feb, Mon, 5pm - 6pm
                      </p>
                      <p style={{ fontSize: 17, color: "#323232" }}>
                        Class Location name / meeting link
                      </p>
                      <label style={{ color: "rgba(50,50,50,0.5)" }}>
                        Instructor name: Lorem, ipsum.
                      </label>
                    </div>
                  </div>
                  <Divider style={{ width: "50%", margin: "20px 0" }} />

                  <span
                    style={{
                      color: "#2BBA50",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    COURSE DATES
                  </span>
                  <div style={{ marginLeft: 20 }}>
                    <p>
                      <span style={{ fontWeight: "bold" }}>Course</span> with 11{" "}
                      <span style={{ fontWeight: "bold" }}>events:</span>
                    </p>
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#4779B5",
                        }}
                      >
                        <GroupIcon style={{ marginRight: 10, color: "#ccc" }} />
                        Tue, 30 Mar 10am-11am
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#4779B5",
                          marginTop: 10,
                        }}
                      >
                        <GroupIcon style={{ marginRight: 10, color: "#ccc" }} />
                        Tue, 30 Mar 10am-11am
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#4779B5",
                          marginTop: 10,
                        }}
                      >
                        <GroupIcon style={{ marginRight: 10, color: "#ccc" }} />
                        Tue, 30 Mar 10am-11am
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#4779B5",
                          marginTop: 10,
                        }}
                      >
                        <GroupIcon style={{ marginRight: 10, color: "#ccc" }} />
                        Tue, 30 Mar 10am-11am
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#4779B5",
                          marginTop: 10,
                        }}
                      >
                        <GroupIcon style={{ marginRight: 10, color: "#ccc" }} />
                        Tue, 30 Mar 10am-11am
                      </li>
                      <li
                        style={{
                          display: "flex",
                          alignItems: "center",
                          color: "#4779B5",
                          marginTop: 10,
                        }}
                      >
                        <GroupIcon style={{ marginRight: 10, color: "#ccc" }} />
                        Tue, 30 Mar 10am-11am
                      </li>
                    </ul>
                  </div>
                  <span
                    style={{
                      color: "#2BBA50",
                      fontWeight: "bold",
                      fontSize: 14,
                    }}
                  >
                    TICKETS
                  </span>
                  <div style={{ marginLeft: 20, marginTop: 10 }}>
                    <label style={{ fontStyle: "italic" }}>
                      Unnamed Ticket
                    </label>
                    <h5 style={{ margin: 0, padding: 0 }}>Full course</h5>
                    <div style={{ marginLeft: 40, marginTop: 5 }}>
                      <h5 style={{ margin: 0, padding: 0, fontWeight: "bold" }}>
                        s$100.00
                      </h5>
                      <p style={{ padding: 0, margin: 0 }}>
                        First time customers
                      </p>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
