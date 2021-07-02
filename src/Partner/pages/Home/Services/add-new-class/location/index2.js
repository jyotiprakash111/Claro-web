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
import Table from "../pricing/Table";
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
  // {
  //   value: "1",
  //   label: "Apply to selected batches only",
  // },
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
