// Don't use formControls - Work remaining

import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";
import { InputLabel, TextField } from "@material-ui/core";

const MuiSelect = (props: any) => {
  const { label, name, options, required, errorobj } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }

  return (
    <FormControl fullWidth={true} error={isError}>
      <TextField select label={label} color='secondary' variant='outlined'>
        {options.map((item: any) => (
          <MenuItem value={item.value}>{item.label}</MenuItem>
        ))}
      </TextField>
      <FormHelperText>{errorMessage}</FormHelperText>
    </FormControl>
  );
};

function FormSelect(props: any) {
  const { control, watch } = useFormContext();
  const { name, label } = props;
  return (
    <React.Fragment>
      <Controller
        as={MuiSelect}
        control={control}
        name={name}
        label={label}
        {...props}
      />
    </React.Fragment>
  );
}

export default FormSelect;
