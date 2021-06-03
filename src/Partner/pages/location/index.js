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
                  borderBottom: "2px solid #65B1EC",
                  paddingBottom: 10,
                  marginBottom: 10,
                  fontWeight: 400,
                }}
              >
                Location
              </h1>

              <Grid container>
                <Grid lg={4} item>
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
                <Grid lg={8} item>
                  <form style={{ maxWidth: 480, marginLeft: 0 }}>
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
                <Grid style={{ marginTop: 50 }} lg={4} item>
                  <h3>Contact Details</h3>
                  <p
                    style={{
                      fontWeight: "light",
                      fontSize: 18,
                      color: "#757575",
                      width: 300,
                    }}
                  >
                    Add your company email and phone number for sharing with
                    clients.
                  </p>
                </Grid>
                <Grid style={{ marginTop: 50 }} lg={8} item>
                  <form style={{ maxWidth: 480, marginLeft: 0 }}>
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
                            India (+91)
                          </option>
                          <option value="Healthcare Provider">
                            Bangladesh (+101)
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
               
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
