import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import RemoveIcon from "@material-ui/icons/Remove";
import {
  TextField,
  Input,
  Checkbox,
  FormControlLabel,
  FormControl,
  ListSubheader,
} from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import MenuItem from "@material-ui/core/MenuItem";
import AddIcon from "@material-ui/icons/Add";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import "../style.css";

function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== "undefined"
    ? isoCode
        .toUpperCase()
        .replace(/./g, (char) =>
          String.fromCodePoint(char.charCodeAt(0) + 127397)
        )
    : isoCode;
}

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const currencies = [
  {
    value: "1",
    label: "WEEKLY starting jul 05,2021 | Mon 07:00 PM | Fri 07:00PM",
  },
  {
    value: "2",
    label: "WEEKLY starting jul 05,2021 | Mon 07:00 PM | Fri 07:00PM",
  },
  {
    value: "3",
    label: "WEEKLY starting jul 05,2021 | Mon 01:00 PM",
  },
];
const plan = [
  {
    value: "1",
    label: "Plan 1",
  },
  {
    value: "2",
    label: "Plan 2",
  },
];
const payment_method = [
  {
    value: "1",
    label: "Bank Transfer",
  },
  {
    value: "2",
    label: "Online",
  },
];
const payment_status = [
  {
    value: "1",
    label: "On Hold",
  },
  {
    value: "2",
    label: "On Hold",
  },
  {
    value: "3",
    label: "Completed",
  },
];

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

