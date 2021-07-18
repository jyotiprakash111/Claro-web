import React, { useState } from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
import {
	Language as LanguageIcon,
	Facebook as FacebookIcon,
	Instagram as InstagramIcon,
	YouTube as YoutubeIcon,
} from "@material-ui/icons";
import SideBar from "../../components/common/SideBar";
import Header from "../../components/common/HeaderMain";
import {
	Button,
	Grid,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from "@material-ui/core";
import "./style.css";
import axios from "axios";

const BusinessSetup = () => {
	const [open, setOpen] = useState(false);

	const [businessName, setbusinessName] = useState("");
	const [email, setEmail] = useState("");
	const [bio, setBio] = useState("");
	const [url, setUrl] = useState("");
	const [businessType, setBusinessType] = useState("");
	const [mobileno, setMobileno] = useState("");
	const [alterEmail, setAlterEmail] = useState("");
	const [short_bio, setShortBio] = useState("");
	const [about_us, setAboutUs] = useState("");
	const [booking_page_url, setBookingUrl] = useState("");
	const [type_of_business, setTypeOfBusiness] = useState("");
	const [alternate_email_address, setAlternateEmail] = useState("");
	const [profilePhoto, setProfilePhto] = useState("");
	const [website, setWebsite] = useState("");
	const [facebook, setFacebook] = useState("");
	const [instagram, setInstagram] = useState("");
	const [youtube, setYoutube] = useState("");
	const [whatsapp, setWhatsapp] = useState("");

	const history = useHistory();
	const CountryData = require("../../../data/countrycode.json");

	const apicall = () => {
		let data = {
			businessName: businessName,
			businessTypeId: "",
			businessUsername: "",
			customBusinessType: "",
			countryCode: "",
			bio: bio,
			email: email,
			url: url,
			businessType: businessType,
			contactNumber: mobileno,
			alterEmail: alterEmail,
			shortBio: short_bio,
			about: about_us,
			booking_page_url: booking_page_url,
			currency: "USD",
			timezone: "Asia/Singapore",
			alternateEmailId: "aeurh@asdlkfuh.org",
		};
		console.log(data);
		axios
			.post("http://13.234.241.199:8080/api/v1/store/business/60ba17344fe82b998a71cf2e", data)
			.then(resp => {
				console.log(resp);
				if (resp.message === "User registered successfully.") {
					// alertify.success(
					//   "You have been registered successfully. Check your email to verify your account"
					// );
					setTimeout(() => {
						history.push({ pathname: "/login" });
					}, 3000);
				} else if (
					resp.message ===
					"It seems you have not verified your account.Please verify your email."
				) {
					// alertify.error(resp.message);
				} else if (
					(resp.message =
						"This Email is already registered. Please enter a different email.")
				) {
					// alertify.error(resp.message);
				}
			})
			.catch(console.log("BussinessSetup completed"));
	};

	const businessSetup = e => {
		e.preventDefault();

		if ([undefined, null, ""].includes(businessName)) {
			document.getElementById("business_err").innerText = "Please Enter Business Name";
			document.getElementById("business_err").style.display = "block";
			console.log("business Name is required");
			return;
		}
		document.getElementById("business_err").style.display = "none";
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
		if ([undefined, null, ""].includes(bio)) {
			document.getElementById("bio_err").innerText = "Please Enter Bio";
			document.getElementById("bio_err").style.display = "block";
			console.log("bio is required");
			return;
		}
		document.getElementById("bio_err").style.display = "none";
		// function isURL(str) {
		const pattern =
			/(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
		if (!pattern.test(url)) {
			console.log("Invalid URL");
			document.getElementById("url_err").innerText = "URL is incorrect";
			document.getElementById("url_err").style.display = "block";
			return;
		}
		console.log("valid URL");
		// }
		document.getElementById("url_err").style.display = "none";
		if ([undefined, null, ""].includes(url)) {
			document.getElementById("url_err").innerText = "Please Enter URL";
			document.getElementById("url_err").style.display = "block";
			console.log("invalid url");
			return;
		}
		document.getElementById("url_err").style.display = "none";
		// if (!checked) {
		//   document.getElementById("checked-err").innerText =
		//     "Please  agree the terms and conditions";
		//   document.getElementById("checked-err").style.display = "block";
		//   console.log("checkbox");
		//   return;
		// }
		// document.getElementById("checked-err").style.display = "none";
		// console.log("validate email true");
		// apicall();
	};

	return (
		<div id="general_page">
			<SideBar />
			<div style={{ marginLeft: 300 }}>
				<Header to="/settings" title="Business Setup" name="Business Setup" avatar={true} />

				<Grid style={{ marginTop: 30 }} container>
					<Grid lg={4} item>
						<h3 style={{ marginTop: 0 }}>Basic Info</h3>
						<p
							style={{
								fontWeight: "light",
								fontSize: 18,
								color: "#757575",
							}}
						>
							Your business name,bio and business type are displayed across many areas
							including on your online booking profile,sales invocies and messages to
							clients
						</p>
					</Grid>
					<Grid lg={8} item>
						<form style={{ maxWidth: "65%" }}>
							<fieldset>
								<label for="name">Business Name</label>
								<div style={{ display: "flex" }}>
									<input
										type="text"
										onkeyup="nospaces(this)"
										type="text"
										placeholder="Business Name"
										onChange={e => setbusinessName(e.target.value.trim())}
									/>
								</div>
								<p
									className="errMsg"
									id="business_err"
									style={{ color: "red", display: "none" }}
								>
									First name is requreid
								</p>
								<label for="mail">Email address</label>
								<input
									type="email"
									placeholder="Email address"
									id="mail"
									onChange={e => setEmail(e.target.value.trim())}
								/>
								<p
									className="errMsg"
									id="email_err"
									style={{ color: "red", display: "none" }}
								>
									Email is requreid
								</p>
								<label for="mail">Short bio:</label>
								<input
									type="text"
									onChange={e => setBio(e.target.value.trim())}
									placeholder="Write a short bio"
								/>
								<p
									className="errMsg"
									id="bio_err"
									style={{ color: "red", display: "none" }}
								>
									Bio is requreid
								</p>
								<label for="mail">Booking Page URL:</label>
								<input
									type="text"
									id="url"
									name="user_url"
									placeholder="https://www.abc.com"
								/>
								<p
									className="errMsg"
									id="url_err"
									style={{ color: "red", display: "none" }}
								>
									URL is requreid
								</p>
								<label style={{ marginTop: 10 }} for="business">
									Type of business
								</label>
								<select id="business" name="user_job">
									<option value="Surgical Oncologist">Dance School</option>
									<option value="Clinical Oncologist">Clinical Oncologist</option>
									<option value="Healthcare Provider">
										Radiation Oncologist
									</option>
								</select>
								<label for="mail">Add about us:</label>
								<textarea
									type="text"
									autoFocus
									row="2"
									id="mail"
									name="user_email"
									placeholder="Add about us"
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
							Add your company email and phone number for sharing with clients.
						</p>
					</Grid>
					<Grid style={{ marginTop: 50 }} lg={8} item>
						<form style={{ maxWidth: 480 }}>
							<fieldset>
								<label for="name">Phone no.</label>
								<div style={{ display: "flex" }}>
									<select
										id="business"
										style={{ width: 130, height: 40 }}
										name="user_job"
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
										type="text"
										id="name"
										style={{ marginLeft: 10 }}
										name="user_name"
										placeholder="Phone no."
									/>
								</div>
								<label for="mail">Alternate Email address</label>
								<input
									type="number"
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
						<h3>Social Media Links</h3>
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
					<Grid style={{ marginTop: 50 }} lg={8} item>
						<form style={{ maxWidth: 480 }}>
							<fieldset>
								<label for="name">Phone no.</label>
								<div style={{ display: "flex" }}>
									<select
										id="business"
										style={{ width: 150, height: 40 }}
										name="user_job"
									>
										{CountryData.map((item, i) => {
											return (
												<option key={i} value={item.dial_code}>
													{item.dial_code} {item.name}
												</option>
											);
										})}
									</select>
									<div>
										<input
											type="text"
											id="name"
											style={{ marginLeft: 10 }}
											name="user_name"
											placeholder="Phone no."
											value={whatsapp}
										/>
										<div
											style={{
												fontSize: 12,
												color: "#aaa",
												marginTop: -8,
												marginLeft: 10,
											}}
											for="name"
										>
											It helps guests get in touch with you after they have
											made a booking
										</div>
									</div>
								</div>
								<div style={{ display: "flex", marginTop: 20 }}>
									<div>
										Would you like new webpage visitor to contact you via
										WhatsApp
									</div>
									<div style={{ display: "flex" }}>
										<Button
											style={{ background: "#65B1EC", color: "#fff" }}
											variant="contained"
										>
											Yes
										</Button>
										<Button>No</Button>
									</div>
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
							Add your company website and social media links for sharing with clients
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
									<YoutubeIcon
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
										onClick={() => setOpen(true)}
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
				<div>
					<Dialog
						open={open}
						onClose={() => setOpen(false)}
						aria-labelledby="alert-dialog-title"
						aria-describedby="alert-dialog-description"
					>
						<DialogTitle id="alert-dialog-title">
							{"We are sorry to see you go"}
						</DialogTitle>
						<DialogContent>
							<DialogContentText id="alert-dialog-description">
								Please write to us at hello@claroo.co raising your request to delete
								the account.We will check that there aren't any active bookings to
								be taken care of.Also we would really like to see if there is
								anything we can do to make you stay:)
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={() => setOpen(false)} color="primary" autoFocus>
								Cancel
							</Button>
						</DialogActions>
					</Dialog>
				</div>
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
						onClick={() => apicall()}
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
};
export default BusinessSetup;
