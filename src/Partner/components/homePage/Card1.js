import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { ArrowRightAlt } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  paper: {
    width: "200px",
    padding: 10,
  },
  p: {
    margin: 0,
  },
  h4: {
    color: "#323232",
    margin: "10px 0",
  },
  div: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
}));

export default function Card1(props) {
  const classes = useStyles();
  return (
    <Paper style={{ background: props.background }} className={classes.paper}>
      <div className={classes.div}>
        <p style={{ color: props.headerColor }} className={classes.p}>
          {props.text}
        </p>
        {props.isIcon ? (
          <ArrowRightAlt style={{ color: props.iconColor }} />
        ) : (
          ""
        )}
      </div>
      <h4 className={classes.h4}>0 INR</h4>
    </Paper>
  );
}
