import React from "react";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Switch from "@material-ui/core/Switch";
import PublishIcon from "@material-ui/icons/Publish";
import Button from "@material-ui/core/Button";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import { useDropzone } from "react-dropzone";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Tooltip from "@material-ui/core/Tooltip";
import InfoIcon from "@material-ui/icons/Info";
import ClearIcon from "@material-ui/icons/Clear";

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const usePurpleSwitch = () => {
  return {
    root: {
      padding: 7,
    },
    thumb: {
      width: 24,
      height: 24,
      backgroundColor: "#fff",
      boxShadow:
        "0 0 12px 0 rgba(0,0,0,0.08), 0 0 8px 0 rgba(0,0,0,0.12), 0 0 4px 0 rgba(0,0,0,0.38)",
    },
    switchBase: {
      color: "rgba(0,0,0,0.38)",
      padding: 7,
    },
    track: {
      borderRadius: 20,
      backgroundColor: "#65B1EC",
    },
    checked: {
      "& $thumb": {
        backgroundColor: "#fff",
      },
      "& + $track": {
        opacity: "1 !important",
        backgroundColor: "#65B1EC",
      },
    },
    focusVisible: {},
  };
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
];

const currencies = [
  {
    value: "0",
    label: "No price",
  },
  {
    value: "1",
    label: "Fixed price",
  },
];
const age_of_students = [
  {
    value: "0",
    label: "Everyone",
  },
  {
    value: "1",
    label: "Adult",
  },
  {
    value: "2",
    label: "For children",
  },
];

