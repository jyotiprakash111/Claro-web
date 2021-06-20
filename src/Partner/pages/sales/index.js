import React from "react";
import DateRangeIcon from "@material-ui/icons/DateRange";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Table from "../../components/Sales/Table";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import MoreVertIcon from "@material-ui/icons/MoreVert";
// import Menu from "./Menu";

import "./style.css";
import FormDatePicker from "../../components/controls/FormDatePicker";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

import { Controller, FormProvider, useForm } from "react-hook-form";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  table: {
    minWidth: 650,
  },
}));
const currencies = [
  {
    value: "Bhubaneswar",
    label: "$",
  },
  {
    value: "Cuttack",
    label: "€",
  },
  {
    value: "Jadev Vihar",
    label: "฿",
  },
  {
    value: "Forest Park",
    label: "¥",
  },
];

const Sales = () => {
  const validationSchema = yup.object().shape({});
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  function createData(name, calories, fat, carbs, protein, amount) {
    return { name, calories, fat, carbs, protein, amount };
  }

  const rows = [
    createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
    createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
    createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
    createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
    createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
  ];

  const [age, setAge] = React.useState("");

  const classes = useStyles();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginRight: 100,
          }}
        >
          <div>
            <p>Starting From</p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <FormDatePicker
                name='startTime'
                placeholder='DD/MM/YYYY'
                required={true}
              />
            </div>
          </div>
          <div>
            <TextField
              id='outlined-select-currency'
              select
              label='All location'
              variant='outlined'
              size='small'
              style={{ width: 163, height: 44 }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <Button
              variant='outlined'
              style={{
                color: "#FF8021",
                borderColor: "#FF8021",
                width: 144,
                height: 40,
                marginLeft: 20,
              }}
            >
              New sales
            </Button>
            {/* </FormControl> */}
          </div>
        </div>
        <div style={{ marginRight: 100, marginTop: 30 }}>
          {/* <Table /> */}
          <TableContainer id='sales' component={Paper}>
            <Table className={classes.table} aria-label='simple table'>
              <TableHead style={{ background: "#F8F8F8" }}>
                <TableRow>
                  <TableCell>Invoice no</TableCell>
                  <TableCell>Transaction date</TableCell>
                  <TableCell>Customer name</TableCell>
                  <TableCell>Method</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.calories}</TableCell>
                    <TableCell>{row.fat}</TableCell>
                    <TableCell>{row.carbs}</TableCell>
                    <TableCell>{row.protein}</TableCell>
                    <TableCell>
                      <div
                        style={{
                          alignItems: "center",
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        {row.amount}
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            style={{
              textTransform: "unset",
              color: "#FF8021",
              marginTop: 10,
              marginLeft: -5,
            }}
          >
            Show More <ExpandMoreIcon />
          </Button>
        </div>
      </FormProvider>
    </div>
  );
};
export default Sales;
