import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

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

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
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
  );
}
