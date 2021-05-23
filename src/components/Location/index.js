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
                <Grid lg={6} item>
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
                <Grid lg={6} item>
                  <p style={{ fontSize: 20 }}>Add a time section</p>
                  <ol style={{ paddingLeft: 20 }}>
                    <li style={{ fontSize: 20 }}>day of the week</li>
                    <li style={{ fontSize: 20 }}>Opening time</li>
                    <li style={{ fontSize: 20 }}>Closing time</li>
                  </ol>
                  <h4
                    style={{
                      textAlign: "center",
                      borderBottom: "1px solid #ccc",
                      paddingBottom: 20,
                      fontSize: 20,
                    }}
                  >
                    Availability
                  </h4>
                  <ul>
                    <li
                      style={{
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                          style={{
                            fontSize: 10,
                            marginTop: 20,
                            width: 20,
                            height: 20,
                          }}
                        ></input>
                      </div>
                      <div>
                        <label
                          style={{
                            fontSize: 17,
                            marginTop: 20,
                            marginLeft: 10,
                            width: 70,
                          }}
                        >
                          Sunday
                        </label>
                      </div>

                      <div style={{ marginLeft: 100 }}>
                        <label for="name">Open</label>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ marginLeft: 10 }}>
                        <label for="name">Close</label>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li
                      style={{
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                          style={{
                            fontSize: 10,
                            width: 20,
                            height: 20,
                          }}
                        ></input>
                      </div>
                      <div>
                        <label
                          style={{
                            fontSize: 17,
                            width: 70,
                            marginLeft: 10,
                          }}
                        >
                          Monday
                        </label>
                      </div>

                      <div style={{ marginLeft: 100 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ marginLeft: 10 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                    </li>

                    <li
                      style={{
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                          style={{
                            fontSize: 10,
                            width: 20,
                            height: 20,
                          }}
                        ></input>
                      </div>
                      <div>
                        <label
                          style={{
                            fontSize: 17,
                            width: 70,
                            marginLeft: 10,
                          }}
                        >
                          Tuesday
                        </label>
                      </div>

                      <div style={{ marginLeft: 100 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ marginLeft: 10 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                    </li>

                    <li
                      style={{
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                          style={{
                            fontSize: 10,
                            width: 20,
                            height: 20,
                          }}
                        ></input>
                      </div>
                      <div>
                        <label
                          style={{
                            fontSize: 17,
                            width: 70,
                            marginLeft: 10,
                          }}
                        >
                          Wednesday
                        </label>
                      </div>

                      <div style={{ marginLeft: 100 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ marginLeft: 10 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                    </li>
                    <li
                      style={{
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                          style={{
                            fontSize: 10,
                            width: 20,
                            height: 20,
                          }}
                        ></input>
                      </div>
                      <div>
                        <label
                          style={{
                            fontSize: 17,
                            width: 70,
                            marginLeft: 10,
                          }}
                        >
                          Thursday
                        </label>
                      </div>

                      <div style={{ marginLeft: 100 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ marginLeft: 10 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                    </li>

                    <li
                      style={{
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                          style={{
                            fontSize: 10,
                            width: 20,
                            height: 20,
                          }}
                        ></input>
                      </div>
                      <div>
                        <label
                          style={{
                            fontSize: 17,
                            width: 70,
                            marginLeft: 10,
                          }}
                        >
                          Friday
                        </label>
                      </div>

                      <div style={{ marginLeft: 100 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ marginLeft: 10 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                    </li>

                    <li
                      style={{
                        listStyle: "none",
                        display: "flex",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <input
                          type="checkbox"
                          id="vehicle1"
                          name="vehicle1"
                          value="Bike"
                          style={{
                            fontSize: 10,
                            width: 20,
                            height: 20,
                          }}
                        ></input>
                      </div>
                      <div>
                        <label
                          style={{
                            fontSize: 17,
                            width: 70,
                            marginLeft: 10,
                          }}
                        >
                          Saturday
                        </label>
                      </div>

                      <div style={{ marginLeft: 100 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                      <div style={{ marginLeft: 10 }}>
                        <div style={{ display: "flex" }}>
                          <select
                            id="business"
                            style={{ width: 150, height: 30 }}
                            name="user_job"
                          >
                            <option value="Surgical Oncologist">09:30</option>
                          </select>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
