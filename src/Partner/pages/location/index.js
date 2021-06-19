import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import "./style.css";
import Button from "@material-ui/core/Button";

const Location = () => {
  const [open, setOpen] = useState(true);
  const [postal, setPostal] = useState("");
  const CountryData = require("../../../data/countrycode.json");

  const handleClose = () => {
    setOpen(false);
  };

  const handleKeypress = (e) => {
    const characterCode = e.key;
    if (characterCode === "Backspace") return;

    const characterNumber = Number(characterCode);
    if (characterNumber >= 0 && characterNumber <= 9) {
      if (e.currentTarget.value && e.currentTarget.value.length) {
        return;
      } else if (characterNumber === 0) {
        e.preventDefault();
      }
    } else {
      e.preventDefault();
    }
  };

  return (
    <div id='general_page'>
      <SideBar />
      <div
        style={{
          margin: "10px 30px",
          marginLeft: 300,
        }}
      >
        <Header to='/settings' name='Location' />

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Grid>
          <Grid lg={8} item>
            <form style={{ maxWidth: 480 }}>
              <fieldset>
                <label for='name'>Location Name</label>
                <div style={{ display: "flex" }}>
                  <input
                    type='text'
                    id='name'
                    name='user_name'
                    placeholder='KJKS BMT PADANG BESI'
                  />
                </div>
                <label for='mail'>Address line 1</label>
                <input
                  type='text'
                  placeholder='Jl. Raya Indarung'
                  id='mail'
                  name='user_email'
                />
                <label for='mail'>Address line 2</label>
                <input
                  type='text'
                  id='mail'
                  name='user_email'
                  placeholder='Padang Besi,Kec,Lubuk Kllangan'
                />

                <label for='business'>State/Region</label>
                <input
                  type='text'
                  id='mail'
                  name='user_email'
                  placeholder='Sumatera Barat'
                />

                <label for='business'>City/Locality</label>
                <input
                  type='text'
                  id='mail'
                  name='user_email'
                  placeholder='Kota Padang'
                />

                <label for='business'>Postal code</label>
                <input
                  type='tel'
                  name='name'
                  pattern='[0-9]'
                  maxLength={6}
                  id='posNo'
                  name='postal'
                  placeholder='Ex-0000'
                  onChange={(e) => setPostal(e.target.value.trim())}
                  onKeyDown={handleKeypress}
                />
                <label for='business'>Country</label>
                <select
                  id='business'
                  style={{ width: "100%", height: 40 }}
                  name='user_job'
                >
                  {CountryData.map((item, i) => {
                    return (
                      <option key={i} value={item.dial_code}>
                        {item.name}
                      </option>
                    );
                  })}
                </select>
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
              Add your company email and phone number for sharing with clients.
            </p>
          </Grid>
          <Grid style={{ marginTop: 50 }} lg={8} item>
            <form style={{ maxWidth: 480 }}>
              <fieldset>
                <label for='name'>Phone no.</label>
                <div style={{ display: "flex" }}>
                  <select
                    id='business'
                    style={{ width: "50%", height: 40 }}
                    name='user_job'
                  >
                    {CountryData.map((item, i) => {
                      return (
                        <option key={i} value={item.dial_code}>
                          {item.dial_code} {item.name}
                        </option>
                      );
                    })}
                  </select>
                  <input
                    type='text'
                    id='name'
                    // style={{ marginLeft: 10 }}
                    name='mobileno'
                    placeholder='Phone no.'
                  />
                </div>
                <label for='mail'>Alternate Email address</label>
                <input
                  type='text'
                  placeholder='Alternate Email address'
                  id='mail'
                  name='user_email'
                />
              </fieldset>
            </form>
          </Grid>
          <Grid lg={4} item style={{ marginTop: 50 }}>
            <h3>Opening hours</h3>
          </Grid>
          <Grid lg={8} item>
            <form style={{ maxWidth: 480, marginTop: 50 }}>
              <fieldset>
                <ul className='opening_hours' style={{ padding: 0 }}>
                  <li
                    style={{
                      listStyle: "none",
                      display: "flex",
                      alignItems: "center",
                      width: "100%",
                      justifyContent: "space-between",
                      paddingLeft: 0,
                    }}
                  >
                    <div>
                      <input
                        type='checkbox'
                        id='vehicle1'
                        name='vehicle1'
                        value='Bike'
                        style={{
                          fontSize: 10,
                          marginTop: 20,
                          width: 20,
                          height: 20,
                          paddingLeft: 0,
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
                        Monday
                      </label>
                    </div>

                    <div style={{ marginLeft: 20 }}>
                      <label for='name'>Open</label>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
                      </div>
                    </div>
                    <div style={{ marginLeft: 10 }}>
                      <label for='name'>Close</label>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
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
                      paddingLeft: 0,
                    }}
                  >
                    <div>
                      <input
                        type='checkbox'
                        id='vehicle1'
                        name='vehicle1'
                        value='Bike'
                        style={{
                          fontSize: 10,
                          marginTop: 20,
                          width: 20,
                          height: 20,
                          paddingLeft: 0,
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
                        Tuesday
                      </label>
                    </div>

                    <div style={{ marginLeft: 20 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
                      </div>
                    </div>
                    <div style={{ marginLeft: 10 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
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
                      paddingLeft: 0,
                    }}
                  >
                    <div>
                      <input
                        type='checkbox'
                        id='vehicle1'
                        name='vehicle1'
                        value='Bike'
                        style={{
                          fontSize: 10,
                          marginTop: 20,
                          width: 20,
                          height: 20,
                          paddingLeft: 0,
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
                        Wednesday
                      </label>
                    </div>

                    <div style={{ marginLeft: 20 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
                      </div>
                    </div>
                    <div style={{ marginLeft: 10 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
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
                      paddingLeft: 0,
                    }}
                  >
                    <div>
                      <input
                        type='checkbox'
                        id='vehicle1'
                        name='vehicle1'
                        value='Bike'
                        style={{
                          fontSize: 10,
                          marginTop: 20,
                          width: 20,
                          height: 20,
                          paddingLeft: 0,
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
                        Thursday
                      </label>
                    </div>

                    <div style={{ marginLeft: 20 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
                      </div>
                    </div>
                    <div style={{ marginLeft: 10 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
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
                      paddingLeft: 0,
                    }}
                  >
                    <div>
                      <input
                        type='checkbox'
                        id='vehicle1'
                        name='vehicle1'
                        value='Bike'
                        style={{
                          fontSize: 10,
                          marginTop: 20,
                          width: 20,
                          height: 20,
                          paddingLeft: 0,
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
                        Friday
                      </label>
                    </div>

                    <div style={{ marginLeft: 20 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
                      </div>
                    </div>
                    <div style={{ marginLeft: 10 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
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
                      paddingLeft: 0,
                    }}
                  >
                    <div>
                      <input
                        type='checkbox'
                        id='vehicle1'
                        name='vehicle1'
                        value='Bike'
                        style={{
                          fontSize: 10,
                          marginTop: 20,
                          width: 20,
                          height: 20,
                          paddingLeft: 0,
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
                        Saturday
                      </label>
                    </div>

                    <div style={{ marginLeft: 20 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
                      </div>
                    </div>
                    <div style={{ marginLeft: 10 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
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
                      paddingLeft: 0,
                    }}
                  >
                    <div>
                      <input
                        type='checkbox'
                        id='vehicle1'
                        name='vehicle1'
                        value='Bike'
                        style={{
                          fontSize: 10,
                          marginTop: 20,
                          width: 20,
                          height: 20,
                          paddingLeft: 0,
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

                    <div style={{ marginLeft: 20 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
                      </div>
                    </div>
                    <div style={{ marginLeft: 10 }}>
                      <div style={{ display: "flex" }}>
                        <input type='time' id='open_time' name='open_time' />
                      </div>
                    </div>
                  </li>
                </ul>
              </fieldset>
            </form>
            <Button
              className='btnContainer'
              style={{
                background: "#FF8021",
                color: "#fff",
                textTransform: "none",
              }}
              onClick={() => handleClose()}
              variant='contained'
            >
              Save and continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
export default Location;
