import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

import Table from "../../../components/Team/Table";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div id="schedules">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          paddingRight: 100,
          marginTop: 30,
        }}
      >
        <FormControl variant="outlined" className={classes.formControl}>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={10}
            onChange={handleChange}
            size="small"
            style={{ height: 40 }}
          >
            <MenuItem value={10}>All location </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <Button
          style={{
            border: "1px solid #FF8021",
            color: "#FF8021",
            width: 180,
            height: 40,
          }}
          onClick={() => setOpen2(true)}
          variant="outlined"
        >
          Add new Member
        </Button>
      </div>
      <Table open={open2} onClose={() => setOpen2(false)} />
    </div>
  );
}
