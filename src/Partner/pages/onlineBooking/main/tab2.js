import React from "react";
import Grid from "@material-ui/core/Grid";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
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
                <LanguageIcon
                  style={{
                    marginRight: 10,
                    color: "#757575",
                    fontSize: 30,
                  }}
                />
                <input
                  placeholder="www.yoursite.com"
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
              <label for="name">Facebook</label>
              <div
                style={{ display: "flex", marginTop: 5, alignItems: "center" }}
              >
                <FacebookIcon
                  style={{
                    marginRight: 10,
                    color: "#757575",
                    fontSize: 30,
                  }}
                />
                <input
                  placeholder="www.facebook.com/facebook"
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
              <label for="name">Instagram</label>
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
                  placeholder="www.instagram.com/instagram"
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
              <label for="name">YouTube</label>
              <div
                style={{ display: "flex", marginTop: 5, alignItems: "center" }}
              >
                <LanguageIcon
                  style={{
                    marginRight: 10,
                    color: "#757575",
                    fontSize: 30,
                  }}
                />
                <input
                  placeholder="www.youtube.com/youtube"
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
