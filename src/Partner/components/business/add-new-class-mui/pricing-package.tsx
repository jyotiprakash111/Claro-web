import "date-fns";
import {
  Button,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
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

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
];

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

interface PricingPackageProps {
  handleNext: () => void;
  handleBack : () => void
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const PricingPackage = (props: PricingPackageProps) => {
  const [currency, setCurrency] = React.useState("");
  // const { register, handleSubmit, setValue } = useForm();
  const classes = useStyles();

  const validationSchema = yup.object().shape({});
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  const { handleSubmit, errors } = methods;

  const onSubmit = (data: any) => {
    console.log(data, "ffff");
    props.handleNext();
  };

  return (
    <div>
      <Typography variant='subtitle1'>
        50% completed arlready! Let’s get started with adding prices for the
        scheduled classes
      </Typography>
      <Typography variant='h2'>Schedule</Typography>

      <TableContainer>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align='right'>Calories</TableCell>
              <TableCell align='right'>Fat&nbsp;(g)</TableCell>
              <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
              <TableCell align='right'>Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
                <TableCell align='right'>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <FormProvider {...methods}>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant='h2'>Pricing</Typography>
            </Grid>
            <Grid item xs={6}>
              <FormLabel component='legend'>Price for one class</FormLabel>
              <FormSelect
                name='currency'
                label='Currencies'
                options={currencies}
                required={true}
                errorobj={errors}
              />
              <FormInput
                name='price'
                label='Price'
                variant='outlined'
                color='secondary'
                placeholder='E.g. Afternoon Dance with Kate'
              />
            </Grid>
            <Grid item xs={6}>
              We have picked up regular class price you entered earlier for a
              drop-in customer.
            </Grid>
          </Grid>
        </form>
        <div>
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
        </div>
      </FormProvider>
    </div>
  );
};

export default PricingPackage;
