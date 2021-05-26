import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MenuIcon from "@material-ui/icons/Menu";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import Menu from "./Menu";
import "./table.css";
import Dialog from "./Dialog2";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein, amount) {
  return { name, calories, fat, carbs, protein, amount };
}

const rows = [
  createData("John Doe", "9658884153", "aditi6847@gmail.com", "Owner Login"),
  createData("John Doe", "9658884153", "aditi6847@gmail.com", "Owner Login"),
  createData("John Doe", "9658884153", "aditi6847@gmail.com", "Owner Login"),
  createData("John Doe", "9658884153", "aditi6847@gmail.com", "Owner Login"),
];

export default function BasicTable(props) {
  const classes = useStyles();

  return (
    <TableContainer id="team" component={Paper}>
      <Dialog handleClose={() => props.onClose()} open={props.open} />
      <Table className={classes.table} aria-label="simple table">
        <TableHead style={{ background: "#F8F8F8" }}>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Mobile Number</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>User Permission</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell style={{ width: 400 }}>{row.name}</TableCell>
              <TableCell style={{ width: 400 }}>{row.calories}</TableCell>
              <TableCell style={{ width: 500 }}>{row.fat}</TableCell>
              <TableCell
                style={{
                  width: 150,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span style={{ marginRight: 30 }}>{row.carbs} </span>
                <Menu />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
