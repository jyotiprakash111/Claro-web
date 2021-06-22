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

function renderPayment(temp) {
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
        {/* <TextField
          style={{ borderRadius: '5px ' }}
          multiline
          rows={5}
          placeholder="E.g. Yoga for beninners's or 'Advanced Art"
          variant="outlined"
        /> */}
        <label style={{ marginTop: 20 }}>
          Select the batches to apply price plan
        </label>
        <select
          id="business"
          style={{ width: "100%", height: 40 }}
          name="user_job"
        >
          {batches.map((item, i) => {
            return (
              <option key={i} value={item.value}>
                {item.label}
              </option>
            );
          })}
        </select>
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
            // onClick={() => changePricingType(-1)}
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
        <label style={{ marginTop: 20 }}>Account No</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="Eg CR27592891"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Account Name</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="Eg John Doe"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Additional details</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="Add any other information"
          id="mail"
          name="account_no"
        />
      </div>
    );
  }
  if (temp == 1) {
    return (
      <div>
        <label style={{ marginTop: 20 }}>Account No</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="Eg CR27592891"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Account Name</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="Eg John Doe"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Additional details</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="Add any other information"
          id="mail"
          name="account_no"
        />
      </div>
    );
  }

  if (temp == 2) {
    return (
      <div>
        <label style={{ marginTop: 20 }}>Name the payment method</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="E.g. Google pay"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Additional details (optional)</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="E.g. Google pay"
          id="mail"
          name="account_no"
        />
      </div>
    );
  }
}

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
  console.log(paymentType);
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
        onClose={() => props.handleClose()}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => props.handleClose()}
          style={{
            borderBottom: "1px solid #FF8021",
            marginLeft: 30,
            marginRight: 50,
            paddingBottom: 10,
            paddingLeft: 0,
            fontWeight: "700",
          }}
        >
          Create plan price
        </DialogTitle>
        <div style={{ padding: 20, height: 500, width: 700, marginBottom: 40 }}>
          <form id="pricing_plan" style={{}}>
            <fieldset>{renderPayment(pricingType)}</fieldset>
          </form>
          {pricingType == -1
            ? list.map((item, i) => {
                return (
                  <ListItem
                    onClick={() => changePricingType(0)}
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
