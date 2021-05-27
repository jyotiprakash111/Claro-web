import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./style2.css";

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
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form id="payment2" style={{ padding: 20 }}>
          <fieldset>
            <label for="mail">Field title</label>
            <input
              type="text"
              style={{ width: 250 }}
              placeholder="Eg Bank code"
              id="mail"
              name="user_email"
            />
            <label for="mail">Field value</label>
            <input
              type="text"
              style={{ width: 250 }}
              placeholder="Eg HG759872"
              id="mail"
              name="user_email"
            />
          </fieldset>
        </form>
      </Dialog>
    </div>
  );
}
