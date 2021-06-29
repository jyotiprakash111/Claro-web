import React from "react";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import "./style.css";
import Index from "./index";
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
  console.log(paymentType);

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
          changePricingType(0);
          props.handleClose();
        }}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => {
            changePricingType(0);
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
          Location
        </DialogTitle>
        <div style={{ padding: 20, height: 500, width: 700, marginBottom: 40 }}>
          <Index />
        </div>
      </Dialog>
    </div>
  );
}
