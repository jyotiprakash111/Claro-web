import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import LanguageIcon from "@material-ui/icons/Language";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import Button from "@material-ui/core/Button";
import Dialog from "./Dialog";
import "./style.css";

export default function SimpleSelect() {
  const [open, setDialog] = React.useState(false);

  return (
    <div id="general_page">
      <Dialog open={open} handleClose={() => setDialog(false)} />
      <SideBar />
      <div style={{ marginLeft: 300 }}>
        <Header name="User Profile" />

        <Grid style={{ marginTop: 30 }} container>
          <Grid lg={4} item>
            <h3>Basic Info</h3>
            <p
              style={{
                fontWeight: "light",
                fontSize: 18,
                color: "#757575",
              }}
            >
              Your business name,bio and business type are displayed across many
              areas including on your online booking profile,sales invocies and
              messages to clients
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
                <label for="mail">Booking Page URL:</label>
                <input
                  type="number"
                  id="mail"
                  name="user_email"
                  placeholder="https://www.abc.com"
                />
                <label style={{ marginTop: 10 }} for="business">
                  Type of business
                </label>
                <select id="business" name="user_job">
                  <option value="Surgical Oncologist">Dance School</option>
                  <option value="Clinical Oncologist">
                    Clinical Oncologist
                  </option>
                  <option value="Healthcare Provider">
                    Radiation Oncologist
                  </option>
                </select>
                <label for="mail">Add about us:</label>
                <textarea
                  type="number"
                  row="2"
                  id="mail"
                  name="user_email"
                  placeholder="brief description about"
                />
              </fieldset>
            </form>
          </Grid>
          <Grid style={{ marginTop: 100 }} lg={4} item>
            <h3>Business address</h3>
            <p
              style={{
                fontWeight: "light",
                fontSize: 18,
                color: "#757575",
              }}
            >
              Lorel ipsum
            </p>
          </Grid>
          <Grid style={{ marginTop: 100 }} lg={8} item>
            <form style={{ maxWidth: 480 }}>
              <fieldset>
                <label for="name">Location Name</label>
                <div style={{ display: "flex" }}>
                  <input
                    type="text"
                    id="name"
                    name="user_name"
                    placeholder="KJKS BMT PADANG BESI"
                  />
                </div>
                <label for="mail">Address line 1</label>
                <input
                  type="email"
                  placeholder="Jl. Raya Indarung"
                  id="mail"
                  name="user_email"
                />
                <label for="mail">Address line 2</label>
                <input
                  type="number"
                  id="mail"
                  name="user_email"
                  placeholder="Padang Besi,Kec,Lubuk Kllangan"
                />

                <label style={{ marginTop: 10 }} for="business">
                  City/Locality
                </label>
                <input
                  type="number"
                  id="mail"
                  name="user_email"
                  placeholder="Kota Padang"
                />

                <label style={{ marginTop: 10 }} for="business">
                  State/Region
                </label>
                <input
                  type="number"
                  id="mail"
                  name="user_email"
                  placeholder="Sumatera Barat"
                />

                <label style={{ marginTop: 10 }} for="business">
                  Postal code
                </label>
                <input
                  type="number"
                  id="mail"
                  name="user_email"
                  placeholder="25157  "
                />
                <label style={{ marginTop: 10 }} for="business">
                  Country
                </label>
                <input
                  type="number"
                  id="mail"
                  name="user_email"
                  placeholder="25157  "
                />
              </fieldset>
            </form>
          </Grid>
          <Grid style={{ marginTop: 100 }} lg={4} item>
            <h3>Contact Details</h3>
            <p
              style={{
                fontWeight: "light",
                fontSize: 18,
                color: "#757575",
              }}
            >
              Add your company email and phone number for sharing with clients.
            </p>
          </Grid>
          <Grid style={{ marginTop: 100 }} lg={8} item>
            <form style={{ maxWidth: 480 }}>
              <fieldset>
                <label for="name">Phone no.</label>
                <div style={{ display: "flex" }}>
                  <select
                    id="business"
                    style={{ width: 120, height: 40 }}
                    name="user_job"
                  >
                    <option value="Surgical Oncologist">Algeria (+21)</option>
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
              Add your company website and social media links for sharing with
              clients
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
                  <Button
                    onClick={() => setDialog(true)}
                    variant="outlined"
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
                  </Button>
                </div>
              </fieldset>
            </form>
          </Grid>
        </Grid>
        <div style={{ display: "flex", alignItems: "center", padding: 20 }}>
          <p
            style={{
              color: "#FF2727",
              width: "76%",
              marginRight: 30,
              fontSize: 22,
              fontWeight: 300,
            }}
          ></p>
          <Button
            style={{
              background: "#262C4C",
              color: "#fff",
              textTransform: "none",
              width: 100,
            }}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}
