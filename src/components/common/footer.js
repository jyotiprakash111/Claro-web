import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Social1 from "../../../assets/img/Social/linkedin.png";
import Social2 from "../../../assets/img/Social/twitter.png";
import Social3 from "../../../assets/img/Social/instagram.png";
import Social4 from "../../../assets/img/Social/facebook.png";

import Map from "../../../assets/img/footer_icon/map.png";
import Mail from "../../../assets/img/footer_icon/mail.png";
import Clock from "../../../assets/img/footer_icon/clock.png";
import Call from "../../../assets/img/footer_icon/call.png";
import Footer_Logo from "../../../assets/img/claroo_logo.png";
import "./style.css";

function footer() {
  return (
    <div id="footer">
      <Grid container spacing={3}>
        <Grid lg={8} item>
          <h3>Business Name</h3>
          <p>one line about business</p>
          <Divider style={{ width: "10%" }} />
          <ul className="footer_ul">
            <li>Home</li>
            <li>Services</li>
            <li style={{ color: "#FF8021" }}>Schedule</li>
            <li>Packages</li>
            <li>Contact us</li>
          </ul>
          <ul className="footer_ul2">
            <li>
              <img src={Social1} alt="social" />{" "}
            </li>
            <li>
              <img src={Social2} alt="social" />{" "}
            </li>
            <li>
              <img src={Social3} alt="social" />{" "}
            </li>
            <li>
              <img src={Social4} alt="social" />{" "}
            </li>
          </ul>
          <div className="footer_down">
            <span>Privacy Policy</span>
            <span style={{ marginLeft: 20 }}>Terms and conditions</span>
          </div>
        </Grid>
        <Grid lg={4} item>
          <h5>Contact us</h5>
          <ul className="footer_ul_right">
            <li
              className="footer_ul_right_li"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img src={Map} alt="contact_icon" />
              <p>87 Science Park Drive The Oasis, #03-02, Singapore, 118260</p>
            </li>
            <li
              className="footer_ul_right_li"
              style={{ display: "flex", alignItems: "center" }}
            >
              {" "}
              <img src={Call} alt="contact_icon" /> <p>(+91) - 556-536-8512</p>
            </li>
            <li
              className="footer_ul_right_li"
              style={{ display: "flex", alignItems: "center" }}
            >
              {" "}
              <img src={Mail} alt="contact_icon" />
              <p>customer.service@claroo.com</p>
            </li>
            <li
              className="footer_ul_right_li"
              style={{ display: "flex", alignItems: "flex-start" }}
            >
              {" "}
              <img style={{ marginTop: 20 }} src={Clock} alt="contact_icon" />
              <div>
                <p>Mon-Fri </p>
                <p>10:00 AM - 6:00 PM</p>
                <p>Sat-Sun </p>
                <p>01:00 PM - 6:00 PM</p>
              </div>
            </li>
          </ul>
        </Grid>
      </Grid>
      <div className="footer_down2">
        <span>Powered by</span> <img src={Footer_Logo} />
      </div>
    </div>
  );
}

export default footer;
