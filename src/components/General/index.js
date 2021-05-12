import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Button from "@material-ui/core/Button";
import "./style.css";

export default class Index extends Component {
  render() {
    return (
      <div id="general_page">
        <Grid container>
          <Grid item lg={2}>
            <div
              style={{
                width: "100%",
                minHeight: "100vh",
                height: "100%",
                background: "#262C4C",
              }}
            ></div>
          </Grid>
          <Grid item lg={10}>
            <div
              style={{
                margin: "10px 30px",
              }}
            >
              <h1
                style={{
                  borderBottom: "4px solid #006AFF",
                  paddingBottom: 10,
                  marginBottom: 10,
                }}
              >
                Business Setup
              </h1>
              <a href="#" style={{ color: "#0E75FF", textDecoration: "none" }}>
                Back to Setup
              </a>
              <Grid container>
                <Grid lg={4} item>
                  <h3>Basic Info</h3>
                  <p
                    style={{
                      fontWeight: "light",
                      fontSize: 18,
                      color: "#757575",
                    }}
                  >
                    Your business name,bio and business type are displayed
                    across many areas including on your online booking
                    profile,sales invocies and messages to clients
                  </p>
                </Grid>
                <Grid lg={8} item>
                  <form style={{ maxWidth: 480 }}>
                    <fieldset>
                      <label for="name">Business Name</label>
                      <div style={{ display: "flex" }}>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          placeholder="Business Name"
                        />
                      </div>
                      <label for="mail">Email address</label>
                      <input
                        type="email"
                        placeholder="Email address"
                        id="mail"
                        name="user_email"
                      />
                      <label for="mail">Short bio:</label>
                      <input
                        type="number"
                        id="mail"
                        name="user_email"
                        placeholder="Write a short bio"
                      />
                      <div style={{ background: "#fff", padding: 10 }}>
                        <label style={{ color: "#45525E" }}>
                          Booking Page URL :{" "}
                        </label>
                        <p
                          style={{
                            background: "#F1FFFD",
                            padding: 10,
                            color: "#45525E",
                          }}
                        >
                          https://webveda.ankurwarikoo.com/
                        </p>
                      </div>
                      <label style={{ marginTop: 10 }} for="business">
                        Type of business
                      </label>
                      <select id="business" name="user_job">
                        <option value="Surgical Oncologist">
                          Dance School
                        </option>
                        <option value="Clinical Oncologist">
                          Clinical Oncologist
                        </option>
                        <option value="Healthcare Provider">
                          Radiation Oncologist
                        </option>
                      </select>
                      <span style={{ fontSize: 20, color: "#323232" }}>
                        Add About us (text)
                      </span>
                    </fieldset>
                  </form>
                </Grid>

                <Grid style={{ marginTop: 50 }} lg={4} item>
                  <h3>Contact Details</h3>
                  <p
                    style={{
                      fontWeight: "light",
                      fontSize: 18,
                      color: "#757575",
                    }}
                  >
                    Add your company email and phone number for sharing with
                    clients.
                  </p>
                  <p style={{ fontSize: 20, fontWeight: "300" }}>
                    This one is displayed in footer
                  </p>
                </Grid>
                <Grid style={{ marginTop: 50 }} lg={8} item>
                  <form style={{ maxWidth: 480 }}>
                    <fieldset>
                      <label for="name">Phone no.</label>
                      <div style={{ display: "flex" }}>
                        <select
                          id="business"
                          style={{ width: 120, height: 40 }}
                          name="user_job"
                        >
                          <option value="Surgical Oncologist">
                            Algeria (+21)
                          </option>
                          <option value="Clinical Oncologist">
                            Clinical Oncologist
                          </option>
                          <option value="Healthcare Provider">
                            Radiation Oncologist
                          </option>
                        </select>
                        <input
                          type="text"
                          id="name"
                          style={{ marginLeft: 10 }}
                          name="user_name"
                          placeholder="Phone no."
                        />
                      </div>
                      <label for="mail">Alternate Email address</label>
                      <input
                        type="email"
                        placeholder="Alternate Email address"
                        id="mail"
                        name="user_email"
                      />
                    </fieldset>
                  </form>
                </Grid>
                <Grid style={{ marginTop: 50 }} lg={4} item>
                  <h3>Time and Currency Settings</h3>
                  <p
                    style={{
                      fontWeight: "light",
                      fontSize: 18,
                      color: "#757575",
                    }}
                  >
                    Choose the time zone and currency which suit your business.
                  </p>
                </Grid>
                <Grid style={{ marginTop: 50 }} lg={8} item>
                  <form style={{ maxWidth: 480 }}>
                    <fieldset>
                      <label for="name">Time zone</label>
                      <div style={{ display: "flex" }}>
                        <select
                          id="business"
                          style={{ width: "100%", height: 40 }}
                          name="user_job"
                        >
                          <option value="Surgical Oncologist">
                            (GMT -11:00) Niue
                          </option>
                          <option value="Clinical Oncologist">
                            Clinical Oncologist
                          </option>
                          <option value="Healthcare Provider">
                            Radiation Oncologist
                          </option>
                        </select>
                      </div>
                      <label for="name">Currency</label>
                      <div style={{ display: "flex" }}>
                        <select
                          id="business"
                          style={{ width: "100%", height: 40 }}
                          name="user_job"
                        >
                          <option value="Surgical Oncologist">
                            United States Dollars
                          </option>
                          <option value="Clinical Oncologist">
                            Clinical Oncologist
                          </option>
                          <option value="Healthcare Provider">
                            Radiation Oncologist
                          </option>
                        </select>
                      </div>
                    </fieldset>
                  </form>
                </Grid>
                <Grid style={{ marginTop: 50 }} lg={4} item>
                  <h3>Image</h3>
                  <p
                    style={{
                      fontWeight: "light",
                      fontSize: 18,
                      color: "#757575",
                    }}
                  >
                    Add a logo and cover image to be displayed on your website.
                  </p>
                </Grid>
                <Grid style={{ marginTop: 50 }} lg={8} item>
                  <form style={{ maxWidth: 480 }}>
                    <fieldset>
                      <label for="name">Profile photo</label>
                      <div style={{ display: "flex" }}>
                        <input
                          placeholder="Alternate Email address"
                          id="mail"
                          name="user_email"
                          type="file"
                        />
                      </div>
                      <label for="name">Add a cover photo</label>
                      <div style={{ display: "flex" }}>
                        <input
                          placeholder="Alternate Email address"
                          id="mail"
                          name="user_email"
                          type="file"
                        />
                      </div>
                    </fieldset>
                  </form>
                </Grid>
                <Grid style={{ marginTop: 50 }} lg={4} item>
                  <h3>Online Links</h3>
                  <p
                    style={{
                      fontWeight: "light",
                      fontSize: 18,
                      color: "#757575",
                    }}
                  >
                    Add your company website and social media links for sharing
                    with clients
                  </p>
                </Grid>
                <Grid style={{ marginTop: 50 }} lg={8} item>
                  <form style={{ maxWidth: 480 }}>
                    <fieldset>
                      <label for="name">Website</label>
                      <div style={{ display: "flex" }}>
                        <LanguageIcon
                          style={{
                            marginTop: 7,
                            marginRight: 15,
                            color: "#757575",
                          }}
                        />
                        <input
                          placeholder="www.yoursite.com"
                          id="mail"
                          name="user_email"
                          type="text"
                        />
                      </div>
                      <label for="name">Facebook</label>
                      <div style={{ display: "flex" }}>
                        <FacebookIcon
                          style={{
                            marginTop: 7,
                            marginRight: 15,
                            color: "#757575",
                          }}
                        />
                        <input
                          placeholder="www.facebook.com/yoursite"
                          id="mail"
                          name="user_email"
                          type="text"
                        />
                      </div>
                      <label for="name">Instagram</label>
                      <div style={{ display: "flex" }}>
                        <InstagramIcon
                          style={{
                            marginTop: 7,
                            marginRight: 15,
                            color: "#757575",
                          }}
                        />
                        <input
                          placeholder="www.instagram.com/yoursite"
                          id="mail"
                          name="user_email"
                          type="text"
                        />
                      </div>
                      <label for="name">YouTube</label>
                      <div style={{ display: "flex" }}>
                        <LanguageIcon
                          style={{
                            marginTop: 7,
                            marginRight: 15,
                            color: "#757575",
                          }}
                        />
                        <input
                          placeholder="www.youtube.com/yoursite"
                          id="mail"
                          name="user_email"
                          type="text"
                        />
                      </div>
                    </fieldset>
                  </form>
                </Grid>
                <Grid style={{ marginTop: 50 }} lg={4} item>
                  <h3>Account Status</h3>
                  <p
                    style={{
                      fontWeight: "light",
                      fontSize: 18,
                      color: "#757575",
                    }}
                  >
                    Check the plan that you are on and online booking status
                  </p>
                </Grid>
                <Grid style={{ marginTop: 50 }} lg={8} item>
                  <form style={{ maxWidth: 480 }}>
                    <fieldset>
                      <label for="name">
                        Your account is currently under a free plan
                      </label>
                      <div style={{ display: "flex" }}>
                        <button
                          style={{
                            width: "100%",
                            textAlign: "left",
                            fontSize: 16,
                            padding: 5,
                            paddingLeft: 10,
                            color: "#FF2727",
                            borderColor: "#FF2727",
                            outline: "none",
                          }}
                        >
                          Delete account
                        </button>
                      </div>
                    </fieldset>
                  </form>
                </Grid>
              </Grid>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p
                  style={{
                    color: "#FF2727",
                    width: "78%",
                    marginRight: 30,
                    fontSize: 22,
                    fontWeight: 300,
                  }}
                >
                  Clicking on delete account - leads to a pop that states
                  "Hello,we are sorry to see you go.Please write to us at
                  hello@claroo.co raising your request to delete the account.We
                  will check that there aren't any active bookings to be taken
                  care of.Also we would really like to see if there is anything
                  we can do to make you stay:)
                </p>
                <Button
                  style={{
                    background: "#262C4C",
                    color: "#fff",
                    textTransform: "none",
                  }}
                  variant="contained"
                >
                  Save
                </Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
