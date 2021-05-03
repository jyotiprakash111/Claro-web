import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import "./dialogStyle.css";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    width: "550px",
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

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="sales_dialog">
      <Dialog
        onClose={() => props.handleClose()}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => props.handleClose()}
        >
          Invoice number #xxxxxxxxxx
        </DialogTitle>
        <DialogContent dividers>
          <Typography variant="h6" gutterBottom>
            Customer name
          </Typography>
          <Typography variant="h6" gutterBottom>
            (Participant name if applicable)
          </Typography>
        </DialogContent>
        <DialogContent dividers>
          <Typography variant="h6" gutterBottom>
            Class details
          </Typography>
          <table>
            <tr>
              <td>Class title</td>
              <td>Johnny Doe</td>
            </tr>
            <tr>
              <td>Batch name</td>
              <td>Friday Batch</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>Start date - End date (dd mmm yyyyy)</td>
            </tr>
            <tr>
              <td>Batch schedule</td>
              <td>Mon Fri 1:00 - 2:00 PM</td>
            </tr>
            <tr>
              <td>Number of sessions</td>
              <td>5 sessions</td>
            </tr>
            <tr>
              <td>Created on</td>
              <td>dd mmm yyyyy</td>
            </tr>
            <tr>
              <td>Paid on</td>
              <td>dd mmm yyyyy</td>
            </tr>
          </table>
        </DialogContent>
        <DialogContent className="payment_table" dividers>
          <Typography variant="h6" gutterBottom>
            Payment details
          </Typography>
          <table>
            <tr>
              <td>Class fee</td>
              <td>$ 249.99</td>
            </tr>
            <tr>
              <td>Discount</td>
              <td>-$ 249.99</td>
            </tr>
            <tr>
              <td>Tax (x%)</td>
              <td>-$ 249.99</td>
            </tr>

            <tr>
              <td>Others</td>
              <td>$ 249.99</td>
            </tr>
            <tr>
              <td style={{ fontSize: 20 }}>Total</td>
              <td style={{ fontSize: 20, color: "rgba(255, 128, 33, 1)" }}>
                $ 249.99
              </td>
            </tr>
          </table>
        </DialogContent>
        <DialogContent dividers>
          <table>
            <tr>
              <td>Payment method</td>
              <td>Account Transfer</td>
            </tr>
            <tr>
              <td>Payment status</td>
              <td>Paid</td>
            </tr>
            <tr>
              <td>Generation</td>
              <td>Auto - generated / manual</td>
            </tr>
          </table>
        </DialogContent>
      </Dialog>
    </div>
  );
}
