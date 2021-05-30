import React, { Component } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CancelIcon from "@material-ui/icons/Cancel";
import Button from "@material-ui/core/Button";
import Menu from "./Menu";
import MoreEvents from "./moreEvents";

export default class index extends Component {
  render() {
    return (
      <div>
        <MoreEvents open={true} />
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
            variant="outlined"
          >
            Add another session
          </Button>
          <Button
            variant="contained"
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
}
