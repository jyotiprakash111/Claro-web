import React from "react";
import Grid from "@material-ui/core/Grid";
import Home from "@material-ui/icons/Home";
import LanguageIcon from "@material-ui/icons/Home";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Menu";
import ScheduleIcon from "@material-ui/icons/Schedule";
import CallIcon from "@material-ui/icons/Call";
import { Link } from "react-router-dom";

export default function Tab2() {
  return (
    <div>
      <Grid container>
        <Grid item lg={4}>
          <h2>Online Links</h2>
          <p>
            Add your company website and social media links for sharing with
            clients
          </p>
        </Grid>
        <Grid item lg={8}>
          <form
            style={{
              maxWidth: 480,
              marginLeft: 50,
              background: "#efefef",
              marginTop: 30,
            }}
          >
            <fieldset style={{ padding: 20 }}>
              <label for="name">Homepage</label>
              <div
                style={{ display: "flex", marginTop: 5, alignItems: "center" }}
              >
                <Home
                  style={{
                    marginRight: 10,
                    color: "#757575",
                    fontSize: 30,
                  }}
                />
                <input
                  placeholder="www.charoo.com/homepage"
                  id="mail"
                  name="user_email"
                  type="text"
                  style={{
                    width: "100%",
                    height: 20,
                    border: "1px solid #ccc",
                    borderRadius: 5,
                    boxShadow: "none",
                    padding: 5,
                  }}
                />
              </div>
              <br />
              <label for="name">Schedule</label>
              <div
                style={{ display: "flex", marginTop: 5, alignItems: "center" }}
              >
                <ScheduleIcon
                  style={{
                    marginRight: 10,
                    color: "#757575",
                    fontSize: 30,
                  }}
                />
                <input
                  placeholder="www.claroo.com/schedule"
                  id="mail"
                  name="user_email"
                  type="text"
                  style={{
                    width: "100%",
                    height: 20,
                    border: "1px solid #ccc",
                    borderRadius: 5,
                    boxShadow: "none",
                    padding: 5,
                  }}
                />
              </div>
              <br />
              <label for="name">Services</label>
              <div
                style={{ display: "flex", marginTop: 5, alignItems: "center" }}
              >
                <InstagramIcon
                  style={{
                    marginRight: 10,
                    color: "#757575",
                    fontSize: 30,
                  }}
                />
                <input
                  placeholder="www.claroo.com/Services"
                  id="mail"
                  name="user_email"
                  type="text"
                  style={{
                    width: "100%",
                    height: 20,
                    border: "1px solid #ccc",
                    borderRadius: 5,
                    boxShadow: "none",
                    padding: 5,
                  }}
                />
              </div>
              <br />
              <label for="name">Contact us</label>
              <div
                style={{ display: "flex", marginTop: 5, alignItems: "center" }}
              >
                <CallIcon
                  style={{
                    marginRight: 10,
                    color: "#757575",
                    fontSize: 30,
                  }}
                />
                <input
                  placeholder="www.claroo.com/contact_us"
                  id="mail"
                  name="user_email"
                  type="text"
                  style={{
                    width: "100%",
                    height: 20,
                    border: "1px solid #ccc",
                    borderRadius: 5,
                    boxShadow: "none",
                    padding: 5,
                  }}
                />
              </div>
            </fieldset>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
