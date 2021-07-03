import React from "react";
import Button from "@material-ui/core/Button";

import Dialog from "./newLocation/Dialog";
import { makeStyles } from "@material-ui/core/styles";

//Pricing
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
//////////////////

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, amount) {
  return { name, calories, fat, carbs, protein, amount };
}

const rows = [
  createData("xxxx", "dd mmm yyyy", "John Doe", "One-time Fee", "Paid", "$ xx"),
  createData(
    "xxxx",
    "dd mmm yyyy",
    "John Doe",
    "Monthly/Weekly Fee",
    "Paid",
    "$ xx"
  ),
  createData("xxxx", "dd mmm yyyy", "John Doe", "Custom Plan", "Paid", "$ xx"),
];

export default function Location() {
  const classes = useStyles();
  const [temp, setTemp] = React.useState("0");
  const [temp2, setTemp2] = React.useState("1");
  const [counter, setCounter] = React.useState(false);
  if (temp2 == "0") {
    return (
      <div>
        <Dialog
          open={counter}
          handleClose={() => {
            setCounter(false);
            setTemp2(1);
          }}
        />

        <div style={{ width: 200, marginLeft: "auto", marginTop: "250px" }}>
          <Button
            variant="contained"
            onClick={() => setTemp2("1")}
            style={{ background: "#FF8021", color: "#fff" }}
          >
            Save and Continue
          </Button>
        </div>
      </div>
    );
  } else if (temp2 == "1") {
    return (
      <div style={{ width: "90%" }}>
        <div style={{ width: 200, textAlign: "right", marginLeft: "auto" }}>
          <Button
            style={{
              textTransform: "none",
              color: "#FF8021",
              border: "1px solid #FF8021",
            }}
            onClick={() => {
              setTemp2("0");
              setCounter(true);
            }}
            variant="outlined"
          >
            Add
          </Button>
        </div>
        <TableContainer
          style={{ width: "100%", marginTop: 20 }}
          component={Paper}
        >
          <Table className={classes.table} aria-label="simple table">
            <TableHead style={{ background: "#F8F8F8" }}>
              <TableRow>
                <TableCell>Plan Type</TableCell>
                <TableCell>Price Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Payment Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  // onClick={() => props.selectPrice(row.carbs)}
                  key={row.name}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div>
          <p
            style={{
              border: "1px solid #FF8021",
              width: "70%",
              borderRadius: 5,
              padding: 5,
              fontSize: "0.9rem",
              paddingLeft: 30,
              marginTop: 50,
            }}
          >
            <a style={{ textDecoration: "none", color: "#FF8021" }} href="#">
              Learn more{" "}
            </a>
            about setting up your class schedule in the Claroo Knowledge Base.
          </p>
        </div>
      </div>
    );
  }
}
