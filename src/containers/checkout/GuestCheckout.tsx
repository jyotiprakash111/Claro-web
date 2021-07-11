import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Divider, InputLabel, Select } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import PublishIcon from "@material-ui/icons/Publish";
import CartCheckout from "@components/cardContent/index";

const currencies = [
	{
		value: "USD",
		label: "Myself / jane (7yo) , joe (10yo)",
	},
	{
		value: "EUR",
		label: "€",
	},
	{
		value: "BTC",
		label: "฿",
	},
	{
		value: "JPY",
		label: "¥",
	},
];

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		// backgroundColor: "#fff",
		paddingTop: 1,
	},
	Field: {
		[`& fieldset`]: {
			borderRadius: 30,
		},
	},
	root2: {
		"& > *": {
			margin: theme.spacing(1),
			width: "25ch",
		},
	},

	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},

	paper1: {
		padding: theme.spacing(2),
		backgroundColor: "#F8F8F8",
		color: theme.palette.text.secondary,
		flex: "1 0 auto",
		margin: theme.spacing(1),
	},

	root1: {
		minWidth: 200,
		backgroundColor: "#F8F8F8",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
		fontFamily: "Gilroy",
	},

	mt: {
		marginTop: 50,
	},
	contentBox: {
		width: "670px",
		height: "54px",
		top: "170px",
		lineHeight: "27px",
	},
	content: {
		fontFamily: "Gilroy",
		fontSize: "18px",
		color: "#323232",
		position: "absolute",
		width: "650px",
	},
	content2: {
		fontFamily: "Gilroy",
		fontSize: "24px",
		color: "#323232",
		position: "absolute",
	},
	content3: {
		fontFamily: "Gilroy",
		fontSize: "15px",
		color: "#323232",
		position: "absolute",
	},
	formControl: {
		marginTop: theme.spacing(1),
		width: "100%",
	},
	bottomBorder: {
		width: "150px",
		height: "6px",
		backgroundColor: "#FF8021",
		// position: "absolute",
	},
}));

