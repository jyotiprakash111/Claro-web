import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import SearchBar from "../../components/searchBar/index";
import Button from "@material-ui/core/Button";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Dialog from "./Dialog";

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

const Customers = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <SideBar />
      <Dialog open={open} handleClose={() => setOpen(false)} />
      <div style={{ marginLeft: 300 }}>
        <Header name="Customers" avatar={true} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 30,
            paddingRight: 100,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <div component="form" className={classes.root}>
              <IconButton className={classes.iconButton} aria-label="menu">
                <SearchIcon />
              </IconButton>
              {/* <Divider className={classes.divider} orientation="vertical" /> */}
              <InputBase
                className={classes.input}
                placeholder="Any topic or teacher"
                inputProps={{ "aria-label": "search google maps" }}
              />
            </div>
            <Button
              style={{
                background: "#FF8021",
                color: "#fff",
                borderColor: "#FF8021",
                height: "40px",
                padding: "20px 30px",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              variant="outlined"
            >
              Search
            </Button>
          </div>
          <Button
            variant="outlined"
            style={{
              color: "#FF8021",
              border: "1px solid #FF8021",
              height: 40,
            }}
            onClick={() => setOpen(true)}
          >
            New Customer
          </Button>
        </div>
        <p style={{ color: "#FF8021" }}>Ordering: Latest booking first</p>
        <TableContainer
          id="customer"
          style={{
            marginTop: "3%",
            maxWidth: "90%",
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
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ color: "#FF8021" }}>Show More</p>
          <ArrowDropDownIcon style={{ color: "#FF8021", marginTop: 3 }} />
        </div>
      </div>
    </div>
  );
};
export default Customers;
