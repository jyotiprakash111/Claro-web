import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Cancel";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { ListItem } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./style.css";
import { TextField } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Switch from "@material-ui/core/Switch";
import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import InputAdornment from "@material-ui/core/InputAdornment";
import Divider from "@material-ui/core/Divider";
import "./style.css";
import InfoIcon from "@material-ui/icons/Info";
import { Tooltip } from "@material-ui/core";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(4),
    paddingBottom: 0,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const list = [
  {
    heading: "Trial Class",
    caption:
      "Offer trial class for first time customers for a discounted price than price/session",
  },
  {
    heading: "Drop-in",
    caption: "Offer trial class for first time customers for a specific price",
  },
  {
    heading: "One-time fee(Full course)",
    caption: "Setup one-time payment for all the scheduled classes",
  },
  {
    heading: "Monthly/Weekly Fee",
    caption: "Setup monthly/weekly payments on a recurring basis",
  },
  {
    heading: "Custom Plan",
    caption: "Create your own custom pricing plan. Eg. 10 class package",
  },
];

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
];

const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "#65B1EC",
    color: "#fff",
    boxShadow: theme.shadows[1],
    fontSize: 15,
  },
}))(Tooltip);

const batches = [
  {
    value: "0",
    label: "Apply to all batches for this class",
  },
  // {
  //   value: "1",
  //   label: "Apply to selected batches only",
  // },
];
const payment_interval = [
  {
    value: "0",
    label: "Montly",
  },
  {
    value: "1",
    label: "Weekly",
  },
];

const renderHeight = (temp) => {
  if (temp == 1) {
    return "530px";
  }
  if (temp == 3) {
    return "270px";
  }
  if (temp == 0) {
    return "600px";
  }
  if (temp == 2) {
    return "450px";
  }
};

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h5">{children}</Typography>
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

