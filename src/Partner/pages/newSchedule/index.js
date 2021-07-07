import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import { makeStyles } from "@material-ui/core/styles";
import {
  MenuItem,
  FormControl,
  Select,
  Button,
  Grid,
  Divider,
} from "@material-ui/core";
import {
  Add as DateRangeIcon,
  Add as GroupIcon,
  TextFields,
} from "@material-ui/icons";
import FormDatePicker from "../../components/controls/FormDatePicker";
import TextField from "@material-ui/core/TextField";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import RoomIcon from "@material-ui/icons/Room";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
// import ViewSchedule from "./viewSchedule";
// import CreateNewSchedule from "./createNewSchedule";
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
      <SideBar />
      <div style={{ marginLeft: 300 }}>
        <Header name="Schedule" avatar={true} />
        <div id="schedules">
          <div>
            <h1 style={{ color: "#323232" }}>Schedule</h1>
            <p style={{ color: "#323232", margin: 0, padding: 0 }}>
              Text added by the business user as instructions for booking for
              the customer
            </p>
            <p style={{ color: "#323232", marginTop: 5, padding: 0 }}>
              Lorem ipsum
            </p>
            <p style={{ marginBottom: 0, marginTop: 20 }}>Starting from</p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingRight: 0,
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
                  <TextField placeholder="All classes" variant="outlined" />
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 100,
                }}
              >
                <QueryBuilderIcon style={{ fontSize: 16, marginTop: 4 }} />
                <p style={{ marginLeft: 7, padding: 0 }}>Timezone: India</p>
              </div>
            </div>
          </div>
          <div>
            <Grid container spacing={3}>
              <Grid item lg={11}>
                <p
                  style={{
                    color: "#FF8021",
                    fontSize: 20,
                  }}
                >
                  8 Feb, Monday
                </p>
                <Divider style={{ margin: "20px 0" }} />
                <table style={{ width: "100%" }}>
                  <tr>
                    <td>6.00pm-7.00pm</td>
                    <td style={{ width: 300 }}>
                      Class title
                      <div style={{ fontSize: "12px", display: "flex" }}>
                        <RoomIcon
                          style={{
                            fontSize: 12,
                            paddingTop: 2,
                            marginRight: 1,
                          }}
                        />
                        Location Name-
                        <PersonOutlineIcon
                          style={{
                            fontSize: 12,
                            paddingTop: 2,
                            marginRight: 1,
                          }}
                        />
                        Instructor
                      </div>
                    </td>
                    <td>Price</td>
                    <td>
                      5 spots left!
                      <div>
                        <Button
                          style={{
                            background: "#FF8021",
                            color: "#fff",
                            width: 80,
                            height: 30,
                            marginTop: 10,
                            fontWeight: "bold",
                            textTransform: "none",
                          }}
                        >
                          Book
                        </Button>
                      </div>
                    </td>
                  </tr>
                </table>
                <Divider style={{ margin: "40px 0 20px 0" }} />
                <table style={{ width: "100%" }}>
                  <tr>
                    <td>6.00pm-7.00pm</td>
                    <td style={{ width: 300 }}>
                      Class title
                      <div style={{ fontSize: "12px" }}>
                        <RoomIcon
                          style={{
                            fontSize: 12,
                            paddingTop: 2,
                            marginRight: 1,
                            marginLeft: 5,
                          }}
                        />
                        Location Name-
                        <PersonOutlineIcon
                          style={{
                            fontSize: 12,
                            paddingTop: 2,
                            marginRight: 1,
                            marginLeft: 5,
                          }}
                        />
                        Instructor
                      </div>
                    </td>
                    <td>Price</td>
                    <td>Full</td>
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
                <table style={{ width: "100%" }}>
                  <tr>
                    <td>7.00pm</td>
                    <td style={{ width: 300 }}>
                      Class title
                      <div style={{ fontSize: "12px", display: "flex" }}>
                        <QueryBuilderIcon
                          style={{
                            fontSize: 12,
                            paddingTop: 2,
                            marginRight: 3,
                          }}
                        />
                        duration -
                        <RoomIcon
                          style={{
                            fontSize: 12,
                            paddingTop: 2,
                            marginRight: 1,
                            marginLeft: 5,
                          }}
                        />
                        Location Name-
                        <PersonOutlineIcon
                          style={{
                            fontSize: 12,
                            paddingTop: 2,
                            marginRight: 1,
                            marginLeft: 5,
                          }}
                        />
                        Instructor
                      </div>
                    </td>
                    <td></td>
                    <td>
                      {" "}
                      <Button
                        style={{
                          background: "#FF8021",
                          color: "#fff",
                          width: 80,
                          height: 30,
                          marginTop: 10,
                          fontWeight: "bold",
                          textTransform: "none",
                        }}
                      >
                        Book
                      </Button>
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
                  fullWidth
                >
                  Show more 10 days
                </Button>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
