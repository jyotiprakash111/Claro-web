import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { purple } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const PurpleSwitch = withStyles({
  switchBase: {
    color: "#65B1EC",
    "&$checked": {
      color: "#65B1EC",
    },
    "&$checked + $track": {
      backgroundColor: "#65B1EC",
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function CustomizedSwitches() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <PurpleSwitch
            checked={state.checkedA}
            onChange={handleChange}
            name="checkedA"
          />
        }
        label="Enable Online Bookings"
      />
    </FormGroup>
  );
}
