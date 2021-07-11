import Footer from "@components/footer";
import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Container,
	Divider,
	FormControl,
	FormControlLabel,
	Grid,
	GridList,
	InputLabel,
	makeStyles,
	Radio,
	RadioGroup,
	Select,
	TextField,
	Typography,
	Checkbox,
} from "@material-ui/core";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
import PublishIcon from "@material-ui/icons/Publish";
import React from "react";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import CallOutlinedIcon from "@material-ui/icons/CallOutlined";
import Paper from "@material-ui/core/Paper";
import Upload1 from "./upload";
const useStyles = makeStyles(theme => ({
	checkouttxt: {
		width: "142px",
		height: "39px",
		fontWeight: "bold",
	},
	button1: {
		width: "208px",
		height: "59px",
		color: "white",
		background: "#FF8021",
		borderRadius: "5px",
		margin: "31px",
	},
	fonttxt: {
		fontFamily: "Gilroy",
		fontSize: "32px",
		lineHeight: "37.5px",
		color: "#323232",
		position: "absolute",
	},
	bottomBorder: {
		width: "150px",
		height: "6px",
		backgroundColor: "#FF8021",
		// position: "absolute",
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
	name: {
		// position: "absolute",
		fontFamily: "Gilroy",
		fontSize: "18px",
		lineHeight: "150%",
		color: "#323232",
		opacity: "45%",
		left: "120px",
		width: "100px",
		marginTop: "0.5em",
		top: "130px",
		marginBottom: "0.5em",
	},
	subName: {
		width: "200px",
		height: "30px",
		fontFamily: "Gilroy",
		fontSize: "18px",
		color: "#323232",
	},
	formControl: {
		marginTop: theme.spacing(1),
		width: "100%",
	},
	selectEmpty: {
		marginTop: theme.spacing(2),
	},
	root1: {
		minWidth: 245,
		backgroundColor: "#F8F8F8",
	},

	paper1: {
		padding: theme.spacing(2),
		marginTop: 5,
		color: theme.palette.text.secondary,
		flex: "1 0 auto",
		// margin: theme.spacing(1),
		backgroundColor: "#F8F8F8",
	},

	title: {
		fontSize: 18,
	},
	pos: {
		marginBottom: 12,
		fontFamily: "Gilroy",
	},
	paper3: {
		backgroundColor: theme.palette.background.paper,
		width: 600,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
	modal: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
}));

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

// interface HorizontalNonLinearAlternativeLabelStepperProps {
// 	handleNext: any;
// }

export default function FinalPayment() {
	const styles = useStyles();
	const [value, setValue] = React.useState("");
	const [agreement, setAgreement] = React.useState(false);
	const [state, setState] = React.useState("GooglePay");
	const [modalStyle] = React.useState(getModalStyle);

	const setUserAgreement = () => setAgreement(!agreement);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
		console.log(event.target.value);
	};

	const handlePaymentMethod = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
		setState((event.target as HTMLInputElement).value);
		console.log(event.target.value);
	};

	const uploadFile = (event: any) => {
		console.log(event.target.files);
	};

	const [open, setOpen] = React.useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<Grid container xs={12} spacing={2}>
			<Grid item xs={9}>
				<Typography variant="body1" className={styles.pos}>
					Kindly verify your personal details given below and then proceed to complete
					filling the payment details.
				</Typography>
				<Paper className={styles.paper1}>
					<Typography
						className={styles.pos}
						style={{ display: "inline-flex" }}
						color="textSecondary"
					>
						Name: John Doe
					</Typography>
					<Grid container justify="space-between">
						<Typography
							className={styles.pos}
							style={{ display: "inline-flex", marginRight: 30 }}
							color="textSecondary"
						>
							Email: johndoe@gmail.com
						</Typography>
						<Typography className={styles.pos} color="textSecondary" gutterBottom>
							Contact no: +9199xxxxxxx
						</Typography>
					</Grid>
					<Typography className={styles.pos} color="textSecondary" gutterBottom>
						Participant: jane, Joe
					</Typography>
				</Paper>

				<Box className={styles.contentBox} style={{ marginTop: "1.5em" }}>
					<Typography className={styles.content2}>Choose a payment method:</Typography>
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
									className={styles.pos}
									style={{ marginTop: 20, color: "black" }}
								>
									Kindly transfer the total ammount of the following bank account
									of the institute:
								</Typography>

								<Paper className={styles.paper1} style={{ width: "100%" }}>
									<Grid container justify="space-between">
										<Typography
											className={styles.pos}
											style={{ display: "inline-flex" }}
											color="textSecondary"
										>
											Account number: 1234567890
										</Typography>
										<Typography
											className={styles.pos}
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
											className={styles.pos}
											style={{ display: "inline-flex" }}
											color="textSecondary"
										>
											Bank : HDFC Bank, Mumbai
										</Typography>
										<Typography
											className={styles.pos}
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

								<Typography gutterBottom style={{ marginTop: "20px" }}>
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
								<Typography gutterBottom style={{ marginTop: "20px" }}>
									Booking notes / comments<sup>*</sup>
								</Typography>
								<TextField
									name="Booking notes / comments"
									aria-describedby="email-id"
									color="secondary"
									variant="outlined"
									fullWidth
									placeholder="Eg TxVXBj"
								/>

								<Grid style={{ marginTop: "20px" }}>
									<Typography gutterBottom>
										Transaction refrence screenshot (optional)<sup>*</sup>
									</Typography>
									<Upload1 />
								</Grid>
								{/* <Button
									variant="outlined"
									style={{
										marginTop: "1em",
										width: "100%",
										marginBottom: "1em",
										padding: 10,
									}}
									onClick={e => uploadFile(e)}
								>
									<PublishIcon />
									Upload Image
								</Button> */}
							</Grid>
						) : null}
						<FormControlLabel
							value="digitalwallet"
							control={<Radio style={{ color: "#FF8021" }} />}
							label="Digital wallet"
							style={{ marginTop: "20px" }}
						/>

						{value === "digitalwallet" ? (
							<Grid direction="row" container>
								{/* <Typography  variant="body2"  className={styles.pos} style={{ marginTop:20 , color:'black'}}  color="textSecondary">

 Kindly transfer the total ammount of the following bank account of the institute:
        </Typography> */}

								<FormControl variant="outlined" className={styles.formControl}>
									<InputLabel htmlFor="filled-age-native-simple">
										Select Wallet
									</InputLabel>
									<Select
										native
										value={state}
										onChange={handlePaymentMethod}
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
									className={styles.paper1}
									style={{ width: "100%", marginTop: 20 }}
								>
									<Grid
										container
										justify="space-between"
										style={{ marginTop: "20px" }}
									>
										<Typography
											className={styles.pos}
											style={{ display: "inline-flex" }}
											color="textSecondary"
											gutterBottom
										>
											UPI Id: 123456
										</Typography>
										<Typography
											gutterBottom
											className={styles.pos}
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
								<Typography gutterBottom style={{ marginTop: "20px" }}>
									Booking notes / comments<sup>*</sup>
								</Typography>
								<TextField
									name="Booking notes / comments"
									aria-describedby="email-id"
									color="secondary"
									variant="outlined"
									fullWidth
									placeholder="Eg TxVXBj"
								/>

								<Grid style={{ marginTop: "20px" }}>
									<p>Image of QR code uploaded by partner</p>
									<img src="https://camo.githubusercontent.com/0d870692cb23d884547d22054dfab40f4b68af499643acf4c95c067d2a83fa29/68747470733a2f2f696d672e616c6963646e2e636f6d2f7466732f544231514d782e4a7748714b31526a535a4a6e5858624e4c7058612d3236302d3236302e706e67" />
									<Grid style={{ marginTop: "20px" }}>
										<h1>Upload Image</h1>
										<Grid>
											<Upload1 />
										</Grid>
									</Grid>
								</Grid>

								{/*             
								<Button variant="contained" style={{width:'25%', padding:10, color:'#fff'}} color="primary">
								Submit
								</Button> */}
							</Grid>
						) : // 						  <Container maxWidth="md" style={{marginTop:10}} >

						// 	                           <Typography>Name of the wallet used</Typography>
						// 								<FormControl variant="outlined" className={styles.formControl}>
						// 									<InputLabel htmlFor="filled-age-native-simple">
						// 										Select Wallet
						// 									</InputLabel>
						// 									<Select
						// 										native
						// 										value={state}
						// 										onChange={handlePaymentMethod}
						// 										label="Select Wallet"
						// 										inputProps={{
						// 											name: "Method",
						// 											id: "outlined-age-native-simple",
						// 										}}
						// 									>
						// 										<option aria-label="None" value="" />
						// 										<option value={"GooglePay"}>Google Pay</option>
						// 										<option value={"Paytm"}>Paytm</option>
						// 										<option value={"PhonePay"}>PhonePay</option>
						// 									</Select>
						// 								</FormControl>
						// {/*
						// 							  <Paper className={styles.paper1}>

						//  <Grid container justify='space-between'  >

						//         <Typography     className={styles.pos} style={{display:'inline-flex' , marginRight:30}}  color="textSecondary">

						//         UPI Id:  123456
						//         </Typography>
						// 		  <Typography className={styles.pos} color="textSecondary" gutterBottom>
						//          Field name:  Feild value
						//            </Typography>
						//         </Grid>

						//        </Paper> */}

						// 								<Grid container direction="row" style={{ marginTop: "3em" }}>
						// 									<TextField
						// 										name="UPI Id"
						// 										aria-describedby="UPI Id"
						// 										color="primary"
						// 										variant="outlined"
						// 										placeholder="UPI Id"
						// 									/>
						// 									<TextField
						// 										name="Field name"
						// 										aria-describedby="Field name"
						// 										color="primary"
						// 										variant="outlined"
						// 										placeholder="Field name"
						// 									/>
						// 								</Grid>

						// 								<Typography style={{ marginTop: "1em" }}>
						// 									Upload screenshot of the transaction
						// 								</Typography>
						// 								{/* <input type="file" accept="image/*" style={{ display: "none" }} /> */}

						// 								{/* <Box
						// 						border={1}
						// 						height="3em"
						// 						width="600px"
						// 						borderColor="#E5E5E5"
						// 						borderRadius="borderRadius"
						// 						top="250px"
						// 					>
						//                     <Grid
						//                     justify="center"
						//                     direction="row"
						//                     alignItems="center"
						//                     >

						//                     <div>
						//                         </div>
						//                         	<input onChange={e => uploadFile(e)} type="file" id="files" />

						//                     </Grid>
						// 					</Box> */}

						// 								<Button
						// 									variant="outlined"
						// 									style={{
						// 										marginTop: "1em",
						// 										width: "600px",
						// 										marginBottom: "1em",
						// 									}}
						// 									onClick={e => uploadFile(e)}
						// 								>
						// 									<PublishIcon />
						// 									Upload Image
						// 								</Button>

						// 							</Container>
						null}

						<FormControlLabel
							value="cash"
							control={<Radio style={{ color: "#FF8021" }} />}
							label="Cash on arrival"
							style={{ marginTop: "20px" }}
						/>
						{value === "cash" ? (
							<Grid direction="row" container>
								<Box className={styles.contentBox}>
									<Typography className={styles.content3}>
										Please carry the required amount to be paid at the center
										before the class starts
									</Typography>
								</Box>
								<Grid container direction="row">
									<div style={{ color: "#FF8021", marginRight: "1em" }}>
										<LocationOnOutlinedIcon />
									</div>
									<Typography style={{ width: "20em" }}>
										87 Science Park Drive The Oasis, #03-02, Singapore, 118260
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
								<Grid style={{ display: "flex", marginTop: "20px" }} spacing={3}>
									<Button
										variant="outlined"
										style={{ marginRight: "30px" }}
										color="primary"
									>
										Call Us
									</Button>
									<Button
										variant="outlined"
										style={{ marginRight: "30px" }}
										color="primary"
									>
										Email Us
									</Button>
									<Button
										variant="outlined"
										style={{ marginRight: "30px" }}
										color="primary"
									>
										Text Us
									</Button>
								</Grid>
								<Grid container style={{ marginTop: "1em" }}>
									{/* <Button
						variant="contained"
						color="primary"
						style={{ width: "10em", color: "#fff" }}
					>
						Submit
					</Button> */}
								</Grid>
							</Grid>
						) : null}
					</RadioGroup>
				</FormControl>

				{/* <Box
					border={1}
					height="10em"
					width="600px"
					borderColor="#E5E5E5"
					borderRadius="borderRadius"
					marginTop="1em"
				>
					<Box style={{ marginLeft: "20px", position: "absolute" }} position="absolute">
						<Grid container direction="row" justify="flex-start" alignItems="center">
							<Typography className={styles.name}>Name:</Typography>
							<Typography className={styles.subName}>John Doe</Typography>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center">
							<Typography className={styles.name}>Email:</Typography>
							<Typography className={styles.subName}>john.doe@gmail.com</Typography>
							<Typography className={styles.name}>Contact no:</Typography>
							<Typography className={styles.subName}>+91 xxx</Typography>
						</Grid>

						<Grid container direction="row" justify="flex-start" alignItems="center">
							<Typography className={styles.name}>Participant:</Typography>
							<Typography className={styles.subName}>Jane, Joe</Typography>
						</Grid>
					</Box>
				</Box> */}
			</Grid>
			<Grid item xs={3}>
				<Card className={styles.root1}>
					<CardContent>
						<Typography className={styles.title} gutterBottom>
							Cart summary (2 items)
						</Typography>
						<Divider />
						<br />
						<Grid container justify="space-between">
							<Typography className={styles.pos} style={{ display: "inline-flex" }}>
								Class Title 1
							</Typography>
							<Typography
								className={styles.pos}
								style={{ display: "inline-flex", marginRight: 30 }}
							>
								$43
							</Typography>
						</Grid>

						<Grid container justify="space-between">
							<Typography className={styles.pos} style={{ display: "inline-flex" }}>
								Class Title 1
							</Typography>
							<Typography
								className={styles.pos}
								style={{ display: "inline-flex", marginRight: 30 }}
							>
								$43
							</Typography>
						</Grid>
						<br />
						<Divider />
						<br />

						<Grid container justify="space-between">
							<Typography
								className={styles.pos}
								style={{ display: "inline-flex", fontWeight: "bold" }}
							>
								Total
							</Typography>
							<Typography
								className={styles.pos}
								style={{
									display: "inline-flex",
									marginRight: 30,
									fontWeight: "bold",
								}}
							>
								$60
							</Typography>
						</Grid>
						<Divider />
					</CardContent>
				</Card>
				<Button
					variant="contained"
					color="primary"
					// onClick={props.handleNext}
					className={styles.button1}
				>
					Done
				</Button>
			</Grid>
		</Grid>
	);
}
