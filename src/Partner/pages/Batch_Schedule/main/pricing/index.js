import React, { Component } from "react";
import SideBar from "../../../../components/common/SideBar";
import Header from "../../../../components/common/HeaderMain";
//import SearchBar from "../../../components/searchBar/index";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
// import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./Table";
// import Dialog from "./Dialog";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "40vw",
    border: "1px solid #ccc",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    height: 40,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Jane Doe", "+91 9090197097", "mail@example", "4Yr"),
  createData("Custom", "+91 9090197097", "mail@example", "4Yr"),
  createData("Subscription", "+91 9090197097", "mail@example", "4Yr"),
];

const Customers = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div style={{ marginRight: 100 }}>
      <div>
        <Table />
        {/* <TableContainer
          id="customer"
          style={{
            marginTop: "0%",
            maxWidth: "100%",
            display: "block",
            overflowX: "auto",
          }}
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
                  <TableCell>Plan Type</TableCell>
                  <TableCell align="left">Price Name</TableCell>
                  <TableCell align="left">Price</TableCell>
                  <TableCell colSpan="2" align="left">
                    Batches
                  </TableCell>
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
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Link>
        </TableContainer>
      
       */}

        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ color: "#FF8021" }}>Show More</p>
          <ArrowDropDownIcon style={{ color: "#FF8021", marginTop: 3 }} />
        </div>
      </div>
    </div>
  );
};
export default Customers;
