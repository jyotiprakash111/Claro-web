import "date-fns";
import {
  Button,
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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import FormInput from "../../shared/controls/FormInput";
import FormRadio from "../../shared/controls/FormRadio";
import FormSelect from "../../shared/controls/FormSelect";
import FormDatePicker from "../../shared/controls/FormDatePicker";
import FormCheckbox from "../../shared/controls/FormCheckbox";
import FormTimePicker from "../../shared/controls/FormTimePicker";
import FormAutoComplete from "../../shared/controls/FormAutoComplete";

const currencies = [
  {
    value: 1,
    label: "Adults Yoga",
  },
  {
    value: 2,
    label: "Kids Yoga",
  },
  {
    value: 3,
    label: "Flexible Yoga",
  },
];
const radioGroupOptions = [
  {
    value: "female",
    label: "This is a one-time class",
  },
  {
    value: "male",
    label: "This is a multi-session class with a repeating schedule",
  },
];

const locationOptions = [
  {
    value: "online",
    label: "Online",
  },
  {
    value: "businessAddress",
    label: "Business Address",
  },
  {
    value: "customerAddress",
    label: "Customer Address",
  },
];

const instructorOptions = [
  {
    value: "online",
    label: "No instructors assigned to the class",
  },
  {
    value: "businessAddress",
    label: "Assign instructors for the class",
  },
];

const classEnds = [
  {
    value: "on",
    label: "On",
  },
  {
    value: "after",
    label: "After",
  },
  {
    value: "never",
    label: "Never",
  },
];

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
];

interface ScheduleLocationProps {
  handleNext: () => void;
  handleBack: () => void;
}
const ScheduleLocation = (props: ScheduleLocationProps) => {
  const [currency, setCurrency] = React.useState("");
  // const { register, handleSubmit, setValue } = useForm();
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date("2014-08-18T21:11:54")
  );

  const validationSchema = yup.object().shape({});
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit, errors, watch, register, control } = methods;
  const watchType = watch("typeOfClass");
  const watchClassEnds = watch("classEnds");
  const onSubmit = (data: any) => {
    console.log(data, "ffff");
    props.handleNext();
  };
  console.log(watchType, "watch", watchClassEnds);
  return (
    <FormProvider {...methods}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='subtitle1'>
              Yay! You are 25% done. Let’s now add timing, location and
              instructors
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <FormLabel component='legend'>Select the type of class</FormLabel>
            <FormRadio name='typeOfClass' options={radioGroupOptions} />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='subtitle1'>
              If your classes cater to kids, writng the age range makes it
              easier for parents to find relevant classes
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <FormInput
              name='batchName'
              label='Batch Name'
              variant='outlined'
              color='secondary'
              placeholder='E.g. Afternoon Dance with Kate'
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant='subtitle1'>
              Batch name allows for easy identification of different time
              options for customers and team. You can change this later
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h2'>Date and time</Typography>
          </Grid>

          <Grid item xs={6}>
            <FormDatePicker name='startDate' label='Start Date' />
          </Grid>
          <Grid item xs={6}>
            <Controller
              as={
                <TextField
                  select
                  label='Class Repeat Pattern'
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
              name='classRepeatPattern'
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <FormTimePicker
              name='classStartTime'
              label='Class Start Time'
              required={true}
              errorobj={errors}
            />
          </Grid>

          <Grid item xs={6}>
            <FormTimePicker
              name='classEndTime'
              label='Class End Time'
              required={true}
              errorobj={errors}
            />
          </Grid>
          <Grid item xs={12}>
            <FormAutoComplete
              name='recurringDays'
              label='Days of recurring'
              required={true}
              options={top100Films}
              errorobj={errors}
            />
          </Grid>
          <Grid item xs={6}>
            <Controller
              as={
                <TextField
                  select
                  label='Repeat every'
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
              name='repeatEvery'
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            Select 1 if class schedule repeats every week, select 2 for
            fortnightly classes etc.
          </Grid>
          <Grid item xs={6}>
            <Controller
              as={
                <TextField
                  select
                  label='classEnds'
                  value={currency}
                  color='secondary'
                  inputRef={register}
                  fullWidth
                  variant='outlined'
                  defaultValue=''
                  placeholder='E.g. ‘Yoga for beginners’ or ‘Advanced Art’'
                >
                  {classEnds.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              }
              name='repeatEvery'
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            {watchClassEnds == "after" && (
              <TextField
                name={"occurences"}
                label='Occurences'
                variant='outlined'
                color='secondary'
                inputRef={register}
                fullWidth
                error={errors.classTitle}
                helperText={errors?.classTitle?.message || ""}
              />
            )}
          </Grid>
          <Grid item xs={6}>
            <Controller
              as={
                <TextField
                  select
                  label='Timezone'
                  value={currency}
                  color='secondary'
                  inputRef={register}
                  fullWidth
                  variant='outlined'
                  defaultValue=''
                  placeholder='E.g. ‘Yoga for beginners’ or ‘Advanced Art’'
                >
                  {classEnds.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              }
              name='repeatEvery'
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            You can edit your time zone in Settings . Customers see timing as
            per their location
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h2'>Location and instructor</Typography>
          </Grid>
          <Grid item xs={6}>
            <FormLabel component='legend'>Location for this class</FormLabel>
            <FormRadio name='location' options={locationOptions} />
          </Grid>
          <Grid item xs={6}>
            <FormLabel component='legend'>Instructor</FormLabel>
            <FormRadio name='instructors' options={instructorOptions} />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h2'>Price and Participants</Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              name={"noOfBookingSlots"}
              label='Number of booking Slots'
              variant='outlined'
              color='secondary'
              inputRef={register}
              fullWidth
              error={errors.classTitle}
              helperText={errors?.classTitle?.message || ""}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              name={"price"}
              label='Price of one class'
              variant='outlined'
              color='secondary'
              inputRef={register}
              fullWidth
              error={errors.classTitle}
              helperText={errors?.classTitle?.message || ""}
            />
          </Grid>

          <Grid item xs={3}>
            <Controller
              as={
                <TextField
                  select
                  label='Currency'
                  value={currency}
                  color='secondary'
                  inputRef={register}
                  fullWidth
                  variant='outlined'
                  defaultValue=''
                  placeholder=''
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              }
              name='repeatEvery'
              control={control}
            />
          </Grid>

          <Grid container xs={12} justify='flex-end'>
            <Button
              // disabled={activeStep === 0}
              onClick={props.handleBack}
              // className={classes.button}
            >
              Back
            </Button>
            <Button
              variant='contained'
              color='primary'
              onClick={handleSubmit(onSubmit)}
              type='submit'
              // className={classes.button}
            >
              {/* {activeStep === steps.length - 1
                  ? "Finish" */}
              Save and Continue
            </Button>
          </Grid>
          {/* <Grid item xs={3}>
            Assigning instructors to a class allows them to keep track of
            bookings. Customers will be asked to select a teacher if multiple
            teachers are selected for the same batch
          </Grid> */}
          {/* xxxxxxxxxxxxxxxx */}
        </Grid>
      </form>
    </FormProvider>
  );
};

export default ScheduleLocation;
