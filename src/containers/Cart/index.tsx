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
import CartCheckout from "@components/cardContent/index";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		// backgroundColor: "#fff",
		paddingTop: 1,
	},
	button1: {
		width: "208px",
		height: "59px",
		color: "white",
		background: "#FF8021",
		borderRadius: "5px",
		margin: "31px",
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
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
	},

	mt: {
		marginTop: 50,
	},
	bottomBorder: {
		width: "200px",
		height: "6px",
		backgroundColor: "#FF8021",
		// position: "absolute",
	},
}));

export default function Cart() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				<Grid item xs={12} md={7}>
					<Grid container justify="space-between">
						<Typography
							variant="h5"
							className={classes.pos}
							style={{
								display: "inline-flex",
								fontFamily: "Gilroy",
								color: "#323232",
								fontSize: "32px",
							}}
						>
							My cart (x items)
						</Typography>

						<Typography
							variant="h5"
							className={classes.pos}
							style={{
								display: "inline-flex",
								marginRight: 30,
								fontFamily: "Gilroy",
								color: "#323232",
								fontSize: "32px",
							}}
						>
							Total:$60
						</Typography>
					</Grid>
					<Box className={classes.bottomBorder} />
				</Grid>

				<Grid item xs={6} sm={1}></Grid>

				<Grid item xs={12} style={{ marginTop: "-2.7%" }}>
					<Divider />
				</Grid>

				<Grid item xs={12} md={7}>
					<Grid item spacing={3}>
						<Grid direction="row">
							<Grid container justify="space-between">
								<Typography
									variant="h5"
									className={classes.pos}
									style={{
										display: "inline-flex",
										fontFamily: "Gilroy",
										fontSize: "24px",
									}}
								>
									Class Title 1
								</Typography>
								<Typography
									variant="h5"
									className={classes.pos}
									style={{
										display: "inline-flex",
										marginRight: 30,
										color: "#323232",
										fontSize: "32px",
									}}
									// color="textSecondary"
								>
									$43
								</Typography>
							</Grid>
							<Typography className={classes.pos} color="textSecondary">
								Prorated x session
							</Typography>
							<Typography className={classes.pos} color="textSecondary">
								Numebr of participants: 2
							</Typography>
							<Typography className={classes.pos} color="textSecondary">
								Semester Price: $300
							</Typography>
							<Grid container justify="space-between">
								<Typography
									className={classes.pos}
									style={{
										display: "inline-flex",
										color: "#323232",
										fontSize: "18px",
									}}
									// color="textSecondary"
								>
									Remove
								</Typography>
								<Typography
									className={classes.pos}
									style={{
										display: "inline-flex",
										marginRight: 30,
										color: "#323232",
										fontSize: "18px",
									}}
									// color="textSecondary"
								>
									Subtotal:$24.99
								</Typography>
							</Grid>
						</Grid>

						<Divider />
						<Grid className={classes.mt} direction="row">
							<Grid container justify="space-between">
								<Typography
									variant="h5"
									className={classes.pos}
									style={{
										display: "inline-flex",
										fontFamily: "Gilroy",
										fontSize: "24px",
									}}
								>
									Class Title 1
								</Typography>
								<Typography
									variant="h5"
									className={classes.pos}
									style={{
										display: "inline-flex",
										marginRight: 30,
										color: "#323232",
										fontSize: "32px",
									}}
									// color="textSecondary"
								>
									$43
								</Typography>
							</Grid>
							<Typography className={classes.pos} color="textSecondary">
								Prorated x session
							</Typography>
							<Typography className={classes.pos} color="textSecondary">
								Numebr of participants: 2
							</Typography>
							<Typography className={classes.pos} color="textSecondary">
								Semester Price: $300
							</Typography>
							<Grid container justify="space-between">
								<Typography
									className={classes.pos}
									style={{
										display: "inline-flex",
										color: "#323232",
										fontSize: "18px",
									}}
									// color="textSecondary"
								>
									Remove
								</Typography>
								<Typography
									className={classes.pos}
									style={{
										display: "inline-flex",
										marginRight: 30,
										color: "#323232",
										fontSize: "18px",
									}}
									// color="textSecondary"
								>
									Subtotal:$24.99
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={6} sm={1}></Grid>
				<Grid item xs={12} md={4}>
					<CartCheckout />
					<Button
						variant="contained"
						color="primary"
						// onClick={props.handleNext}
						className={classes.button1}
					>
						Proceed to checkout
					</Button>
				</Grid>
			</Grid>
		</div>
	);
}
