import React, { useState } from "react";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./style.css";

const Profile = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");

  // const apicall = () => {
  //   let data = {
  //     businessName: businessName,
  //     bio: bio,
  //     email: email,
  //     url:url,
  //     businessType: businessType,
  //     mobileno:mobileno,
  //     alterEmail:alterEmail
  //   };
  //   UserSignup(data)
  //     .then((resp) => {
  //       console.log(resp);
  //       if (resp.message === "User registered successfully.") {
  //         // alertify.success(
  //         //   "You have been registered successfully. Check your email to verify your account"
  //         // );
  //         setTimeout(() => {
  //           history.push({ pathname: "/login" });
  //         }, 3000);
  //       } else if (
  //         resp.message ===
  //         "It seems you have not verified your account.Please verify your email."
  //       ) {
  //         // alertify.error(resp.message);
  //       } else if (
  //         (resp.message =
  //           "This Email is already registered. Please enter a different email.")
  //       ) {
  //         // alertify.error(resp.message);
  //       }
  //     })
  //     .catch(console.log("BussinessSetup completed"));
  // };

  const ProfileSetup = (e) => {
    e.preventDefault();

    if ([undefined, null, ""].includes(firstName)) {
      document.getElementById("fname_err").innerText =
        "Please Enter First Name";
      document.getElementById("fname_err").style.display = "block";
      console.log("first Name is required");
      return;
    }
    document.getElementById("fname_err").style.display = "none";
    if ([undefined, null, ""].includes(lastName)) {
      document.getElementById("lastName_err").innerText =
        "Please Enter Last Name";
      document.getElementById("lastName_err").style.display = "block";
      console.log("lastname is required");
      return;
    }
    document.getElementById("lastName_err").style.display = "none";
    if ([undefined, null, ""].includes(email)) {
      document.getElementById("email_err").innerText = "Please Enter Email";
      document.getElementById("email_err").style.display = "block";
      return;
    }
    document.getElementById("email_err").style.display = "none";
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      console.log("false");
      document.getElementById("email_err").innerText = "Email is incorrect";
      document.getElementById("email_err").style.display = "block";
      return;
    }
    document.getElementById("email_err").style.display = "none";
    if ([undefined, null, ""].includes(mobileno)) {
      document.getElementById("mobile_err").innerText =
        "Please Enter Mobile No";
      document.getElementById("mobile_err").style.display = "block";
      console.log("mobileno is required");
      return;
    }
    const regx = /^\d{10}$/;
    if (!regx.test(mobileno)) {
      console.log("Invalid Mobile No");
      document.getElementById("mobile_err").innerText =
        "Mobile no is not valid";
      document.getElementById("mobile_err").style.display = "block";
      return;
    }
    document.getElementById("mobile_err").style.display = "none";
    // apicall();
  };

  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: 300 }}>
        <Header to='/settings' title='User Profile' name='User Profile' />
        <div id='user_profile'>
          <p style={{ marginTop: 0 }}>
            Manage personal details and login credential
          </p>
          <Grid container>
            <Grid lg={7} item>
              <div style={{ display: "flex", alignItems: "center" }}>
                <form style={{ maxWidth: 480, marginTop: 10 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div>
                      <label for='name'>First name </label>
                      <div style={{ display: "flex" }}>
                        <input
                          type='text'
                          id='name'
                          name='firstname'
                          placeholder='E.g. Jane'
                          onChange={(e) => setfirstName(e.target.value.trim())}
                          style={{ color: "#323232" }}
                        />
                      </div>
                      <p
                        className='errMsg'
                        id='fname_err'
                        style={{ color: "red", display: "none" }}
                      >
                        First name is requreid
                      </p>
                    </div>
                    <div>
                      <label for='name'>Last name </label>
                      <div style={{ display: "flex" }}>
                        <input
                          type='text'
                          id='name'
                          name='user_name'
                          placeholder='E.g. Doe'
                          onChange={(e) => setlastName(e.target.value.trim())}
                          style={{ color: "#323232" }}
                        />
                        <p
                          className='errMsg'
                          id='lastName_err'
                          style={{ color: "red", display: "none" }}
                        >
                          Last name is requreid
                        </p>
                      </div>
                    </div>
                  </div>
                  <label for='name'>Email address*</label>
                  <div style={{ display: "flex" }}>
                    <input
                      type='text'
                      id='name'
                      name='lastname'
                      placeholder='Email address'
                      onChange={(e) => setEmail(e.target.value.trim())}
                      style={{ color: "#323232" }}
                    />
                    <p
                      className='errMsg'
                      id='email_err'
                      style={{ color: "red", display: "none" }}
                    >
                      Email is requreid
                    </p>
                  </div>
                  <label for='name'>Phone number*</label>
                  <div style={{ display: "flex" }}>
                    <input
                      type='text'
                      id='name'
                      name='mobileno'
                      placeholder='+91'
                      onChange={(e) => setMobileno(e.target.value.trim())}
                      style={{ color: "#323232" }}
                    />
                    <p
                      className='errMsg'
                      id='mobile_err'
                      style={{ color: "red", display: "none" }}
                    >
                      Email is requreid
                    </p>
                  </div>
                  <Button
                    onClick={ProfileSetup}
                    variant='contained'
                    style={{
                      color: "#fff",
                      background: "#FF8021",
                      width: 200,
                      borderRadius: 5,
                      marginTop: 10,
                    }}
                  >
                    Submit
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};
export default Profile;
