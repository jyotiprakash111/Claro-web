import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import Clock from "../../assets/img/footer_icon/clock.png";
import Calender from "../../assets/img/calender.png";

import DatePicker from "./DatePicker";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <p style={{ color: "#323232", fontSize: 13 }}>Starting from</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={Calender}
            style={{ width: 17, height: 17, marginRight: 10 }}
          />
          <span>7 February 2021</span>
          {/* 
          <DatePicker /> */}
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={Clock} style={{ width: 17, height: 17, marginRight: 5 }} />{" "}
          Indian Standard Time
        </div>
      </div>
      <TableContainer>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell colSpan="4" style={{ color: "#65B1EC", fontSize: 20 }}>
                8 Feb, Monday
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th">
                <h4>Class start time</h4>
                <h4>Class end time</h4>
              </TableCell>
              <TableCell>
                <p>Class title</p>
                <p>By Instructor name</p>
              </TableCell>
              <TableCell>Participant: Name</TableCell>
              <TableCell>
                <Button variant="outlined">Join Class</Button>
              </TableCell>
            </TableRow>
            <TableRow className="borderLess">
              <TableCell>
                <h4>5:00 pm - 6:00 pm</h4>
              </TableCell>
              <TableCell>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </TableCell>
              <TableCell>Participant: Name</TableCell>
              <TableCell>
                <Button variant="outlined">View Details</Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell colSpan="4" style={{ color: "#65B1EC", fontSize: 20 }}>
                10 Feb, Wednesday
              </TableCell>
            </TableRow>
            <TableRow className="borderLess">
              <TableCell>
                <h4>5:00 pm - 6:00 pm</h4>
              </TableCell>
              <TableCell>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </TableCell>
              <TableCell>Participant: Name</TableCell>
              <TableCell>
                <Button variant="outlined">View Details</Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ marginTop: 10 }}>
        <Button
          variant="outlined"
          style={{ border: "1px solid #FF8021", color: "#FF8021" }}
        >
          Show More
        </Button>
      </div>
    </div>
  );
}
