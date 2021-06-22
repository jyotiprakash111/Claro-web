import React, { Component } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import Button from "@material-ui/core/Button";
import Menu from "./schedule/Menu";
import MoreEvents from "./schedule/moreEvents";

export default function SingleBatch(props) {
  const [open1, setDialog] = React.useState(false);
  return (
    <div id="batch_schedule_single_batch">
      <MoreEvents open={open1} handleClose={() => setDialog(false)} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 30, margin: 0, padding: 0 }}>Batch name 1</p>
        <p style={{ fontSize: 30, margin: 0, padding: 0 }}>
          <Menu />
        </p>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li style={{ display: "flex", alignItems: "center" }}>
          <p>Sat Jul 18, 1pm - 1:45 Eastern</p>
          <CancelIcon style={{ marginLeft: 20, color: "#C95B3B" }} />
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <p>Sat Jul 18, 1pm - 1:45 Eastern</p>
          <CancelIcon style={{ marginLeft: 20, color: "#C95B3B" }} />
        </li>
        <li style={{ display: "flex", alignItems: "center" }}>
          <p>Sat Jul 18, 1pm - 1:45 Eastern</p>
          <CancelIcon style={{ marginLeft: 20, color: "#C95B3B" }} />
        </li>
      </ul>

      <div style={{ marginTop: 40 }}>
        <Button
          style={{
            textTransform: "none",
            border: "1px solid #FF8021",
            color: "#FF8021",
            borderRadius: 20,
          }}
          onClick={() => setDialog(true)}
          variant="outlined"
        >
          Add more session
        </Button>
        <Button
          variant="contained"
          onClick={() => props.onChange2()}
          style={{
            textTransform: "none",
            background: "#FF8021",
            color: "#fff",
            marginLeft: 20,
            borderRadius: 20,
          }}
        >
          Save and continue
        </Button>
      </div>
    </div>
  );
}