export default function GuestCheckout() {
	const classes = useStyles();
	const [currency, setCurrency] = React.useState("USD");
	const [value, setValue] = React.useState("female");

	const handleChange = (event: any) => {
		setCurrency(event.target.value);
		setValue(event.target.value);
	};

	return (
		<div className={classes.root}>
			<Container maxWidth="md" style={{ marginTop: "2em" }}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={12}>
						<Typography
							variant="h5"
							className={classes.pos}
							style={{ fontSize: "32px" }}
						>
							Checkout
						</Typography>
						<Box className={classes.bottomBorder} />
						<Divider />
					</Grid>

					<Grid direction="row" item xs={12} md={7}>
						<Typography
							variant="body1"
							className={classes.pos}
							style={{ fontSize: "18px" }}
						>
							Hi first name of a customer
						</Typography>

						<Paper className={classes.paper1}>
							<Grid container justify="space-between">
								<Typography
									className={classes.pos}
									style={{ display: "inline-flex" }}
									color="textSecondary"
								>
									Name: John Doe
								</Typography>
								<Typography
									className={classes.pos}
									style={{ display: "inline-flex", marginRight: 30 }}
									color="textSecondary"
								>
									Email: johndoe@gmail.com
								</Typography>
							</Grid>
							<Typography
								className={classes.title}
								color="textSecondary"
								gutterBottom
							>
								Contact no: +9199xxxxxxx
							</Typography>
						</Paper>

						<Box>
							<Typography
								variant="h5"
								className={classes.pos}
								style={{ marginTop: 50, color: "black", fontSize: "24px" }}
							>
								Who are you booking for the class
							</Typography>
						</Box>
						<Box>
							<FormControl variant="outlined" className={classes.formControl}>
								<InputLabel htmlFor="filled-age-native-simple">Select</InputLabel>
								<Select
									native
									// value={state}
									// onChange={handlePaymentMethod}
									label="Select"
									inputProps={{
										name: "Method",
										id: "outlined-age-native-simple",
									}}
								>
									<option aria-label="None" value="" />
									<option value={"GooglePay"}>Google Pay</option>
									<option value={"Paytm"}>Paytm</option>
									<option value={"PhonePay"}>PhonePay</option>
								</Select>
							</FormControl>
						</Box>

						<Box className={classes.contentBox} style={{ marginTop: "1.5em" }}>
							<Typography className={classes.content2}>
								Choose a payment method:
							</Typography>
						</Box>

						<FormControl component="fieldset">
							<RadioGroup
								aria-label="payment"
								name="payment1"
								value={value}
								onChange={handleChange}
							>
								<FormControlLabel
									value="bankTransfer"
									control={<Radio style={{ color: "#FF8021" }} />}
									label="Bank Transfer"
								/>

								{value === "bankTransfer" ? (
									<Grid direction="row" container>
										<Typography
											variant="body2"
											className={classes.pos}
											style={{ marginTop: 20, color: "black" }}
										>
											Kindly transfer the total ammount of the following bank
											account of the institute:
										</Typography>

										<Paper className={classes.paper1} style={{ width: "100%" }}>
											<Grid container justify="space-between">
												<Typography
													className={classes.pos}
													style={{ display: "inline-flex" }}
													color="textSecondary"
												>
													Account number: 1234567890
												</Typography>
												<Typography
													className={classes.pos}
													style={{
														display: "inline-flex",
														marginRight: 30,
													}}
													color="textSecondary"
												>
													IFSC Code: HDFC45674545
												</Typography>
											</Grid>
											<Grid container justify="space-between">
												<Typography
													className={classes.pos}
													style={{ display: "inline-flex" }}
													color="textSecondary"
												>
													Bank : HDFC Bank, Mumbai
												</Typography>
												<Typography
													className={classes.pos}
													style={{
														display: "inline-flex",
														marginRight: 30,
													}}
													color="textSecondary"
												>
													Account name: john doe
												</Typography>
											</Grid>
										</Paper>

										<Typography gutterBottom>
											Transaction refrence number (optional)<sup>*</sup>
										</Typography>
										<TextField
											name="email"
											aria-describedby="email-id"
											color="secondary"
											variant="outlined"
											fullWidth
											placeholder="Eg TxVXBj"
										/>

										<Typography gutterBottom>
											Transaction refrence screenshot (optional)<sup>*</sup>
										</Typography>

										<Button
											variant="outlined"
											style={{
												marginTop: "1em",
												width: "100%",
												marginBottom: "1em",
												padding: 10,
											}}
											// onClick={e => uploadFile(e)}
										>
											<PublishIcon />
											Upload Image
										</Button>
									</Grid>
								) : null}
								<FormControlLabel
									value="digitalwallet"
									control={<Radio style={{ color: "#FF8021" }} />}
									label="Digital wallet"
								/>

								{value === "digitalwallet" ? (
									<Grid direction="row" container>
										<FormControl
											variant="outlined"
											className={classes.formControl}
										>
											<InputLabel htmlFor="filled-age-native-simple">
												Select Wallet
											</InputLabel>
											<Select
												native
												// value={state}
												// onChange={handlePaymentMethod}
												label="Select Wallet"
												inputProps={{
													name: "Method",
													id: "outlined-age-native-simple",
												}}
											>
												<option aria-label="None" value="" />
												<option value={"GooglePay"}>Google Pay</option>
												<option value={"Paytm"}>Paytm</option>
												<option value={"PhonePay"}>PhonePay</option>
											</Select>
										</FormControl>

										<Paper
											className={classes.paper1}
											style={{ width: "100%", marginTop: 20 }}
										>
											<Grid container justify="space-between">
												<Typography
													className={classes.pos}
													style={{ display: "inline-flex" }}
													color="textSecondary"
												>
													UPI Id: 123456
												</Typography>
												<Typography
													className={classes.pos}
													style={{
														display: "inline-flex",
														marginRight: 30,
													}}
													color="textSecondary"
												>
													Field name: Feild value
												</Typography>
											</Grid>
										</Paper>

										<Link
											to="/"
											style={{ color: "black", marginTop: 10, fontSize: 15 }}
										>
											<PublishIcon /> Image of QR code uploaded by partner
										</Link>

										<Typography gutterBottom style={{ marginTop: 30 }}>
											Transaction refrence screenshot (optional)<sup>*</sup>
										</Typography>

										<Button
											variant="outlined"
											style={{
												marginTop: "1em",
												width: "100%",
												marginBottom: "1em",
												padding: 10,
											}}
											// onClick={e => uploadFile(e)}
										>
											<PublishIcon />
											Upload Image
										</Button>
									</Grid>
								) : null}

								<FormControlLabel
									value="cash"
									control={<Radio style={{ color: "#FF8021" }} />}
									label="Cash on arrival"
								/>
								{value === "cash" ? (
									<Grid direction="row" container>
										<Box className={classes.contentBox}>
											<Typography className={classes.content3}>
												Please carry the required amount to be paid at the
												center before the class starts
											</Typography>
										</Box>
										<Grid container direction="row">
											<div style={{ color: "#FF8021", marginRight: "1em" }}>
												<LocationOnOutlinedIcon />
											</div>
											<Typography style={{ width: "20em" }}>
												87 Science Park Drive The Oasis, #03-02, Singapore,
												118260
											</Typography>
										</Grid>

										<Grid container direction="row">
											<div
												style={{
													color: "#FF8021",
													marginRight: "1em",
													marginTop: "1em",
												}}
											>
												<CallOutlinedIcon />
											</div>
											<Typography style={{ width: "20em", marginTop: "1em" }}>
												(+91) - 556-536-8512
											</Typography>
										</Grid>
										<Grid container style={{ marginTop: "1em" }}></Grid>
									</Grid>
								) : null}
							</RadioGroup>
						</FormControl>
					</Grid>

					<Grid item xs={12} md={1}></Grid>

					<Grid item xs={12} md={4}>
						<CartCheckout buttonName="CHECKOUT" path="/payment" />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
