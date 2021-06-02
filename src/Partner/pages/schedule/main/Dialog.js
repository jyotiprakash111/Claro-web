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
import "../style.css";

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
          Class title
        </DialogTitle>
        <DialogContent style={{ width: 500 }} dividers>
          <h2
            style={{
              margin: "5px 0",
              borderBottom: "4px solid #FF8021",
              width: "30%",
              textAlign: "center",
            }}
          >
            Participants
          </h2>
          <table style={{ width: "100%", marginTop: 20, textAlign: "left" }}>
            <tr>
              <th style={{ width: "33%" }}>Name</th>
              <th style={{ width: "33%" }}>Age</th>
              <th style={{ width: "33%" }}>Attendance</th>
            </tr>
            <tr>
              <td>Johnny Doe</td>
              <td>4 Yo</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>Johnny Doe</td>
              <td>11 Yo</td>
              <td>Rescheduled</td>
            </tr>
            <tr>
              <td>Friday Batch</td>
              <td>Friday Batch</td>
            </tr>
            <tr>
              <td>Friday Batch</td>
            </tr>
            <tr>
              <td>5th Mar-5th May</td>
            </tr>
            <tr>
              <td>1:00-2:00 PM</td>
            </tr>
            <tr>
              <td>5 Session</td>
            </tr>
          </table>
        </DialogContent>
      </Dialog>
    </div>
  );
}
