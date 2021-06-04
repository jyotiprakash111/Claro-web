import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import "./style.css";

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

function renderPayment(temp) {
  console.log(temp);
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
  if (temp == 0) {
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
        <label style={{ marginTop: 20 }}>Account details</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="E.g. Google pay"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Additional details</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="E.g. Google pay"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Add QR code / image (optional)</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="Add image icon"
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
    return "90%";
  }
  if (temp == 3) {
    return "40%";
  }
  if (temp == 0) {
    return "100%";
  }
  if (temp == 2) {
    return "70%";
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
  console.log(paymentType);
  return (
    <div>
      <Dialog
        fullScreen
        style={{
          height: renderHeight(paymentType),
          width: 800,
          margin: "0px auto",
        }}
        open={props.open}
        onClose={() => props.handleClose()}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => props.handleClose()}
        >
          Add payment option
        </DialogTitle>
        <div style={{ padding: 20, height: 500, width: 700 }}>
          <form id="payment" style={{}}>
            <fieldset>
              <label style={{ marginTop: 10 }} for="business">
                Select payment method
              </label>
              <select
                style={{
                  borderRadius: 20,
                  height: 40,
                  width: "50%",
                  color: "#323232",
                  marginTop: 10,
                }}
                id="business"
                name="user_job"
                onChange={(e) => changePaymentType(e.target.value)}
              >
                <option value={0}>Online Wallet</option>
                <option value={1}>Bank Transfer</option>
                <option value={2}>Others</option>
                <option value={3}>Cash</option>
              </select>
              {renderPayment(paymentType)}
            </fieldset>
            <div style={{ textAlign: "right" }}>
              <Button
                style={{
                  background: "#65B1EC",
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
        </div>
      </Dialog>
    </div>
  );
}
