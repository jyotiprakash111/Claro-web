import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  Grid,
  MenuItem,
  Radio,
  RadioGroup,
  Switch,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { Controller, useForm } from "react-hook-form";

const currencies = [
  {
    value: "USD",
    label: "Adults Yoga",
  },
  {
    value: "EUR",
    label: "Kids Yoga",
  },
  {
    value: "BTC",
    label: "Flexible Yoga",
  },
];

interface BasicInfoFormProps {
  handleNext: () => void;
  handleBack: () => void;
}

const validationSchema = yup.object().shape({
  // classTitle: yup.string().required(),
});

const BasicInfoForm = (props: BasicInfoFormProps) => {
  const [currency, setCurrency] = React.useState("");
  const defaultValues = {
    classTitle: "ewewewewe",
  };

  const { register, handleSubmit, setValue, control, watch, errors } = useForm({
    resolver: yupResolver(validationSchema),
    // defaultValues,
  });

  const watchAge = watch("age");

  const onSubmit = (data: any) => {
    console.log(data, "data", errors);
    props.handleNext();
  };
  console.log(watch("age"), errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant='subtitle1'>
            We are super excited to find you adding a new activity to your list!
            Kindly fill the following details:
          </Typography>
        </Grid>
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
        <Grid item xs={6}>
          <Controller
            as={
              <TextField
                select
                label='Class Category'
                value={currency}
                color='secondary'
                inputRef={register}
                fullWidth
                variant='outlined'
                defaultValue=''
                placeholder='E.g. ‘Yoga for beginners’ or ‘Advanced Art’'
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            }
            name={"category"}
            control={control}
          />
          <Typography variant='subtitle1'>+ Add new category</Typography>
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

        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FormLabel component='legend'>Age of your student</FormLabel>
              <Controller
                as={
                  <RadioGroup name='gender1' defaultValue=''>
                    <FormControlLabel
                      value='female'
                      control={<Radio />}
                      label='Everyone'
                    />
                    <FormControlLabel
                      value='male'
                      control={<Radio />}
                      label='For Adults'
                    />
                    <FormControlLabel
                      value='other'
                      control={<Radio />}
                      label='For children only (less than 18 years)'
                    />
                  </RadioGroup>
                }
                name='age'
                control={control}
              />
            </Grid>
            {watchAge == "other" && (
              <>
                <Grid item xs={3} alignItems='flex-end'>
                  <Controller
                    as={
                      <TextField
                        select
                        label='Min Age'
                        value={currency}
                        color='secondary'
                        inputRef={register}
                        fullWidth
                        variant='outlined'
                        defaultValue=''
                        placeholder='E.g. ‘Yoga for beginners’ or ‘Advanced Art’'
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    }
                    name={"minAge"}
                    control={control}
                  />{" "}
                </Grid>
                <Grid item xs={3} alignItems='flex-end'>
                  <FormLabel component='legend'></FormLabel>
                  <Controller
                    as={
                      <TextField
                        select
                        label='Max age'
                        value={currency}
                        color='secondary'
                        inputRef={register}
                        fullWidth
                        variant='outlined'
                        defaultValue=''
                        placeholder='E.g. ‘Yoga for beginners’ or ‘Advanced Art’'
                      >
                        {currencies.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </TextField>
                    }
                    name={"maxAge"}
                    control={control}
                  />
                </Grid>
                <Grid item xs={3} alignItems='flex-end'>
                  <Controller
                    name='Checkbox'
                    control={control}
                    render={(props) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            onChange={(e) => props.onChange(e.target.checked)}
                            checked={props.value}
                          />
                        }
                        label='Request Adult Presence'
                      />
                    )}
                  />
                </Grid>
              </>
            )}
          </Grid>
        </Grid>
        <Grid item xs={12} spacing={3}>
          <FormControlLabel
            control={<Switch name='checkedB' color='secondary' />}
            label='Enable Online Bookings'
            inputRef={register}
          />
        </Grid>
        <Grid container xs={12} spacing={3} justify='flex-end'>
          <div>
            <Button onClick={props.handleBack} disabled>
              Back
            </Button>
            <Button variant='contained' color='primary' type='submit'>
              Save and Continue
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default BasicInfoForm;
