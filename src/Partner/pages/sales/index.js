import React from "react";
import DateRangeIcon from "@material-ui/icons/DateRange";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";

import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Table from "../../components/Sales/Table";
// import Table from "@material-ui/core/Table";
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

export default function Sales() {
  const validationSchema = yup.object().shape({});
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <FormProvider {...methods}>
      <div>
        <SideBar />
        <div style={{ marginLeft: 300 }}>
          <Header name='Sales' avatar={true} />
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
                {/* <div>
              <DateRangeIcon style={{ color: "#FF8021", fontSize: 30 }} />
            </div>
            <p
              style={{
                margin: 0,
                padding: 0,
                marginTop: -10,
                fontSize: 18,
                marginLeft: 10,
              }}
            >
              {" "}
              7 Feb 2021
            </p> */}
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
            </div>
          </div>
          <div style={{ marginRight: 100, marginTop: 30 }}>
            <Table />
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
        </div>
      </div>
    </FormProvider>
  );
}
