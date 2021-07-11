import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Divider, Select, TextField } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import HorizontalNonLinearAlternativeLabelStepper from "@components/stepper";
import InputLabel from "@material-ui/core/InputLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import CartCheckout from "@components/cardContent/index";
import "../../styles/checkout.scss";

const useStyles1 = makeStyles(theme => ({
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
const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		// backgroundColor: "#fff",
		paddingTop: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},
	button1: {
		width: "208px",
		height: "59px",
		color: "white",
		background: "#FF8021",
		borderRadius: "5px",
		margin: "31px",
	},
	paper1: {
		padding: theme.spacing(2),
		backgroundColor: "#F8F8F8",
		color: theme.palette.text.secondary,
		flex: "1 0 auto",
		margin: "8px 0px",
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
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
		fontFamily: "Gilroy",
	},

	mt: {
		marginTop: 50,
	},
	bottomBorder: {
		width: "150px",
		height: "6px",
		backgroundColor: "#FF8021",
		// position: "absolute",
	},
}));
interface HorizontalNonLinearAlternativeLabelStepperProps {
	handleNext: any;
}
export default function Check(props: HorizontalNonLinearAlternativeLabelStepperProps) {
	const handleChangeUser = (event: any) => {
		setChangeUser(event.target.value as string);
	};

	const classes = useStyles();
	const styles1 = useStyles1();
	const [checked, setChecked] = React.useState(true);
	const [changeUser, setChangeUser] = React.useState("");
	const [state, setState] = React.useState({
		checkedA: true,
	});

	const handleChangecheck = (event: any) => {
		setState({ ...state, [event.target.name]: event.target.checked });
	};
	const handleChange = (event: any) => {
		setChecked(event.target.checked);
	};

	return (
		<div className={classes.root}>
			<Grid style={{ display: "flex" }}>
				<Grid item xs={9} style={{ marginRight: "80px" }}>
					<Typography
						variant="body1"
						className={classes.pos}
						style={{ display: "inline-flex", fontSize: "24px" }}
					>
						Please Sign Up with our Online booking partner Claroo. By signing in you can
						access all your booked sessions and schedule in your account
					</Typography>
					<Button
						variant="contained"
						style={{
							width: "100%",
							marginTop: 10,
							backgroundColor: "#4da6ff",
							padding: 15,
							color: "#fff",
						}}
					>
						<Link to="/signup" style={{ textDecoration: "none", color: "#fff" }}>
							Sign Up
						</Link>
					</Button>

					<Typography
						variant="body1"
						className={classes.pos}
						style={{
							textAlign: "center",
							display: "inline-flex",
							marginRight: 10,
							fontSize: "18px",
							marginTop: "21px",
						}}
					>
						Already have an account?
					</Typography>
					<Link to="/login">Login here</Link>
					<Button
						variant="contained"
						style={{
							width: "100%",
							marginTop: 10,
							backgroundColor: "#4da6ff",
							padding: 15,
							color: "#fff",
						}}
						onClick={props.handleNext}
					>
						Checkout as a guest
						{/* <Link to="#" style={{ textDecoration: "none", color: "#fff" }}>
							Checkout as a guest
						</Link> */}
					</Button>
				</Grid>
				<Grid item xs={3}>
					<Grid item>
						<Card className={styles1.root1}>
							<CardContent>
								<Typography className={styles1.title} gutterBottom>
									Cart summary (2 items)
								</Typography>
								<Divider />
								<br />
								<Grid container justify="space-between">
									<Typography
										className={styles1.pos}
										style={{ display: "inline-flex" }}
									>
										Class Title 1
									</Typography>
									<Typography
										className={styles1.pos}
										style={{ display: "inline-flex", marginRight: 30 }}
									>
										$43
									</Typography>
								</Grid>

								<Grid container justify="space-between">
									<Typography
										className={styles1.pos}
										style={{ display: "inline-flex" }}
									>
										Class Title 1
									</Typography>
									<Typography
										className={styles1.pos}
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
										className={styles1.pos}
										style={{ display: "inline-flex", fontWeight: "bold" }}
									>
										Total
									</Typography>
									<Typography
										className={styles1.pos}
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
							onClick={props.handleNext}
							className={classes.button1}
						>
							Proceed to customer info
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</div>
	);
}
