import React, { Component } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import Menu from "./schedule/Menu";

export default class index extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button
              style={{ textTransform: "none" }}
              onClick={() => this.props.onChange2(0)}
            >
              <ArrowBackIosIcon /> Go back to all batches
            </Button>
          </div>
          <div>
            <Button
              style={{
                background: "#65B1EC",
                color: "#fff",
                textTransform: "none",
                borderRadius: 20,
                width: 150,
                textAlign: "right",
                marginTop: 20,
                marginRight: 20,
              }}
              //   onClick={() => props.handleClose()}
              variant="contained"
            >
              New batch
            </Button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: 30, margin: 0, padding: 0 }}>Batch name 1</p>
          <p style={{ fontSize: 30, margin: 0, padding: 0 }}>
            <Menu onChange2={() => this.props.onChange2(2)} />
          </p>
        </div>

        <p>This class meets “x” times in total </p>
        <p>Sat Jul 11, 1pm - 1:45 Eastern</p>
        <p style={{ fontWeight: "bold" }}>Tue Jul 15, 1pm - 1:45 Eastern </p>
        <p>Sat Jul 18, 1pm - 1:45 </p>
      </div>
    );
  }
}
