import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

const materialTheme = createMuiTheme({
  overrides: {
    MuiPickersDay: {
      day: {
        color: "#707070",
      },
      daySelected: {
        backgroundColor: "#FF8021",
        "&:hover": {
          backgroundColor: "#FF8021",
        },
      },
      current: {
        color: "#FF8021",
      },
    },
    MuiSvgIcon: {
      root: {
        fill: "#FF8021",
      },
    },
    MuiOutlinedInput: {
      root: {
        border: "none",
        "&:hover": {
          border: "10px solid red !important", // i'm struggling with this :/
        },
      },
    },
  },
});

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ThemeProvider theme={materialTheme}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd MMM yyyy"
            margin="normal"
            id="date-picker-inline"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              "aria-label": "change date",
            }}
            style={{ width: 150, borderBottom: "none" }}
          />
        </Grid>
      </ThemeProvider>
    </MuiPickersUtilsProvider>
  );
}
