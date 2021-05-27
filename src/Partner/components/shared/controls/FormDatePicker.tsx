import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";

const MuiDatePicker = (props: any) => {
  const { name, required, errorobj } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }
  return (
    <React.Fragment>
      <KeyboardDatePicker
        format='MM/dd/yyyy'
        fullWidth={true}
        InputLabelProps={{
          className: required ? "required-label" : "",
          required: required || false,
        }}
        error={isError}
        helperText={errorMessage}
        inputVariant='outlined'
        color='secondary'
        {...props}
      />
    </React.Fragment>
  );
};

function FormDatePicker(props: any) {
  const { control } = useFormContext();
  const { name, label } = props;

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Controller
          as={MuiDatePicker}
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

export default FormDatePicker;
