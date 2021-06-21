import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import SideBar from "../../../components/common/SideBar";
import Header from "../../../components/common/HeaderMain";

import "./style.css";
import Dialog from "./Dialog";
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
    <div>
      <SideBar />
      <div style={{ marginLeft: 300 }}>
        <Header to='/settings' title="Payment" name='Payment' avatar={true}/>
        <Dialog open={open} handleClose={() => setOpen(false)} />
        <Grid container>
          <Grid item lg={8}>
            <p>
              Customers will be able to book a service and make pay using any of
              the method you mention. Upon booking you will receive an email and
              the booking will appear under ‘Pending review’ in your homepage.
              After your payment verification and confirmation of booking, the
              customer will be notified. Please refer to this article or video
              for further clarification.
            </p>
          </Grid>
          <Grid item lg={2}>
            <div style={{ margin: 20 }}>
              <Button
                variant='contained'
                style={{
                  background: "#65B1EC",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: 20,
                  width: 150,
                }}
                onClick={() => setOpen(true)}
              >
                Add new
              </Button>
            </div>
          </Grid>
          <Grid item lg={12}>
            <p
              style={{
                fontSize: 30,
                paddingBottom: 10,
                marginBottom: 30,
                borderBottom: "1px solid #65B1EC",
                width: "90%",
              }}
            >
              Bank transfer
            </p>
            <h4>Account name</h4>
            <p style={{ color: "#ccc", marginTop: -10 }}>Jone Doe</p>
            <h4>Account number</h4>
            <p style={{ color: "#ccc", marginTop: -10 }}>CR27592891</p>
            <h4>Account name</h4>
            <p style={{ color: "#ccc", marginTop: -10 }}>ICICIafakjfkurk</p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
