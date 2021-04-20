import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Menu from "./Menu";
import Avatar_Pic from "../../../../assets/img/avatar.png";
import Avatar_Pic2 from "../../../../assets/img/avatar2.png";

const useStyles = makeStyles({
  label: {
    color: "#323232",
    fontSize: 15,
  },
  name: {
    fontSize: "32px",
    color: "#323232",
  },
});

export default function Index() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid lg={4} item>
          <Avatar
            alt="Remy Sharp"
            src={Avatar_Pic}
            style={{ width: 200, height: 200 }}
          />
        </Grid>
        <Grid lg={4} item>
          <p
            style={{
              fontSize: 15,
              color: "#323232",
              margin: 0,
              fontWeight: 300,
            }}
          >
            Name
          </p>
          <p style={{ fontSize: 32, color: "#323232", margin: 0 }}>
            Aditi Mantri
          </p>
          <p
            style={{ fontSize: 15, color: "#323232", margin: 0, marginTop: 20 }}
          >
            Email ID
          </p>
          <p style={{ fontSize: 24, color: "#323232", margin: 0 }}>
            aditimantri123@gmail.com
          </p>
        </Grid>
        <Grid
          lg={2}
          style={{
            alignItems: "flex-start",
            justifyContent: "flex-end",
            display: "flex",
            flexDirection: "column",
            paddingBottom: 50,
          }}
          item
        >
          <p style={{ fontSize: 15, color: "#323232", margin: 0 }}>
            Phone no. (optional)
          </p>
          <p style={{ fontSize: 24, color: "#323232", margin: 0 }}>
            +0123456789
          </p>
        </Grid>
        <Grid lg={2} item>
          <Button style={{ width: 150, padding: 10 }} variant="outlined">
            Edit
          </Button>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 50,
        }}
      >
        <div>
          <p style={{ fontSize: 32, color: "#323232", margin: 0 }}>
            Participants
          </p>
          <p style={{ fontSize: 15, color: "#323232", margin: 0 }}>
            The following are the list of participants added
          </p>
        </div>
        <div>
          <Button variant="outlined">Add New</Button>
        </div>
      </div>
      <Divider style={{ margin: "30px 0 0 0" }} />
      <Grid style={{ margin: 30 }} container spacing={3}>
        <Grid item lg={4} style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src={Avatar_Pic2}
            style={{
              width: 100,
              height: 100,
              marginRight: 30,
              marginTop: "-10px",
            }}
          />
          <div>
            <p
              style={{
                fontSize: 15,
                color: "#323232",
                margin: 0,
                fontWeight: 300,
              }}
            >
              Name
            </p>
            <p style={{ fontSize: 24, color: "#323232", margin: 0 }}>
              Gayathri Ajit
            </p>
          </div>
        </Grid>
        <Grid item lg={3} style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <div>
            <p
              style={{
                fontSize: 15,
                color: "#323232",
                margin: 0,
                fontWeight: 300,
              }}
            >
              Gender
            </p>
            <p style={{ fontSize: 24, color: "#323232", margin: 0 }}>Female</p>
          </div>
        </Grid>
        <Grid item lg={3} style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <div>
            <p
              style={{
                fontSize: 15,
                color: "#323232",
                margin: 0,
                fontWeight: 300,
              }}
            >
              DOB
            </p>
            <p style={{ fontSize: 24, color: "#323232", margin: 0 }}>
              06/12/2005
            </p>
          </div>
        </Grid>
        <Grid item lg={2} style={{ display: "flex", alignItems: "center" }}>
          <Menu />
        </Grid>
      </Grid>
      <Grid style={{ margin: 30 }} container spacing={3}>
        <Grid item lg={4} style={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt="Remy Sharp"
            src={Avatar_Pic2}
            style={{
              width: 100,
              height: 100,
              marginRight: 30,
              marginTop: "0px",
            }}
          />
          <div>
            <p
              style={{
                fontSize: 15,
                color: "#323232",
                margin: 0,
                fontWeight: 300,
              }}
            >
              Name
            </p>
            <p style={{ fontSize: 24, color: "#323232", margin: 0 }}>
              Gayathri Ajit
            </p>
          </div>
        </Grid>
        <Grid item lg={3} style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <div>
            <p
              style={{
                fontSize: 15,
                color: "#323232",
                margin: 0,
                fontWeight: 300,
              }}
            >
              Gender
            </p>
            <p style={{ fontSize: 24, color: "#323232", margin: 0 }}>Female</p>
          </div>
        </Grid>
        <Grid item lg={3} style={{ display: "flex", alignItems: "center" }}>
          {" "}
          <div>
            <p
              style={{
                fontSize: 15,
                color: "#323232",
                margin: 0,
                fontWeight: 300,
              }}
            >
              DOB
            </p>
            <p style={{ fontSize: 24, color: "#323232", margin: 0 }}>
              06/12/2005
            </p>
          </div>
        </Grid>
        <Grid item lg={2} style={{ display: "flex", alignItems: "center" }}>
          <Menu />
        </Grid>
      </Grid>
    </div>
  );
}
