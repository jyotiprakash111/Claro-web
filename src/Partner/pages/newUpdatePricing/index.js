import React from "react";
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
import Card from "@material-ui/core/Card";

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
            <h1 style={{ color: "#323232" }}>Pricing</h1>
            <Grid container spacing={3}>
              <Grid item lg={3}>
                <Card style={{ padding: 20 }}>
                  <h3>Price plan name</h3>
                  <p style={{ marginTop: 0 }}>About price plan</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p style={{ color: "#FF8021", margin: 0 }}>Amount</p>
                      <p style={{ margin: 0 }}>price/class</p>
                    </div>
                    <div>
                      <Button
                        style={{
                          background: "#FF8021",
                          textTransform: "none",
                          color: "#fff",
                        }}
                      >
                        Select
                      </Button>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item lg={3}>
                <Card style={{ padding: 20 }}>
                  <h3>Price plan name</h3>
                  <p style={{ marginTop: 0 }}>About price plan</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p style={{ color: "#FF8021", margin: 0 }}>Amount</p>
                      <p style={{ margin: 0 }}>price/class</p>
                    </div>
                    <div>
                      <Button
                        style={{
                          background: "#FF8021",
                          textTransform: "none",
                          color: "#fff",
                        }}
                      >
                        Select
                      </Button>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item lg={3}>
                <Card style={{ padding: 20 }}>
                  <h3>Price plan name</h3>
                  <p style={{ marginTop: 0 }}>About price plan</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p style={{ color: "#FF8021", margin: 0 }}>Amount</p>
                      <p style={{ margin: 0 }}>price/class</p>
                    </div>
                    <div>
                      <Button
                        style={{
                          background: "#FF8021",
                          textTransform: "none",
                          color: "#fff",
                        }}
                      >
                        Select
                      </Button>
                    </div>
                  </div>
                </Card>
              </Grid>
              <Grid item lg={3}>
                <Card style={{ padding: 20 }}>
                  <h3>Price plan name</h3>
                  <p style={{ marginTop: 0 }}>About price plan</p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <p style={{ color: "#FF8021", margin: 0 }}>Amount</p>
                      <p style={{ margin: 0 }}>price/class</p>
                    </div>
                    <div>
                      <Button
                        style={{
                          background: "#FF8021",
                          textTransform: "none",
                          color: "#fff",
                        }}
                      >
                        Select
                      </Button>
                    </div>
                  </div>
                </Card>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}
