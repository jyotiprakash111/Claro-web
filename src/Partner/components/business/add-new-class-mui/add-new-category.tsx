import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";

const validationSchema = yup.object().shape({
  // classTitle: yup.string().required(),
});

const AddNewCategory = () => {
  const { register, handleSubmit, setValue, control, watch, errors } = useForm({
    resolver: yupResolver(validationSchema),
    // defaultValues,
  });

  const onSubmit = (data: any) => {
    console.log(data, "data", errors);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='subtitle1'>
            We are super excited to find you adding a new activity to your list!
            Kindly fill the following details:
          </Typography>
        </Grid>

        {/* <form> */}
        <Grid item xs={6}>
          <TextField
            name={"classTitle"}
            label='Class Title'
            variant='outlined'
            color='secondary'
            placeholder='E.g. ‘Yoga for beginners’ or ‘Advanced Art’'
            inputRef={register}
            fullWidth
            error={errors.classTitle}
            helperText={errors?.classTitle?.message || ""}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            name={"description"}
            label='Briefly describe this class (120 words)'
            multiline
            fullWidth
            rows={4}
            color='secondary'
            placeholder='Shows on the class public page. Add class info/instructions'
            variant='outlined'
            inputRef={register}
          />
        </Grid>
        <Grid container xs={12} spacing={3} justify='flex-end'>
          <Button variant='contained' color='primary' type='submit'>
            Save and Continue
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddNewCategory;
