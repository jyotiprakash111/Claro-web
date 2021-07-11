import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { ArrowRightAlt } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  paper: {
    width: "96%",
    padding: 10,
    marginBottom: 20,
  },
  div: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 24,
    color: "#262E4A",
    marginBottom: 10,
    marginTop: 5,
  },
  price: {
    fontSize: 24,
    color: "#65B1EC",
    marginBottom: 10,
    marginTop: 5,
  },
  class_name: {
    fontSize: 15,
    color: "#323232",
  },
  status: {
    fontSize: 15,
    color: "#FF8021",
  },
}));

export default function Card1(props) {
  const classes = useStyles();
  return (
    <Paper style={{ background: props.background }} className={classes.paper}>
      <div className={classes.div}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.price}>{props.price}</p>
      </div>
      <div className={classes.div}>
        <p className={classes.class_name}>{props.class_name}</p>
        <p style={{ color: props.statusColor }} className={classes.status}>
          {props.status}
        </p>
      </div>
    </Paper>
  );
}
