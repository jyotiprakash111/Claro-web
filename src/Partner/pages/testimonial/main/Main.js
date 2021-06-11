import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/CancelOutlined";
import Upload_Image from "../../../assets/img/upload.png";
import { useDropzone } from "react-dropzone";
import PublishIcon from "@material-ui/icons/Publish";
import IconButton from "@material-ui/core/IconButton";
import "./style3.css";

export default function Main() {
  const [arr, setArr] = React.useState([]);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  console.log(arr);
  return (
    <div>
      {arr.map((item, i) => {
        return (
          <Paper
            style={{
              width: "60%",
              padding: 30,
              marginTop: 20,
            }}
          >
            <div id="form-dialog-title">
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <div>
                  <p style={{ marginBottom: 5, fontSize: 25, marginTop: 0 }}>
                    Add testimonial
                  </p>
                  <p style={{ fontSize: 16, width: "80%" }}>
                    Honest testimonials have an impact on your audience's
                    decision making.
                  </p>
                </div>
                <section
                  style={{
                    width: 200,
                    border: "1px dashed #ccc",
                    textAlign: "center",
                    padding: 20,
                  }}
                >
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <IconButton style={{ background: "#eceff7" }}>
                      <PublishIcon />
                    </IconButton>

                    <p style={{ color: "rgb(190 185 211)", fontSize: 10 }}>
                      Drag files here, or click to upload
                    </p>
                  </div>
                  <aside>
                    <ul>{files}</ul>
                  </aside>
                </section>
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
                <h4
                  style={{ marginBottom: 10, marginTop: 60, color: "#3C6671" }}
                >
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
                  border: "1px solid #F14336",
                  color: "#F14336",
                  textTransform: "none",

                  marginTop: 20,
                }}
                onClick={() => setArr(arr.filter((item) => item !== i))}
                variant="outlined"
                color="primary"
              >
                <CancelIcon style={{ marginRight: 10 }} />
                Remove Testimonial
              </Button>
            </div>
          </Paper>
        );
      })}

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
              <p style={{ marginBottom: 5, fontSize: 25, marginTop: 0 }}>
                Add testimonial
              </p>
              <p style={{ fontSize: 16, width: "80%" }}>
                Honest testimonials have an impact on your audience's decision
                making.
              </p>
            </div>
            <div style={{ position: "relative" }}>
              <span>
                <input
                  type="file"
                  style={{ position: "absolute", opacity: 0, height: 100 }}
                />
                <div>
                  <p></p>
                </div>

                <section
                  style={{
                    width: 200,
                    border: "1px dashed #ccc",
                    textAlign: "center",
                    padding: 20,
                  }}
                >
                  <div {...getRootProps({ className: "dropzone" })}>
                    <input {...getInputProps()} />
                    <IconButton style={{ background: "#eceff7" }}>
                      <PublishIcon />
                    </IconButton>

                    <p style={{ color: "rgb(190 185 211)", fontSize: 10 }}>
                      Drag files here, or click to upload
                    </p>
                  </div>
                  <aside>
                    <ul>{files}</ul>
                  </aside>
                </section>
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
            <h4 style={{ marginBottom: 10, marginTop: 60, color: "#3C6671" }}>
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
      </Paper>
      <div>
        <Button
          style={{
            border: "1px solid #00110D",
            color: "#00110D",
            textTransform: "none",

            marginTop: 20,
          }}
          onClick={() => setArr([...arr, ...[arr.length]])}
          variant="outlined"
          color="primary"
        >
          <AddIcon />
          Add another testimonial
        </Button>
      </div>
      <div style={{ textAlign: "right", width: "80%", margin: 20 }}>
        <Button
          style={{
            textAlign: "right",
            width: 150,
            background: "#FF8021",
            color: "#fff",
          }}
          variant="contained"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
