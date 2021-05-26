import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Upload_Image from "../../../assets/img/upload.png";
import "./style3.css";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="general_page_testimonial2">
      <Dialog
        open={true}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <h3 style={{ marginBottom: 5, fontSize: 25, fontWeight: 700 }}>
                Add testimonial
              </h3>
              <p style={{ fontSize: 16, width: "80%" }}>
                Honest testimonials have an impact on your audience's decision
                making.
              </p>
            </div>
            <div style={{}}>
              <span>
                <img style={{ width: 200 }} src={Upload_Image} />
              </span>
            </div>
          </div>
        </DialogTitle>
        <DialogContent>
          <form style={{ maxWidth: 480, marginTop: -30 }}>
            <h4 style={{ marginBottom: 10, color: "#3C6671" }}>
              Who is it from ?
            </h4>
            <TextField
              type="text"
              id="name"
              name="user_name"
              placeholder="Name"
              variant="outlined"
              size="small"
              style={{
                width: 300,
                height: 35,
                borderColor: "1px solid #ccc",
                outline: 0,
                borderRadius: 5,
                boxShadow: 0,
              }}
            />
            <h4 style={{ marginBottom: 10, color: "#3C6671" }}>
              What did they have to say ?
            </h4>
            <TextField
              type="text"
              id="name"
              name="user_name"
              placeholder="Description"
              variant="outlined"
              size="small"
              multiline
              rows="3"
              fullWidth
              style={{
                height: 35,
                borderColor: "1px solid #ccc",
                outline: 0,
                borderRadius: 5,
                boxShadow: 0,
              }}
            />
            <h4 style={{ marginBottom: 10, marginTop: 80, color: "#3C6671" }}>
              Describe their role ?
            </h4>
            <TextField
              type="text"
              id="name"
              name="user_name"
              placeholder="Role"
              variant="outlined"
              size="small"
              fullWidth
              style={{
                height: 35,
                borderColor: "1px solid #ccc",
                outline: 0,
                borderRadius: 5,
                boxShadow: 0,
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            style={{
              background: "#00110D",
              color: "#ddd",
              textTransform: "none",
              width: 80,
              marginTop: 20,
            }}
            variant="contained"
            onClick={handleClose}
            color="primary"
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
