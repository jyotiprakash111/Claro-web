import React from "react";
import { useFormContext, Controller } from "react-hook-form";

import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const MuiAutoComplete = (props: any) => {
  const { name, label, required, errorobj, options, placeholder } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }
  return (
    <React.Fragment>
      <Autocomplete
        multiple
        options={options}
        getOptionLabel={(option: any) => option.title}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant='outlined'
            color='secondary'
            label={label}
            placeholder={placeholder}
          />
        )}
      />
    </React.Fragment>
  );
};

function FormAutoComplete(props: any) {
  const { control } = useFormContext();
  const { name, label, placeholder } = props;

  return (
    <React.Fragment>
      <Controller
        as={MuiAutoComplete}
        name={name}
        control={control}
        label={label}
        defaultValue={null}
        placeholder={placeholder}
        {...props}
      />
    </React.Fragment>
  );
}

export default FormAutoComplete;