export default function CustomizedDialogs(props) {
  const classes = useStyles();
  const [arr, setArr] = React.useState([]);
  const [name, setName] = React.useState();
  const [age, setAge] = React.useState();
  const [temp, setTemp] = React.useState(true);
  const [temp_class, setClass] = React.useState();
  const [temp_check, setCheck] = React.useState(true);
  return (
    <div id="schedules">
      <Dialog
        onClose={() => props.handleClose()}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => props.handleClose()}
        >
          New booking
        </DialogTitle>
        <DialogContent style={{ width: 500 }} dividers>
          <Button
            style={{ background: "#efefef", width: 150, textTransform: "none" }}
            variant="outlined"
          >
            Class
          </Button>
          <div style={{ marginTop: 10 }}>
            <label style={{ color: "#323232" }}>Booking for</label> <br />
            <FormControlLabel
              control={<Checkbox name="gilad" />}
              label="Myself"
            />
            <FormControlLabel
              control={
                <Checkbox name="gilad" onChange={() => setCheck(!temp_check)} />
              }
              label="Other Member"
            />
          </div>

          {arr.map((item) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <FormControlLabel control={<Checkbox name="gilad" />} />
                <TextField
                  size="small"
                  style={{ width: 200 }}
                  placeholder="Name"
                  variant="outlined"
                  value={item.name}
                />
                <TextField
                  size="small"
                  style={{ width: 100, marginLeft: 10 }}
                  variant="outlined"
                  placeholder="Age"
                  value={item.age}
                />
                <IconButton
                  onClick={() =>
                    setArr(arr.filter((item2) => item.name !== item2.name))
                  }
                >
                  <RemoveIcon
                    style={{ border: "1px solid #707070", borderRadius: "50%" }}
                  />
                </IconButton>
              </div>
            );
          })}

          {temp ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <FormControlLabel
                control={
                  <Checkbox
                    name="gilad"
                    // value={temp_check}
                    // onChange={() => setCheck(!temp_check)}
                  />
                }
              />
              <TextField
                size="small"
                style={{ width: 200 }}
                placeholder="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                size="small"
                style={{ width: 100, marginLeft: 10 }}
                variant="outlined"
                placeholder="Age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <IconButton onClick={() => setTemp(false)}>
                <RemoveIcon
                  style={{ border: "1px solid #707070", borderRadius: "50%" }}
                />
              </IconButton>
            </div>
          ) : (
            ""
          )}

          <Button
            variant="outlined"
            style={{
              textTransform: "none",
              marginTop: 10,
              borderColor: "#65B1EC",
              color: "#65B1EC",
              height: 30,
            }}
            onClick={() => {
              if (temp) {
                setArr([...arr, ...[{ name, age }]]);
                setName("");
                setAge("");
              } else {
                setTemp(true);
              }
            }}
          >
            + Add another participant
          </Button>

          <div style={{ marginTop: 10 }}>
            {!temp_check ? (
              <div>
                <label style={{ color: "#323232", fontSize: "1rem" }}>
                  Customer
                </label>
                <div
                  style={{
                    marginTop: 5,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Autocomplete
                    id="country-select-demo"
                    style={{ width: 350 }}
                    options={countries}
                    classes={{
                      option: classes.option,
                    }}
                    autoHighlight
                    getOptionLabel={(option) => option.label}
                    renderOption={(option) => (
                      <React.Fragment>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar
                              alt={option.label}
                              src="/static/images/avatar/1.jpg"
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={option.label}
                            secondary={
                              <React.Fragment>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  style={{ color: "#ccc" }}
                                  className={classes.inline}
                                  color="textPrimary"
                                >
                                  {option.phone}
                                </Typography>
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                      </React.Fragment>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        autoComplete={false}
                        placeholder="Search customer"
                        variant="outlined"
                        style={{ width: 350 }}
                        inputProps={{
                          ...params.inputProps,
                          autoComplete: "new-password", // disable autocomplete and autofill
                        }}
                      />
                    )}
                  />
                  {/* <IconButton
                style={{ background: "#65B1EC", padding: 10, marginLeft: 10 }}
              >
                <AddIcon style={{ color: "#fff" }} />
              </IconButton> */}
                </div>
              </div>
            ) : (
              ""
            )}

            <div style={{ marginTop: 10 }}>
              <label style={{ color: "#323232", fontSize: "1rem" }}>
                Class
              </label>
              <div
                style={{
                  marginTop: 5,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Autocomplete
                  id="country-select-demo"
                  style={{ width: 400 }}
                  options={classes_list}
                  classes={{
                    option: classes.option,
                  }}
                  autoHighlight
                  getOptionLabel={(option) => option.title}
                  renderOption={(item) => (
                    <React.Fragment>
                      <MenuItem
                        style={{
                          borderLeft: `3px solid ${item.color}`,
                        }}
                        value={item.value}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: 400,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              width: 160,
                            }}
                          >
                            <h4
                              style={{
                                margin: 0,
                                padding: 0,
                                fontSize: 14,
                              }}
                            >
                              {item.title}
                            </h4>
                            <p style={{ margin: 0, padding: 0 }}>
                              {item.secondary}
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <h4 style={{ margin: 0, padding: 0 }}>
                              {item.tag}
                            </h4>
                            <p style={{ margin: 0, padding: 0 }}>
                              {item.crossTag}
                            </p>
                          </div>
                        </div>
                      </MenuItem>

                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  )}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      autoComplete={false}
                      placeholder="Select Class"
                      variant="outlined"
                      style={{ width: 350 }}
                      inputProps={{
                        ...params.inputProps,
                        autoComplete: "new-password", // disable autocomplete and autofill
                      }}
                    />
                  )}
                />
                {/* <IconButton
                style={{ background: "#65B1EC", padding: 10, marginLeft: 10 }}
              >
                <AddIcon style={{ color: "#fff" }} />
              </IconButton> */}
              </div>
            </div>

            {/* <FormControl style={{ marginTop: 10 }}>
              <label style={{ color: "#323232", fontSize: "1rem" }}>
                Class
              </label>

              <TextField
                id="outlined-select-currency"
                select
                label="Select Class"
                style={{ width: 350, marginTop: 10 }}
                value={temp_class}
                onChange={(e) => setClass(e.target.value)}
                variant="outlined"
              >
                {classes_list.map((item) => {
                  return (
                    <div style={{}}>
                      <ListSubheader
                        style={{
                          fontSize: 16,
                          fontWeight: "bold",
                          color: "#323232",
                        }}
                      >
                        {item.category}
                      </ListSubheader>

                      <MenuItem
                        style={{
                          borderLeft: `3px solid ${item.color}`,
                          marginLeft: 10,
                        }}
                        value={item.value}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: 350,
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <h4
                              style={{
                                margin: 0,
                                padding: 0,
                                fontSize: 14,
                              }}
                            >
                              {item.title}
                            </h4>
                            <p style={{ margin: 0, padding: 0 }}>
                              {item.secondary}
                            </p>
                          </div>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <h4 style={{ margin: 0, padding: 0 }}>
                              {item.tag}
                            </h4>
                            <p style={{ margin: 0, padding: 0 }}>
                              {item.crossTag}
                            </p>
                          </div>
                        </div>
                      </MenuItem>
                    </div>
                  );
                })}
              </TextField>
            </FormControl> */}

            <FormControl style={{ marginTop: 10 }}>
              <label style={{ color: "#323232", fontSize: "1rem" }}>
                Select schedule
              </label>
              <TextField
                id="outlined-select-currency"
                select
                label="Select batch"
                style={{ width: 350, marginTop: 10 }}
                // value={currency}
                // onChange={handleChange}

                variant="outlined"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl style={{ marginTop: 10 }}>
              <label style={{ color: "#323232", fontSize: "1rem" }}>
                Select plan
              </label>
              <TextField
                id="outlined-select-currency"
                select
                label="Select payment plan"
                style={{ width: 350, marginTop: 10 }}
                // value={currency}
                // onChange={handleChange}

                variant="outlined"
              >
                {plan.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl style={{ marginTop: 10 }}>
              <label style={{ color: "#323232", fontSize: "1rem" }}>
                Payment method
              </label>
              <TextField
                id="outlined-select-currency"
                select
                label="Select payment method"
                style={{ width: 350, marginTop: 10 }}
                // value={currency}
                // onChange={handleChange}

                variant="outlined"
              >
                {payment_method.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl style={{ marginTop: 10 }}>
              <label style={{ color: "#323232", fontSize: "1rem" }}>
                Payment status
              </label>
              <TextField
                id="outlined-select-currency"
                select
                label="Select payment plan"
                style={{ width: 350, marginTop: 10 }}
                // value={currency}
                // onChange={handleChange}

                variant="outlined"
              >
                {payment_status.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </FormControl>
            <FormControl style={{ marginTop: 10 }}>
              <label style={{ color: "#323232", fontSize: "1rem" }}>
                Booking notes
              </label>
              <TextField
                id="outlined-select-currency"
                placeholder="Add a booking note (internally visible to staff only)"
                style={{ width: 350, marginTop: 10, height: 50 }}
                multiline
                rows="2"
                // value={currency}
                // onChange={handleChange}

                variant="outlined"
              />
            </FormControl>
          </div>

          <Divider style={{ marginTop: 40 }} />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: 20 }}>Total</p>
            <p style={{ fontSize: 20 }}>$60</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <Button
              style={{
                background: "#FF8021",
                textTransform: "none",
                color: "#fff",
                width: 100,
              }}
              variant="contained"
            >
              Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const classes_list = [
  {
    category: "Facial",
    color: "#d9a7c7",
    title: "Face",
    value: 1,
    secondary: "Special discount,1h",
    tag: "SGD 80",
    crossTag: "5GD 100",
  },
  {
    category: "Hair",
    color: "#22c1c3",
    title: "Blow Dry",
    secondary: "1h 30min",
    tag: "SGD 25",
    value: 2,
  },
  {
    category: "Hair",
    color: "#22c1c3",
    title: "Face",
    secondary: "1h 30min",
    tag: "SGD 25",
    value: 3,
  },
];

const countries = [
  { code: "AD", label: "Jane Doe", phone: "jane@example.com" },
  { code: "AE", label: "John Doe", phone: "john@example.com" },
  { code: "AF", label: "Demo Name", phone: "ab@abc.com" },
];
