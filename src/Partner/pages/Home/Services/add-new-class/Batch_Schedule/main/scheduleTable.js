import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import SingleBatch from "./index";
import EditBatch from "./singleBatch";
import { Link } from "react-router-dom";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "./schedule/Menu";
import Button from "@material-ui/core/Button";
import MoreEvents from "./schedule/moreEvents";

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
  const [temp, setTemp] = React.useState(0);
  const [open1, setDialog] = React.useState(false);

  if (temp == 0) {
    return (
      <div style={{ marginTop: 0, maxWidth: "90%" }}>
        <MoreEvents open={open1} handleClose={() => setDialog(false)} />
        <div style={{ width: 200, textAlign: "right", marginLeft: "auto" }}>
          <Button
            style={{
              textTransform: "none",
              color: "#FF8021",
              border: "1px solid #FF8021",
              marginBottom: 20,
            }}
            onClick={() => setDialog(true)}
            variant="outlined"
          >
            Add Timing
          </Button>
        </div>
        <TableContainer id="customer" component={Paper}>
          <Table
            className={classes.table}
            size="small"
            aria-label="a dense table"
          >
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
                <TableCell
                  style={{ color: "#65B1EC" }}
                  align="left"
                ></TableCell>
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
                  <TableCell align="left">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <span style={{ marginRight: 30 }}>{row.location}</span>
                      <Menu onChange2={() => setTemp(1)} />
                    </div>
                  </TableCell>
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
  } else if (temp == 1) {
    return <SingleBatch onChange2={(e) => setTemp(e)} />;
  } else if (temp == 2) {
    return <EditBatch onChange2={() => setTemp(1)} />;
  }
}
