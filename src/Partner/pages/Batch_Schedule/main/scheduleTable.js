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
import MoreVertIcon from "@material-ui/icons/MoreVert";

import Menu from "./Menu";
import "./style.css";

const useStyles = makeStyles({
  table: {},
});

function createData(name, calories, fat, carbs, protein, location) {
  return { name, calories, fat, carbs, protein, location };
}

const rows = [
  createData("Jane Doe", "15 Jan", "10 Feb", "6", "June,Mary", "Online"),
  createData("Jane Doe", "15 Jan", "10 Feb", "6", "June,Mary", "Online"),
  createData("Jane Doe", "15 Jan", "10 Feb", "6", "June,Mary", "Online"),
  createData("Jane Doe", "15 Jan", "10 Feb", "6", "June,Mary", "Online"),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer
      id="customer"
      style={{ marginTop: 20, maxWidth: 1120 }}
      component={Paper}
    >
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "#65B1EC" }}>Batch name</TableCell>
            <TableCell style={{ color: "#65B1EC" }} align="left">
              Batch start date
            </TableCell>
            <TableCell style={{ color: "#65B1EC" }} align="left">
              Batch end date
            </TableCell>
            <TableCell style={{ color: "#65B1EC" }} align="left">
              Total session{" "}
            </TableCell>
            <TableCell style={{ color: "#65B1EC" }} align="left">
              Start time
            </TableCell>
            <TableCell style={{ color: "#65B1EC" }} align="left">
              Class location{" "}
            </TableCell>
            <TableCell style={{ color: "#65B1EC" }} align="left"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow style={{ padding: 10 }} key={row.name}>
              <TableCell scope="row">{row.name}</TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
              <TableCell align="left">{row.protein}</TableCell>
              <TableCell align="left">{row.location} </TableCell>
              <TableCell align="left">
                <Menu />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
