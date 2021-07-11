import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Divider, InputLabel, Select, Checkbox } from "@material-ui/core";
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
import BookingFor from "./bookingfor";
import CartCheckout from "@components/cardContent/index";

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

		color: theme.palette.text.secondary,
		flex: "1 0 auto",
		margin: theme.spacing(1),
	},

	root1: {
		minWidth: 275,
		backgroundColor: "#F8F8F8",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 18,
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
	radius: {
		borderRadius: 25,
	},
}));

export default function GuestDetail() {
	const classes = useStyles();
	const [checkedA, setcheckedA] = React.useState(true);
	const [check1, setCheck1] = React.useState(false);
	const [check2, setCheck2] = React.useState(false);
	const [state, setState] = React.useState("male");
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleCheck = () => setCheck1(!check1);
	const handleCheck2 = () => setCheck2(!check2);

	const handleChangecheck = event => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const handleDateChange = date => {
		setSelectedDate(date);
	};
	const handleGender = event => {
		setState(event.target.value);
		console.log(event.target.value);
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
							Guest Checkout
							<Box className={classes.bottomBorder} />
							<Divider />
						</Typography>
					</Grid>

					<Grid direction="row" item xs={12} md={7}>
						<Typography className={classes.pos} style={{ fontSize: "24px" }}>
							Customer details
						</Typography>

						<Box display="flex" justifyContent="space-between" mt={1.5} mb={2}>
							<Box width="48%">
								<Typography gutterBottom fontFamily="Gilroy">
									First name
									<sup>*</sup>
								</Typography>
								<TextField
									name="firstName"
									// inputRef={register({ required: "First Name is required" })}
									aria-describedby="first-name"
									color="secondary"
									variant="outlined"
									fullWidth
									// error={Boolean(errors.firstName)}
									// helperText={errors.firstName?.message}
									placeholder="First name"
									style={{ borderRadius: 25 }}
								/>
							</Box>
							<Box width="48%">
								<Typography gutterBottom fontFamily="Gilroy">
									Last name
								</Typography>
								<TextField
									name="lastName"
									// inputRef={register({ required: "Last Name is required" })}
									aria-describedby="last-name"
									color="secondary"
									variant="outlined"
									fullWidth
									// error={Boolean(errors.lastName)}
									// helperText={errors.lastName?.message}
									placeholder="Last name"
									classes={{
										radius: classes.radius,
									}}
								/>
							</Box>
						</Box>
						<Box my={2}>
							<Typography gutterBottom fontFamily="Gilroy">
								Email address<sup>*</sup>
							</Typography>
							<TextField
								name="email"
								// inputRef={register({
								// 	required: "Email address is required",
								// 	pattern: {
								// 		value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
								// 		message: "Invalid email address",
								// 	},
								// })}
								aria-describedby="email-id"
								color="secondary"
								variant="outlined"
								fullWidth
								// error={Boolean(errors.email)}
								// helperText={errors.email?.message}
								placeholder="Email address"
							/>
						</Box>
						<Box mt={2}>
							<Box display="flex" mb={0.7}>
								<Typography fontFamily="Gilroy">
									Phone number<sup>*</sup>
								</Typography>
							</Box>
							<TextField
								name="contactNumber"
								// inputRef={register}
								aria-describedby="phone-number"
								color="secondary"
								variant="outlined"
								fullWidth
								// error={Boolean(errors.contactNumber)}
								// helperText={errors.contactNumber?.message}
								placeholder="Phone number"
							/>
						</Box>
						<FormControlLabel
							control={
								<Checkbox
									checked={check1}
									onChange={handleCheck}
									name="Iwish"
									id="I-wish"
									color="secondary"
									style={{ color: "#65B1EC" }}
									size="large"
								/>
							}
							label="I agree to receive updates about my booking"
							style={{ marginTop: "2em" }}
						/>
						<Grid item xs={10}>
							<InputLabel> Booking for</InputLabel>
							<FormControl variant="outlined" style={{ marginBottom: "12px" }}>
								<FormControlLabel
									control={
										<Checkbox
											checked={state.checkedA}
											onChange={handleChangecheck}
											name="checkedA"
										/>
									}
									label="Myself"
								/>
								<BookingFor />
							</FormControl>
						</Grid>
						{/* <FormControlLabel
							control={
								<Checkbox
									checked={check2}
									onChange={handleCheck2}
									name="Booking for someone else"
									id="Booking-for-someone-else"
									color="secondary"
									style={{ color: "#65B1EC" }}
									size="large"
								/>
							}
							label="Booking for someone else"
							style={{ marginTop: "1em" }}
						/> */}
					</Grid>

					<Grid item xs={12} md={1}></Grid>
					<Grid item xs={12} md={4}>
						<CartCheckout hideCheckout={true} />
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
