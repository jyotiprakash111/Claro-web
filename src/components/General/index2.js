import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Sidebar from "../common/SideBar";
import Header from "../common/HeaderMain";
import "./style.css";

export default class Index extends Component {
  render() {
    return (
      <div id="general_page">
        <Grid container>
          <Grid item lg={2}>
            <Sidebar />
          </Grid>
          <Grid item lg={10}>
            <div
              style={{
                margin: "10px 30px",
              }}
            >
              <Header name="Business Setup" />

              <Grid container>
                <Grid lg={4} item>
                  <p style={{ fontSize: 20 }}>Business Address</p>
                  <p
                    style={{
                      fontWeight: "light",
                      fontSize: 18,
                      color: "#757575",
                    }}
                  >
                    Lorem, ipsum.
                  </p>
                </Grid>
                <Grid lg={8} item>
                  <form style={{ maxWidth: 480, marginTop: 30 }}>
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
                        Add country also
                      </label>
                      <input
                        type="number"
                        id="mail"
                        name="user_email"
                        placeholder="India  "
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
                <Grid lg={4} item>
                  <p
                    style={{
                      fontWeight: "light",
                      fontSize: 26,
                      color: "#757575",
                    }}
                  >
                    Opening hours
                  </p>
                </Grid>
                <Grid lg={8} item>
                  <ul style={{ maxWidth: 480, marginTop: 30, marginLeft: 130 }}>
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
              {/* <div style={{ display: "flex", alignItems: "center" }}>
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
           */}
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}