const BasicInfo = ({ handleNext }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const useStyles2 = makeStyles(usePurpleSwitch());
  const purple = useStyles2();
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const [currency, setCurrency] = React.useState(0);
  const [isSelectorOpen, setisSelectorOpen] = React.useState(false);
  const [age_of_students_temp, setAgeOfStudents] = React.useState(0);
  const [new_category, setNewCategory] = React.useState("");
  const [category, setCategory] = React.useState([
    {
      value: "0",
      label: "Sports",
    },
    {
      value: "1",
      label: "Life Style",
    },
  ]);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  const handleChange2 = (event) => {
    const { value } = event.target;
    event.stopPropagation();
    setisSelectorOpen(false);
  };

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div>
      <p>
        We are super excited to find you adding a new activity to your list!
        Kindly fill the following details
      </p>

      <Grid style={{ width: "100%" }} container spacing={3}>
        <Grid item lg={6}>
          <label style={{ color: "#827575" }}>Class Title</label>
          <TextField
            variant="outlined"
            placeholder="Yoga for beginners"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item lg={6}>
          <label style={{ color: "#827575" }}>Category</label>
          <Select
            variant="outlined"
            placeholder="Category"
            size="normal"
            MenuProps={{
              anchorOrigin: {
                vertical: "bottom",
                horizontal: "left",
              },
              transformOrigin: {
                vertical: "top",
                horizontal: "left",
              },
              getContentAnchorEl: null,
            }}
            select
            style={{
              width: "100%",
              borderBottom: "none",
              border: "1px solid #ccc",
              boxShadow: "none",
              padding: 5,
              height: 38,
              paddingLeft: 20,
              borderRadius: 5,
            }}
            open={isSelectorOpen}
            onChange={handleChange2}
            input={
              <Input
                style={{ borderBottom: "none" }}
                variant="outlined"
                onClick={() => setisSelectorOpen(true)}
              />
            }
          >
            {category.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
            <div
              style={{
                display: "flex",
                width: "90%",
                marginLeft: 10,
                marginTop: 10,
              }}
            >
              <TextField
                value={new_category}
                onChange={(e) => setNewCategory(e.target.value)}
                fullWidth
                type="search"
                variant="outlined"
              ></TextField>
              <Button
                style={{
                  textTransform: "none",
                  fontSize: 16,
                  width: 300,
                  color: "#65B1EC",
                }}
                onClick={() => {
                  if (new_category) {
                    setCategory([
                      ...category,
                      ...[{ label: new_category, value: category.length }],
                    ]);
                    setNewCategory("");
                  }
                }}
              >
                <AddIcon style={{ fontSize: 24, color: "#65B1EC" }} /> Add new
                category
              </Button>
            </div>
            {/* <Button
              style={{
                textTransform: "none",
                fontSize: 16,
                width: 300,
                color: "red",
              }}
              onClick={() => setisSelectorOpen(false)}
            >
              <ClearIcon style={{ fontSize: 24, color: "red" }} /> close
            </Button> */}
            <MenuItem
              style={{ color: "#FF8021", marginTop: 10 }}
              key={""}
              value={""}
            >
              Close
            </MenuItem>
          </Select>
        </Grid>
        <Grid item lg={12}>
          <label style={{ color: "#827575" }}>
            Briefly describe this class
          </label>
          <TextField
            variant="outlined"
            placeholder="Shows on the class public page.Add class info/instructions."
            style={{ width: "100%" }}
            multiline
            rows={4}
          />
        </Grid>
        <Grid item lg={6}>
          <div style={{ display: "flex" }}>
            <label style={{ color: "#827575" }}>Total booking slots</label>
            <div>
              <Tooltip
                title="Total Booking Slots"
                aria-label="add"
                style={{ background: "#65B1EC" }}
              >
                <InfoIcon
                  style={{ color: "#65B1EC", fontSize: 20, marginLeft: 5 }}
                />
              </Tooltip>
            </div>
          </div>
          <TextField
            variant="outlined"
            placeholder="Total booking slots"
            style={{ width: "100%" }}
            type="number"
          />
        </Grid>
        <Grid item lg={6}></Grid>
        <Grid item lg={6}>
          <div style={{ display: "flex" }}>
            <label style={{ color: "#827575" }}>Price</label>
            <div>
              <Tooltip
                title="Price"
                aria-label="add"
                style={{ background: "#65B1EC" }}
              >
                <InfoIcon
                  style={{ color: "#65B1EC", fontSize: 20, marginLeft: 5 }}
                />
              </Tooltip>
            </div>
          </div>
          <TextField
            id="outlined-select-currency"
            select
            value={currency}
            size="small"
            onChange={handleChange}
            style={{ width: "100%" }}
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {currency == 1 ? (
            <div
              style={{ display: "flex", alignItems: "center", marginTop: 20 }}
            >
              <label style={{ fontSize: 20 }}>INR</label>
              <TextField
                variant="outlined"
                placeholder="Enter Fixed Price"
                type="number"
                style={{ width: "100%", marginLeft: 10 }}
              />
            </div>
          ) : (
            ""
          )}
        </Grid>
        <Grid item lg={6}></Grid>
        <Grid item lg={6}>
          <label style={{ color: "#827575" }}>Age of your student</label>
          <TextField
            id="outlined-select-currency"
            select
            size="small"
            style={{ width: "100%" }}
            variant="outlined"
            value={age_of_students_temp}
            onChange={(e) => setAgeOfStudents(e.target.value)}
          >
            {age_of_students.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {age_of_students_temp == 2 ? (
            <div>
              <div style={{ marginTop: 20, display: "flex" }}>
                <div>
                  <label style={{ color: "#827575" }}>Min age</label>
                  <TextField
                    variant="outlined"
                    placeholder="Min Age"
                    style={{ width: "100%" }}
                  />
                </div>
                <div style={{ marginLeft: 20 }}>
                  <label style={{ color: "#827575" }}>Max Age</label>
                  <TextField
                    variant="outlined"
                    placeholder="Max Age"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <FormControlLabel
                control={<Checkbox name="gilad" />}
                label="Request Adult Presence"
              />
            </div>
          ) : (
            ""
          )}
        </Grid>
        <Grid item lg={6}></Grid>
        <Grid item lg={6}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <FormControlLabel
                control={
                  <Switch
                    //   checked={state.gilad}
                    //   onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                  />
                }
                label="Enable Online Bookings"
              />
            </div>
            <div>
              <Tooltip
                title="with online online booking customers can book the class directly on their own"
                aria-label="add"
                style={{ background: "#65B1EC" }}
              >
                <InfoIcon style={{ color: "#65B1EC" }} />
              </Tooltip>
            </div>
          </div>
          <p>Add class image</p>
          <section
            style={{
              width: 200,
              borderRadius: 5,
              textAlign: "center",

              height: 40,
              background: "#65B1EC",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100%",
              }}
              {...getRootProps({ className: "dropzone" })}
            >
              <input {...getInputProps()} />
              <PublishIcon style={{ color: "#fff" }} />
              <span style={{ color: "#fff" }}>Upload Image</span>
            </div>
            <aside>
              <ul>{files}</ul>
            </aside>
          </section>
        </Grid>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="success">Batch Successfully Created!</Alert>
      </Snackbar>

      <div style={{ width: 200, marginLeft: "auto" }}>
        <Button
          onClick={() => handleClick()}
          variant="contained"
          style={{ background: "#FF8021", color: "#fff", width: "100%" }}
        >
          Save and Continue
        </Button>
      </div>
      <div>
        <p
          style={{
            border: "1px solid #FF8021",
            width: "70%",
            borderRadius: 5,
            padding: 5,
            fontSize: "0.9rem",
            paddingLeft: 30,
          }}
        >
          <a style={{ textDecoration: "none", color: "#FF8021" }} href="#">
            Learn more{" "}
          </a>
          about setting up your class schedule in the Claroo Knowledge Base.
        </p>
      </div>
    </div>
  );
};
export default BasicInfo;
