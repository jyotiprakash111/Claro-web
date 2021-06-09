import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import {
  KeyboardTimePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";

const MuiTimePicker = (props: any) => {
  const { name, required, errorobj } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }
  return (
    <React.Fragment>
      <KeyboardTimePicker
        fullWidth={true}
        InputLabelProps={{
          className: required ? "required-label" : "",
          required: required || false,
        }}
        style={{
          width: "80%",
          border: "1px solid #ccc",
          borderRadius: 5,
          alignItems: "center",
        }}
        error={isError}
        helperText={errorMessage}
        color="secondary"
        inputVariant="outlined"
        {...props}
      />
    </React.Fragment>
  );
};

function FormTimePicker(props: any) {
  const { control } = useFormContext();
  const { name, label } = props;

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          as={MuiTimePicker}
          name={name}
          control={control}
          label={label}
          defaultValue={null}
          {...props}
        />
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}

export default FormTimePicker;
