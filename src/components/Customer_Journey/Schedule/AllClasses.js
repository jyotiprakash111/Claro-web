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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function BasicTable() {
  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell style={{ color: "#FF8021" }}>8 Feb, Monday</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th">
                <p>Class start time</p>
                <p>Class end time</p>
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
            <TableRow>
              <TableCell component="th">
                <p>5:00 pm - 6:00 pm</p>
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
              <TableCell style={{ color: "#FF8021" }}>
                10 Feb, Wednesday
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th">
                <p>5:00 pm - 6:00 pm</p>
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
