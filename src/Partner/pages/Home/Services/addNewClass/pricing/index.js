import React from "react";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Dialog from "./newPricing";

//Table
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const currencies = [
  {
    value: "0",
    label: "Apply to all batches for this class",
  },
  {
    value: "1",
    label: "Apply to selected batches only",
  },
];
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

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

const useStyles = makeStyles({});

function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ "aria-label": "decorative checkbox" }}
      {...props}
    />
  );
}

export default function Location() {
  const classes = useStyles();

  const [temp, setTemp] = React.useState("");
  const [temp2, setTemp2] = React.useState("1");
  const [counter, setCounter] = React.useState(false);

  function renderField(temp) {
    if (temp == "Add trial class plan") {
      return setTemp(0);
    }
    if (temp == "Add drop in plan") {
      return setTemp(1);
    }
    if (temp == "One-time Fee") {
      return setTemp(2);
    }
    if (temp == "Monthly/Weekly Fee") {
      return setTemp(3);
    }
    if (temp == "Custom Plan") {
      return setTemp(4);
    }
  }

  if (temp2 == "0") {
    return (
      <div>
        <Dialog open={counter} handleClose={() => setCounter(false)} />
        <p>
          60% completed arlready! Let’s get started with adding prices for the
          scheduled classes
        </p>
        <Grid container spacing={3}>
          <Grid item lg={6}>
            <label style={{ color: "#827575" }}>Price per session</label>
            <TextField
              id="outlined-select-currency"
              style={{ width: "100%" }}
              value="0"
              // helperText="Please select your currency"
              variant="outlined"
            />
          </Grid>
          <Grid item lg={6}></Grid>
          <Grid item lg={6}>
            {" "}
            <label style={{ color: "#827575" }}>
              Select the batches to apply this price plan
            </label>
            <TextField
              id="outlined-select-currency"
              select
              size="large"
              style={{ width: "100%" }}
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
              // helperText="Please select your currency"
              variant="outlined"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item lg={6}></Grid>
          {temp === "1" ? (
            <Grid item lg={6}>
              <label style={{ color: "#827575" }}>Select the batchess</label>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <StyledCheckbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </React.Fragment>
                )}
                style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    placeholder="Favorites"
                  />
                )}
              />

              <Button
                style={{
                  background: "#65B1EC",
                  marginTop: 50,
                  borderRadius: 40,
                  height: 50,
                  textTransform: "none",
                  width: 150,
                  color: "#fff",
                }}
                onClick={() => setCounter(true)}
                variant="contained"
              >
                Add a price plan
              </Button>
            </Grid>
          ) : (
            ""
          )}
        </Grid>
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
        <Dialog
          open={counter}
          temp={temp}
          handleClose={() => setCounter(false)}
        />
        <div style={{ width: 200, textAlign: "right", marginLeft: "auto" }}>
          <Button
            style={{
              textTransform: "none",
              color: "#FF8021",
              border: "1px solid #FF8021",
            }}
            onClick={() => {
              setTemp("");
              setCounter(true);
            }}
            variant="outlined"
          >
            Add price plan
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
                  onClick={(e) => {
                    renderField(row.carbs);
                    setCounter(true);
                  }}
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
