import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./style.css";

export default function Main() {
  return (
    <div id="user_profile">
      <Breadcrumbs
        style={{ marginTop: 20 }}
        separator="›"
        aria-label="breadcrumb"
      >
        <Link color="inherit" href="/">
          Setup
        </Link>
        <Typography color="textPrimary">User profile</Typography>
      </Breadcrumbs>
      <p style={{ marginTop: 0 }}>
        Manage personal details and login credential
      </p>
      <Grid container>
        <Grid lg={7} item>
          <div style={{ display: "flex", alignItems: "center" }}>
            <form style={{ maxWidth: 480, marginTop: 10 }}>
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

              <label for="name">Email address*</label>
              <div style={{ display: "flex" }}>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  value="Email address"
                />
              </div>
              <label for="name">Phone number*</label>
              <div style={{ display: "flex" }}>
                <input type="text" id="name" name="user_name" value="+91 " />
              </div>
              <Button
                variant="outlined"
                style={{
                  color: "#65b1ec",
                  border: "1px solid #65b1ec",
                  width: 200,
                  borderRadius: 20,
                  marginTop: 10,
                }}
              >
                Submit
              </Button>
            </form>
            {/* <p
              style={{
                width: 260,
                marginLeft: 50,
                color: "#323232",
                marginTop: 50,
              }}
            >
              Below box "Your email business email is set as 'example@mail.com'
              (business email which was used to sign up).To change,please
              contact us.
            </p> */}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