export default function FormDialog(props) {
  const [paymentType, changePaymentType] = React.useState(0);
  const [pricingType, changePricingType] = React.useState(-1);
  const [count, setCount] = React.useState(0);
  console.log(props.temp, paymentType);

  function renderPayment(temp) {
    // const [count, setCount] = React.useState(0);
    console.log(temp);

    if (temp == 0) {
      return (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%" }}>
              <label style={{ marginTop: 20 }}>Price</label>
              <div style={{ position: "relative" }}>
                <input
                  type="number"
                  style={{ height: 50, padding: 10, paddingLeft: 50 }}
                  placeholder="Enter Price"
                  name="account_no"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                />
                <label
                  style={{
                    position: "absolute",
                    left: 10,
                    top: 15,
                    fontSize: 16,
                  }}
                >
                  INR
                </label>
              </div>
            </div>
            <div style={{ width: "48%" }}>
              <label style={{ marginTop: 20 }}>Price name(optional)</label>
              <input
                type="text"
                style={{ height: 50, padding: 10 }}
                placeholder="E.g. Yoga for beninners's or 'Advanced Art"
                id="mail"
                name="account_no"
              />
            </div>
          </div>

          <label style={{ marginTop: 20 }}>Description (optional)</label>
          <textarea
            type="text"
            style={{ padding: 10, borderRadius: 5 }}
            rows="5"
            placeholder="Short description about any terms and conditions visible to customer upon selecting this pricing plan"
            id="mail"
            name="account_no"
          />

          <label style={{ marginTop: 20 }}>
            Select the batches to apply price plan
          </label>

          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            style={{
              width: "100%",
              height: 50,
              borderRadius: 5,
              border: "1px solid #ccc",
            }}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            variant="outlined"
            label="Age"
          >
            {batches.map((item) => {
              return <MenuItem value={item.value}>{item.label}</MenuItem>;
            })}
          </Select>
          {count == "1" ? (
            <div>
              <label style={{ marginTop: 20 }}>Select the batches</label>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    style={{
                      width: "100%",
                      borderRadius: 5,
                      padding: 0,
                      height: 50,
                      border: "1px solid #ccc",
                    }}
                    {...params}
                    type="search"
                    variant="outlined"
                    placeholder="Favorites"
                  />
                )}
              />
            </div>
          ) : (
            ""
          )}

          <div style={{ textAlign: "right" }}>
            <Button
              style={{
                background: "#FF8021",
                color: "#fff",
                textTransform: "none",
                borderRadius: 20,
                width: 150,
                textAlign: "right",
                marginTop: 20,
              }}
              onClick={() => changePricingType(-1)}
              variant="contained"
            >
              Confirm and Add
            </Button>
          </div>
        </div>
      );
    }

    if (temp == 1) {
      return (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%" }}>
              <label style={{ marginTop: 20 }}>Price name(optional)</label>
              <input
                type="text"
                style={{ height: 50, padding: 10 }}
                placeholder="INR Enter Price"
                id="mail"
                name="account_no"
              />
            </div>
            <div style={{ width: "48%" }}>
              <label style={{ marginTop: 20 }}>Price per session</label>
              <input
                type="text"
                style={{ height: 50, padding: 10 }}
                placeholder="E.g. Yoga for beninners's or 'Advanced Art"
                id="mail"
                name="account_no"
              />
            </div>
          </div>

          <label style={{ marginTop: 20 }}>Description (optional)</label>
          <textarea
            type="text"
            style={{ padding: 10, borderRadius: 5 }}
            rows="5"
            placeholder="Short description about any terms and conditions visible to customer upon selecting this pricing plan"
            id="mail"
            name="account_no"
          />

          <label style={{ marginTop: 20 }}>
            Select the batches to apply price plan
          </label>

          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            style={{
              width: "100%",
              height: 50,
              borderRadius: 5,
              border: "1px solid #ccc",
            }}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            variant="outlined"
            label="Age"
          >
            {batches.map((item) => {
              return <MenuItem value={item.value}>{item.label}</MenuItem>;
            })}
          </Select>
          {count == "1" ? (
            <div>
              <label style={{ marginTop: 20 }}>Select the batches</label>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    style={{
                      width: "100%",
                      borderRadius: 5,
                      padding: 0,
                      height: 50,
                      border: "1px solid #ccc",
                    }}
                    {...params}
                    type="search"
                    variant="outlined"
                    placeholder="Favorites"
                  />
                )}
              />
            </div>
          ) : (
            ""
          )}

          <div style={{ textAlign: "right" }}>
            <Button
              style={{
                background: "#FF8021",
                color: "#fff",
                textTransform: "none",
                borderRadius: 20,
                width: 150,
                textAlign: "right",
                marginTop: 20,
              }}
              onClick={() => changePricingType(-1)}
              variant="contained"
            >
              Confirm and Add
            </Button>
          </div>
        </div>
      );
    }
    if (temp == 2) {
      return (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%" }}>
              <label style={{ marginTop: 20 }}>Price</label>
              <input
                type="text"
                style={{ height: 50, padding: 10 }}
                placeholder="INR Enter Price"
                id="mail"
                name="account_no"
              />
            </div>
            <div style={{ width: "48%" }}>
              <label style={{ marginTop: 20 }}>Price name(optional)</label>
              <input
                type="text"
                style={{ height: 50, padding: 10 }}
                placeholder="E.g. Yoga for beninners's or 'Advanced Art"
                id="mail"
                name="account_no"
              />
            </div>
          </div>

          <label style={{ marginTop: 20 }}>Description (optional)</label>
          <textarea
            type="text"
            style={{ padding: 10, borderRadius: 5 }}
            rows="5"
            placeholder="Short description about any terms and conditions visible to customer upon selecting this pricing plan"
            id="mail"
            name="account_no"
          />
          <div>
            <div style={{ display: "flex" }}>
              <FormControlLabel
                control={
                  <Switch
                    //   checked={state.gilad}
                    //   onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Proration on"
              />
              <LightTooltip
                title="Proration allows customer to pay only the remaining classes from the time they sign up for the course"
                aria-label="add"
                placement="right-end"
                style={{ background: "#65B1EC" }}
              >
                <InfoIcon style={{ color: "#65B1EC", fontSize: 20 }} />
              </LightTooltip>
            </div>
            <div style={{ display: "flex" }}>
              <FormControlLabel
                control={
                  <Switch
                    //   checked={state.gilad}
                    //   onChange={handleChange}
                    color="primary"
                    name="checkedB"
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label="Allow day selection"
              />
              <LightTooltip
                title="If on customer can select classes scheduled on specific days of the week.E.g Mon and Wed from MWF"
                aria-label="add"
                placement="right-end"
                style={{ background: "#65B1EC" }}
              >
                <InfoIcon style={{ color: "#65B1EC", fontSize: 20 }} />
              </LightTooltip>
            </div>
          </div>
          <label style={{ marginTop: 20 }}>
            Select the batches to apply price plan
          </label>

          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            style={{
              width: "100%",
              height: 50,
              borderRadius: 5,
              border: "1px solid #ccc",
            }}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            variant="outlined"
            label="Age"
          >
            {batches.map((item) => {
              return <MenuItem value={item.value}>{item.label}</MenuItem>;
            })}
          </Select>
          {count == "1" ? (
            <div>
              <label style={{ marginTop: 20 }}>Select the batches</label>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    style={{
                      width: "100%",
                      borderRadius: 5,
                      padding: 0,
                      height: 50,
                      border: "1px solid #ccc",
                    }}
                    {...params}
                    type="search"
                    variant="outlined"
                    placeholder="Favorites"
                  />
                )}
              />
            </div>
          ) : (
            ""
          )}

          <div style={{ textAlign: "right" }}>
            <Button
              style={{
                background: "#FF8021",
                color: "#fff",
                textTransform: "none",
                borderRadius: 20,
                width: 150,
                textAlign: "right",
                marginTop: 20,
              }}
              onClick={() => changePricingType(-1)}
              variant="contained"
            >
              Confirm and Add
            </Button>
          </div>
        </div>
      );
    }
    if (temp == 3) {
      return (
        <div>
          <div style={{ display: "flex", marginTop: 20 }}>
            <label style={{ color: "#827575" }}>Payment Interval</label>
            <div>
              <LightTooltip
                title="Weekly payment can start from monday and monthly payment start from start 1st of every month"
                aria-label="add"
                placement="right-end"
                style={{ background: "#65B1EC" }}
              >
                <InfoIcon
                  style={{ color: "#65B1EC", fontSize: 20, marginLeft: 5 }}
                />
              </LightTooltip>
            </div>
          </div>

          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            style={{
              width: "48%",
              height: 50,
              borderRadius: 5,
              border: "1px solid #ccc",
            }}
            value={paymentType}
            onChange={(e) => changePaymentType(e.target.value)}
            variant="outlined"
            label="Age"
          >
            {payment_interval.map((item) => {
              return <MenuItem value={item.value}>{item.label}</MenuItem>;
            })}
          </Select>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%" }}>
              <label style={{ marginTop: 20 }}>Installment fee</label>
              <input
                type="text"
                style={{ height: 50, padding: 10 }}
                placeholder="INR Enter Price"
                id="mail"
                name="account_no"
              />
            </div>
            <div style={{ width: "48%" }}>
              <div style={{ display: "flex", marginTop: 20 }}>
                <label style={{ color: "#827575" }}>
                  Deposit amount (optional)
                </label>
                <div>
                  <LightTooltip
                    title="Amount collected with first payment.Usually used as security to safeguard future payments"
                    aria-label="add"
                    placement="right-end"
                    style={{ background: "#65B1EC" }}
                  >
                    <InfoIcon
                      style={{ color: "#65B1EC", fontSize: 20, marginLeft: 5 }}
                    />
                  </LightTooltip>
                </div>
              </div>

              <input
                type="text"
                style={{ height: 50, padding: 10 }}
                placeholder="E.g. Yoga for beninners's or 'Advanced Art"
                id="mail"
                name="account_no"
              />
            </div>
          </div>
          <label style={{ marginTop: 20 }}>Price name(optional)</label>
          <input
            type="text"
            style={{ height: 50, padding: 10 }}
            placeholder="E.g. Yoga for beninners's or 'Advanced Art"
            id="mail"
            name="account_no"
          />
          <label style={{ marginTop: 20 }}>Description (optional)</label>
          <textarea
            type="text"
            style={{ padding: 10, borderRadius: 5 }}
            rows="5"
            placeholder="Short description about any terms and conditions visible to customer upon selecting this pricing plan"
            id="mail"
            name="account_no"
          />
          {paymentType == "0" ? (
            <div>
              <div style={{ display: "flex" }}>
                <FormControlLabel
                  control={
                    <Switch
                      //   checked={state.gilad}
                      //   onChange={handleChange}
                      color="primary"
                      name="checkedB"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label="Proration on"
                />
                <LightTooltip
                  title="Proration allows customer to pay only the remaining classes from the time they sign up for the course"
                  aria-label="add"
                  placement="right-end"
                  style={{ background: "#65B1EC" }}
                >
                  <InfoIcon
                    style={{
                      color: "#65B1EC",
                      fontSize: 20,
                      marginTop: 5,
                      marginLeft: -10,
                    }}
                  />
                </LightTooltip>
              </div>
              <div style={{ display: "flex" }}>
                <FormControlLabel
                  control={
                    <Switch
                      //   checked={state.gilad}
                      //   onChange={handleChange}
                      color="primary"
                      name="checkedB"
                      inputProps={{ "aria-label": "primary checkbox" }}
                    />
                  }
                  label="Allow day selection"
                />
                <LightTooltip
                  title="If on customer can select classes scheduled on specific days of the week.E.g Mon and Wed from MWF"
                  aria-label="add"
                  placement="right-end"
                  style={{ background: "#65B1EC" }}
                >
                  <InfoIcon
                    style={{
                      color: "#65B1EC",
                      fontSize: 20,
                      marginTop: 5,
                      marginLeft: -10,
                    }}
                  />
                </LightTooltip>
              </div>
            </div>
          ) : (
            ""
          )}

          <div style={{ textAlign: "right" }}>
            <Button
              style={{
                background: "#FF8021",
                color: "#fff",
                textTransform: "none",
                borderRadius: 20,
                width: 150,
                textAlign: "right",
                marginTop: 20,
              }}
              onClick={() => changePricingType(-1)}
              variant="contained"
            >
              Confirm and Add
            </Button>
          </div>
        </div>
      );
    }
    if (temp == 4) {
      return (
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ width: "48%" }}>
              <label style={{ marginTop: 20 }}>Pricing name(required)</label>
              <input
                type="text"
                style={{ height: 50, padding: 10 }}
                placeholder=""
                id="mail"
                name="account_no"
              />
            </div>
            <div style={{ width: "48%" }}>
              <label style={{ marginTop: 20 }}>Installment fee</label>
              <input
                type="text"
                style={{ height: 50, padding: 10 }}
                placeholder="INR Enter Price"
                id="mail"
                name="account_no"
              />
            </div>
          </div>

          <label style={{ marginTop: 20 }}>Description (optional)</label>
          <textarea
            type="text"
            style={{ padding: 10, borderRadius: 5 }}
            rows="5"
            placeholder="Short description about any terms and conditions visible to customer upon selecting this pricing plan"
            id="mail"
            name="account_no"
          />

          <label style={{ marginTop: 20 }}>
            Select the batches to apply price plan
          </label>

          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            style={{
              width: "100%",
              height: 50,
              borderRadius: 5,
              border: "1px solid #ccc",
            }}
            value={count}
            onChange={(e) => setCount(e.target.value)}
            variant="outlined"
            label="Age"
          >
            {batches.map((item) => {
              return <MenuItem value={item.value}>{item.label}</MenuItem>;
            })}
          </Select>
          {count == "1" ? (
            <div>
              <label style={{ marginTop: 20 }}>Select the batches</label>
              <Autocomplete
                multiple
                id="checkboxes-tags-demo"
                options={top100Films}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    style={{
                      width: "100%",
                      borderRadius: 5,
                      padding: 0,
                      height: 50,
                      border: "1px solid #ccc",
                    }}
                    {...params}
                    type="search"
                    variant="outlined"
                    placeholder="Favorites"
                  />
                )}
              />
            </div>
          ) : (
            ""
          )}

          <div style={{ textAlign: "right" }}>
            <Button
              style={{
                background: "#FF8021",
                color: "#fff",
                textTransform: "none",
                borderRadius: 20,
                width: 150,
                textAlign: "right",
                marginTop: 20,
              }}
              onClick={() => changePricingType(-1)}
              variant="contained"
            >
              Confirm and Add
            </Button>
          </div>
        </div>
      );
    }
  }

  function renderTitle(temp) {
    if (temp == 0) {
      return "Add trial class plan";
    }
    if (temp == 1) {
      return "Add drop in plan";
    }
    if (temp == 2) {
      return "One time fee";
    }
    if (temp == 3) {
      return "Monthly / Weekly payment";
    }
    if (temp == 4) {
      return "Custom fee";
    }
    return "Create plan price";
  }

  return (
    <div>
      <Dialog
        fullScreen
        style={{
          //   maxHeight: renderHeight(paymentType),
          width: 800,
          margin: "0px auto",
        }}
        open={props.open}
        onClose={() => {
          changePricingType(-1);
          props.handleClose();
        }}
      >
        <div style={{ padding: 20, height: 500, width: 750 }}>
          <div className="batch_schedule_schedule_more_event_dialog_div">
            <h1>{renderTitle(props.temp ? props.temp : pricingType)}</h1>
            <IconButton onClick={() => props.handleClose()}>
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          <form id="pricing_plan" style={{}}>
            <fieldset>
              {renderPayment(props.temp ? props.temp : pricingType)}
            </fieldset>
          </form>
          {pricingType == -1 && !props.temp
            ? list.map((item, i) => {
                return (
                  <ListItem
                    onClick={() => changePricingType(i)}
                    style={{}}
                    className="select_hover_list"
                    button
                  >
                    <Paper
                      style={{
                        // background: "#f8f8f8",
                        padding: "10px 20px",
                        marginBottom: 10,
                        width: "100%",
                        display: "block",
                      }}
                    >
                      <p>{item.heading}</p>
                      <p style={{ fontSize: 14 }}>{item.caption}</p>
                    </Paper>
                  </ListItem>
                );
              })
            : ""}
        </div>
      </Dialog>
    </div>
  );
}

function GetForm(props) {
  return (
    <form id="payment" style={{}}>
      <fieldset>
        <label style={{ marginTop: 10 }} for="business">
          Select payment method
        </label>
        <select
          style={{
            borderRadius: 5,
            height: 40,
            width: "50%",
            color: "#323232",
            marginTop: 10,
          }}
          id="business"
          name="user_job"
        >
          <option value={0}>Online Wallet</option>
          <option value={1}>Bank Transfer</option>
          <option value={2}>Others</option>
          <option value={3}>Cash</option>
        </select>
      </fieldset>
      <div style={{ textAlign: "right" }}>
        <Button
          style={{
            background: "#FF8021",
            color: "#fff",
            textTransform: "none",
            borderRadius: 20,
            width: 150,
            textAlign: "right",
            marginTop: -20,
          }}
          onClick={() => props.handleClose()}
          variant="contained"
        >
          Save
        </Button>
      </div>
    </form>
  );
}
//New change
