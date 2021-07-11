import React, { Component } from "react";
import "./Team_add_new.css";
import Upload_Image from "../../assets/img/upload.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import { useDropzone } from "react-dropzone";

export default function Index(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <div id="team_add_new">
      <div
        style={{
          borderBottom: "1px solid #65B1EC",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontWeight: 400, marginLeft: 30 }}>Team > Add New</h1>
        <div>
          <HighlightOffIcon
            onClick={() => props.onClose()}
            style={{ fontSize: 50, marginRight: 10, color: "#323232" }}
          />
        </div>
      </div>
      <Grid container>
        <Grid lg={8} item>
          {" "}
          <form style={{ maxWidth: 480, marginTop: 10, padding: 20 }}>
            <div style={{ display: "flex" }}>
              <div>
                <label for="name">First name </label>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="E.g. Jane"
                    style={{ color: "#323232" }}
                  />
                </div>
              </div>
              <div style={{ marginLeft: 50 }}>
                <label for="name">Last name </label>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="E.g. Doe"
                    style={{ color: "#323232" }}
                  />
                </div>
              </div>
            </div>

            <label for="name">Staff title (optional)</label>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="E.g. Lead instructor. Field is viewable while booking"
                style={{ color: "#323232" }}
              />
            </div>
            <label for="name">About the staff member (optional)</label>
            <div style={{ display: "flex" }}>
              <textarea
                type="text"
                id="name"
                name="user_name"
                rows={4}
                placeholder="Add notes viewable to customers for on the course landing page"
                style={{ color: "#323232" }}
              />
            </div>
            <label for="name">Email address*</label>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="mail@example.com"
                style={{ color: "#323232" }}
              />
            </div>
            <label for="name">Phone number*</label>
            <div style={{ display: "flex" }}>
              <input
                type="text"
                id="name"
                name="user_name"
                placeholder="+91 98978 90889"
                style={{ color: "#323232" }}
              />
            </div>
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox name="gilad" />}
                  label="Enable online booking for assigned services"
                />
              </FormGroup>
            </FormControl>
          </form>
        </Grid>
        <Grid lg={4} item>
          <div
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              paddingTop: 50,
            }}
          >
            <div>
              <section
                style={{
                  width: 200,
                  border: "1px dashed #ccc",
                  textAlign: "center",
                  padding: 20,
                  height: 130,
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
            <div>
              <Button
                style={{
                  background: "rgba(101, 177, 236, 1)",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: 20,
                  width: 150,
                  fontWeight: 400,
                  fontSize: 10,
                  marginTop: -100,
                  position: "relative",
                }}
                variant="contained"
              >
                <PublishIcon style={{ marginRight: 10, fontSize: 20 }} />{" "}
                Instructor picture
              </Button>
            </div>
          </div>
        </Grid>
      </Grid>
      <div style={{ alignItems: "center", textAlign: "right" }}>
        <Button
          style={{
            color: "#fff",
            background: "#FF8021",
            borderRadius: 20,
            marginRight: 50,
            width: 150,
            textTransform: "none",
            marginBottom: 30,
            marginTop: -30,
          }}
          variant="contained"
        >
          Save
        </Button>
      </div>
    </div>
  );
}
