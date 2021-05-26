import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Main3 from "./Main3";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen
        style={{ width: 900, height: "80%", width: 800, margin: "20px auto" }}
        open={props.open}
        onClose={handleClose}
      >
        <div style={{ padding: 20, height: 500, width: 700 }}>
          <Main3 />
        </div>
      </Dialog>
    </div>
  );
}
