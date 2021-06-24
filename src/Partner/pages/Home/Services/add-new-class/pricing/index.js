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
import Table from "./Table";
import Dialog from "./Dialog";

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
const currencies2 = [
  {
    value: "0",
    label: "",
  },
  {
    value: "1",
    label: "Apply to selected batches only",
  },
];

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "#65B1EC",
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow: "inset 0 0 0 1px #65B1EC, inset 0 -1px 0 #65B1EC",
    backgroundColor: "#65B1EC",
    backgroundImage: "#65B1EC",
    "$root.Mui-focusVisible &": {
      outline: "2px auto #65B1EC",
      outlineOffset: 2,
    },
    "input:hover ~ &": {
      backgroundColor: "#65B1EC",
    },
    "input:disabled ~ &": {
      boxShadow: "none",
      background: "#65B1EC",
    },
  },
  checkedIcon: {
    backgroundColor: "#65B1EC",
    backgroundImage: "#65B1EC",
    "&:before": {
      display: "block",
      width: 16,
      height: 16,
      backgroundImage: "#65B1EC",
      content: '""',
    },
    "input:hover ~ &": {
      backgroundColor: "#65B1EC",
    },
  },
});

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
  const [temp, setTemp] = React.useState("0");
  const [temp2, setTemp2] = React.useState("1");
  const [counter, setCounter] = React.useState(false);
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
              <label style={{ color: "#827575" }}>Select the batches</label>
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
        <div style={{ width: 200, textAlign: "right", marginLeft: "auto" }}>
          <Button
            style={{
              textTransform: "none",
              color: "#FF8021",
              border: "1px solid #FF8021",
            }}
            onClick={() => setTemp2("0")}
            variant="outlined"
          >
            Add price plan
          </Button>
        </div>
        <Table />
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
