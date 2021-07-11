import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { ArrowUpward } from "@material-ui/icons";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "90%",
    padding: 20,
    background: "#F8F8F8",
  },
  p: {
    margin: 0,
    color: "#323232",
  },
  h4: {
    color: "#323232",
    margin: "10px 0",
  },
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#323232",
    fontSize: 24,
  },
  number: {
    color: "#323232",
    fontSize: 56,
    margin: 0,
  },
  status_number: {
    color: "#323232",
    fontSize: 24,
    marginTop: 0,
  },
}));

export default function Card1(props) {
  const classes = useStyles();
  return (
    <Paper style={{ background: props.background }} className={classes.paper}>
      <h3 className={classes.title}>{props.title}</h3>
      <div className={classes.div}>
        <p style={{ color: props.headerColor }} className={classes.number}>
          {props.number}
        </p>
        <div>
          <p style={{ display: "flex" }} className={classes.p}>
            <ArrowUpward style={{ color: "#65B1EC" }} />
            <span style={{ color: "#65B1EC", marginTop: 5 }}>
              {props.number_of_percentage}
            </span>
          </p>
          <p style={{ fontSize: 15 }} className={classes.p}>
            over last week
          </p>
        </div>
      </div>
      <Divider />
      <div className={classes.div}>
        <p className={classes.status1}>{props.status1}</p>
        <p className={classes.status1}>{props.status2}</p>
      </div>

      <div className={classes.div}>
        <p className={classes.status_number}>{props.status1_number}</p>
        <p className={classes.status_number}>{props.status2_number}</p>
      </div>
    </Paper>
  );
}
