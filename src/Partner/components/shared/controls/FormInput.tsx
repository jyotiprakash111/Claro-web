import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import { FormLabel } from "@material-ui/core";

function FormInput(props: any) {
  const { control } = useFormContext();
  const { name, label, required, errorobj } = props;
  let isError = false;
  let errorMessage = "";
  if (errorobj && errorobj.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errorobj[name].message;
  }

  return (
    <>
      {/* <FormLabel component='legend'>{label}</FormLabel> */}
      <Controller
        as={TextField}
        name={name}
        control={control}
        defaultValue=''
        label={label}
        InputLabelProps={{
          className: required ? "required-label" : "",
          required: required || false,
        }}
        error={isError}
        fullWidth
        helperText={errorMessage}
        {...props}
      />
    </>
  );
}

export default FormInput;
