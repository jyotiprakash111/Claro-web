import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import Upload_Image from "../../../assets/img/upload.png";
import "./style3.css";

export default function Main() {
  return (
    <div>
      <Paper
        style={{
          width: "60%",
          padding: 30,
          marginTop: 20,
        }}
      >
        <div id="form-dialog-title">
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <p style={{ marginBottom: 5, fontSize: 25 }}>Add testimonial</p>
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
        </div>
        <div>
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
        </div>
        <div>
          <Button
            style={{
              border: "1px solid #00110D",
              color: "#00110D",
              textTransform: "none",

              marginTop: 20,
            }}
            variant="outlined"
            // onClick={handleClose}
            color="primary"
          >
            <AddIcon />
            Add another testimonial
          </Button>
        </div>
      </Paper>
    </div>
  );
}
