import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor:"#F8F8F8",
		paddingTop: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},

	root1: {
		// position: "absolute",
		marginTop: "0.5em",
		backgroundColor:"#F8F8F8",
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
	},

	mt: {
		marginTop: 50,
	},
	checkouttxt: {
		fontWeight: "bold",
	},
	fonttxt: {
		fontSize: "30px",
		lineHeight: "37.5px",
		color: "#323232",
		// position: "absolute",
		fontFamily: "Gilroy",
	},
	fonttxt1: {
		fontSize: "30px",
		color: "#323232",
		fontFamily: "Gilroy",
	},
	bottomBorder: {
		minWidth: "240px",
		maxWidth: "600px",
		height: "6px",
		backgroundColor: "#FF8021",
		// position: "absolute",
		marginTop: 5,
	},
	paper1: {
		padding: theme.spacing(2),
		marginTop: 5,
		color: theme.palette.text.secondary,
		flex: "1 0 auto",
		// margin: theme.spacing(1),
	},
	text1: {
		fontSize: "15px",
		fontFamily: "Gilroy",
		fontWeight: 300,
		width: "110px",
		height: "23px",
		fontStyle: "normal",
		lineHeight: "150%",
		position: "absolute",
	},
	text2: {
		// position: "absolute",
		width: "148px",
		height: "36px",
		fontSize: "24px",
		fontFamily: "Gilroy",
		fontStyle: "normal",
		lineHeight: "150%",
		marginTop: "40px",
	},
	cardText: {
		marginTop: "0.3em",
		fontFamily: "Gilroy",
		fontSize: "20px",
	},
	newText: {
		fontSize: "18px",
		fontFamily: "Gilroy",
	},
}));

export default function SuccessPay() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Container maxWidth="md" style={{ marginTop: 60 }}>
				<Box marginTop="2em" className={classes.checkouttxt}>
					<Typography className={classes.fonttxt}>
						Yay! You have Successfully made a booking
					</Typography>
				</Box>
				<Box className={classes.bottomBorder} />
				<Divider />
				<Grid container spacing={3}>
					<Grid item xs={12} md={10}>
						<Typography className={classes.fonttxt1}>
							Your booking request has been sent
						</Typography>
						<Typography variant="body1" style={{ fontFamily: "Gilroy" }}>
							Email has been sent to "email id"
						</Typography>
						<Typography
							variant="body1"
							style={{ marginTop: "0.5em", fontFamily: "Gilroy" }}
						>
							You will hear back from Claroo soon with further details. You can see
							the class in “pending transaction” tab in your profile, once the booking
							is accepted by the provider it will move to ‘Bookings’
						</Typography>
						<Grid direction="row" container>
							<Grid item xs={12} md={12}>
								<Card className={classes.root1}>
									
									<CardContent>
										
										<Typography className={classes.text1}>
											Business name
										</Typography>
										{/* <Grid container direction="row" justify="space-between" xs={6}>
										<Typography>
											mdlldsnn
										</Typography>
										</Grid> */}
										<Typography className={classes.text2}>
											Class title 1
										</Typography>
										<Grid
											container
											direction="row"
											justify="space-between"
											xs={6}
										>
											<Typography
												className={classes.newText}
												color="textSecondary"
											>
												Start:
											</Typography>
											<Typography
												className={classes.newText}
												color="textSecondary"
											>
												Total Sessions:
											</Typography>
										</Grid>
										<Grid
											container
											direction="row"
											justify="space-between"
											xs={6}
										>
											<Typography className={classes.cardText}>
												Mon, 11th February
											</Typography>
											<Typography className={classes.cardText}>
												132 sessions
											</Typography>
										</Grid>
										<Typography className={classes.cardText}>
											10:00-11:00 AM
										</Typography>
										<Typography
											className={classes.newText}
											color="textSecondary"
										>
											Attendees:
										</Typography>
										<Typography className={classes.cardText}>
											John, Aaron, Paul
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
						<Grid direction="row" container style={{ marginTop: "1em" }}>
							<Grid item xs={12} md={12}>
								<Card className={classes.root1}>
									<CardContent>
										<Typography className={classes.text1}>
											Business name
										</Typography>
										<Typography className={classes.text2}>
											Class title 1
										</Typography>
										<Grid
											container
											direction="row"
											justify="space-between"
											xs={6}
										>
											<Typography
												className={classes.newText}
												color="textSecondary"
											>
												Start:
											</Typography>
											<Typography
												className={classes.newText}
												color="textSecondary"
											>
												Total Sessions:
											</Typography>
										</Grid>
										<Grid
											container
											direction="row"
											justify="space-between"
											xs={6}
										>
											<Typography className={classes.cardText}>
												Mon, 11th February
											</Typography>
											<Typography className={classes.cardText}>
												132 sessions
											</Typography>
										</Grid>
										<Typography className={classes.cardText}>
											10:00-11:00 AM
										</Typography>
										<Typography
											className={classes.newText}
											color="textSecondary"
										>
											Attendees:
										</Typography>
										<Typography className={classes.cardText}>
											John, Aaron, Paul
										</Typography>
										<Grid container md={4}>
											<Divider orientation="vertical" />
										</Grid>
									</CardContent>
								</Card>
							</Grid>
						</Grid>

						<Grid container xs={10} justify="space-between" >
							<Button
								variant="outlined"
								style={{
									marginTop: "1em",
									marginBottom: "1em",
									padding: 10,
								}}
								color="primary"
							>
								Checkout my transaction
							</Button>
							<Button
								variant="contained"
								style={{
									marginTop: "1em",
									marginBottom: "1em",
									padding: 10,
									color: "#fff",
								}}
								color="primary"
							>
								Book another session
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
