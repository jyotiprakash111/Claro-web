import React from "react";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
    zoom: 1.4,
    paddingBottom: 2,
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],

    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,

      "& + $track": {
        opacity: 1,
        backgroundColor: "#fff",
        borderColor: "#65B1EC",
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
    background: "#65B1EC",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);

export default function Tab3() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  return (
    <div>
      <form style={{ maxWidth: "70%" }}>
        <fieldset style={{ border: "none" }}>
          <label for="name" style={{ color: "#ccc" }}>
            Welcome message
          </label>
          <div style={{ display: "flex" }}>
            <textarea
              type="text"
              autoFocus
              row="2"
              id="mail"
              name="user_email"
              placeholder="John Doe"
              style={{
                width: "100%",
                padding: 20,
                paddingTop: 10,
                paddingLeft: 10,
                marginBottom: 20,
              }}
            />
          </div>
          <label for="name" style={{ color: "#ccc" }}>
            Terms and conditions
          </label>
          <div style={{ display: "flex" }}>
            <textarea
              type="text"
              autoFocus
              row="2"
              id="mail"
              name="user_email"
              placeholder="John Doe"
              style={{
                width: "100%",
                padding: 20,
                paddingTop: 10,
                paddingLeft: 10,
              }}
            />
          </div>
          <Typography component="div">
            <Grid
              style={{ padding: 5, marginTop: 20 }}
              component="label"
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <AntSwitch
                  checked={state.checkedC}
                  onChange={handleChange}
                  name="checkedC"
                />
              </Grid>
              <Grid item>Show booking time zone</Grid>
              <Grid item>
                {" "}
                <Checkbox
                  style={{}}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                />
              </Grid>

              <Grid item>Automatically switch to customer timezone</Grid>
            </Grid>
          </Typography>
          <Typography component="div">
            <Grid
              style={{ padding: 5, marginTop: 0 }}
              component="label"
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <AntSwitch
                  checked={state.checkedC}
                  onChange={handleChange}
                  name="checkedC"
                />
              </Grid>
              <Grid item>Show prices</Grid>
            </Grid>
          </Typography>
          <Typography component="div">
            <Grid
              style={{ padding: 5, marginTop: 0 }}
              component="label"
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <AntSwitch
                  checked={state.checkedC}
                  onChange={handleChange}
                  name="checkedC"
                />
              </Grid>
              <Grid item>Show duration</Grid>
            </Grid>
          </Typography>
          <Typography component="div">
            <Grid
              style={{ padding: 5, marginTop: 0 }}
              component="label"
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <AntSwitch
                  checked={state.checkedC}
                  onChange={handleChange}
                  name="checkedC"
                />
              </Grid>
              <Grid item>Show number of slots available in class session</Grid>
            </Grid>
          </Typography>
          <Typography component="div">
            <Grid
              style={{ padding: 5, marginTop: 0 }}
              component="label"
              container
              alignItems="center"
              spacing={1}
            >
              <Grid item>
                <AntSwitch
                  checked={state.checkedC}
                  onChange={handleChange}
                  name="checkedC"
                />
              </Grid>
              <Grid item>Show booking notes</Grid>
            </Grid>
          </Typography>
        </fieldset>
      </form>
    </div>
  );
}
