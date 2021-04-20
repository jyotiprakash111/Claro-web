import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Avatar_Pic from "../../../../assets/img/avatar.png";

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
    </div>
  );
}
