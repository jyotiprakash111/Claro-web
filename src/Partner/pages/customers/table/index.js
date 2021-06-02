import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";

import "./style.css";

const useStyles = makeStyles({
  table: {},
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Jane Doe",
    "+91 9090197097",
    "mail@example",
    "4Yr",
    "Active classes"
  ),
  createData(
    "Custom",
    "+91 9090197097",
    "mail@example",
    "4Yr",
    "Active classes"
  ),
  createData(
    "Subscription",
    "+91 9090197097",
    "mail@example",
    "4Yr",
    "Active classes"
  ),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer
      id="customer"
      style={{ marginTop: "3%", maxWidth: "90%" , display:'block',
      overflowX:'auto'}}
      component={Paper}
    >
      <Link style={{ textDecoration: "none" }} to="partner_home">
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Participant Name</TableCell>
              <TableCell align="right">Contact Number</TableCell>
              <TableCell align="right">Email address</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow style={{ padding: 10 }} key={row.name}>
                <TableCell scope="row">{row.name}</TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Link>
    </TableContainer>
  );
}
