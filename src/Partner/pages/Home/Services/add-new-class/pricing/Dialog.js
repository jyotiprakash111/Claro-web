import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import { ListItem } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import "./style.css";
import { TextField } from "@material-ui/core";

import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Checkbox from "@material-ui/core/Checkbox";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

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

const batches = [
  {
    value: "0",
    label: "Apply to all batches for this class",
  },
  {
    value: "1",
    label: "Apply to selected batches only",
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
  console.log(paymentType);

  function renderPayment(temp) {
    // const [count, setCount] = React.useState(0);
    console.log(temp);

    if (temp == 0) {
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
      return "New one time fee";
    }
    if (temp == 3) {
      return "Monthly / Weekly payment";
    }
    if (temp == 4) {
      return "New custom fee";
    }
    return "Create plan price";
  }

  return (
    <div>
      <Dialog
        fullScreen
        style={{
          maxHeight: renderHeight(paymentType),
          width: 800,
          margin: "0px auto",
        }}
        open={props.open}
        onClose={() => {
          changePricingType(-1);
          props.handleClose();
        }}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => {
            changePricingType(-1);
            props.handleClose();
          }}
          style={{
            borderBottom: "1px solid #FF8021",
            marginLeft: 30,
            marginRight: 50,
            paddingBottom: 10,
            paddingLeft: 0,
            fontWeight: "700",
          }}
        >
          {renderTitle(pricingType)}
        </DialogTitle>
        <div style={{ padding: 20, height: 500, width: 700, marginBottom: 40 }}>
          <form id="pricing_plan" style={{}}>
            <fieldset>{renderPayment(pricingType)}</fieldset>
          </form>
          {pricingType == -1
            ? list.map((item, i) => {
                return (
                  <ListItem
                    onClick={() => changePricingType(i)}
                    style={{}}
                    button
                  >
                    <Paper
                      style={{
                        background: "#f8f8f8",
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
