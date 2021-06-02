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
export default class index extends Component {
  render() {
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
              onClick={() => this.props.onClose()}
              style={{ fontSize: 50, marginRight: 10, color: "#323232" }}
            />
          </div>
        </div>
        <Grid container>
          <Grid lg={6} item>
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
                      value="E.g. Jane"
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
                      value="E.g. Doe"
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
                  value="E.g. Lead instructor. Field is viewable while booking"
                />
              </div>
              <label for="name">About the staff member (optional)</label>
              <div style={{ display: "flex" }}>
                <textarea
                  type="text"
                  id="name"
                  name="user_name"
                  rows={4}
                  value="Add notes viewable to customers for on the course landing page"
                />
              </div>
              <label for="name">Email address*</label>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value="mail@example.com"
                />
              </div>
              <label for="name">Phone number*</label>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value="+91 98978 90889"
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
          <Grid lg={6} item>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                paddingTop: 50,
              }}
            >
              <div>
                <img src={Upload_Image} />
              </div>
              <div>
                <Button
                  style={{
                    background: "rgba(101, 177, 236, 1)",
                    color: "#fff",
                    textTransform: "none",
                    borderRadius: 20,
                    width: 250,
                    fontWeight: 400,
                    marginTop: 20,
                    fontSize: 17,
                    height: 45,
                    position: "relative",
                  }}
                  variant="contained"
                >
                  <input
                    type="file"
                    style={{ opacity: 0, position: "absolute" }}
                  />
                  <PublishIcon style={{ marginRight: 10 }} /> Customer image
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
        <div style={{ alignItems: "center", textAlign: "right" }}>
          <Button
            style={{
              color: "#fff",
              background: "#65B1EC",
              borderRadius: 20,
              marginRight: 100,
              width: 100,
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
}
