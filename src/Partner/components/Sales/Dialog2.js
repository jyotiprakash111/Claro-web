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
import CancelIcon from "@material-ui/icons/Cancel";
import ClearIcon from "@material-ui/icons/Clear";
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
          Sessions
        </DialogTitle>
        <DialogContent
          style={{ borderTopColor: "#C95B3B", padding: 20 }}
          dividers
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <Typography variant="p" gutterBottom>
              Sat Jul 11, 1pm - 1:45 Eastern
            </Typography>
            <div>
              <CancelIcon style={{ marginLeft: 40, color: "#C95B3B" }} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
            <Typography variant="p" gutterBottom>
              Sat Jul 11, 1pm - 1:45 Eastern
            </Typography>
            <div>
              <ClearIcon style={{ marginLeft: 40, color: "#C95B3B" }} />
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
            <Typography variant="p" gutterBottom>
              Sat Jul 11, 1pm - 1:45 Eastern
            </Typography>
            <div>
              <ClearIcon style={{ marginLeft: 40, color: "#C95B3B" }} />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
