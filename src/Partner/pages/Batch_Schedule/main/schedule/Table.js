import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Menu from "./Menu";
import "./style.css";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, amount) {
  return { name, calories, fat, carbs, protein, amount };
}

const rows = [
  createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
  createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
  createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{ background: "#F8F8F8" }}>
          <TableRow>
            <TableCell>Sl no</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Schedule Name</TableCell>
            <TableCell>Class Start Time</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Start Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.fat}</TableCell>
              <TableCell>{row.carbs}</TableCell>
              <TableCell>{row.protein}</TableCell>
              <TableCell>
                <div
                  style={{
                    alignItems: "center",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  {row.amount} <Menu />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
