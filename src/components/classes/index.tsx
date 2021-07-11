import React, { useState } from "react";
import {
	Box,
	Breadcrumbs,
	Container,
	Grid,
	makeStyles,
	Typography,
	Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import SearchBar from "material-ui-search-bar";
import Card from "@components/card";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Button from "@components/button";
// import TemporaryDrawer from "../drawer/index";

const useStyles = makeStyles(theme => ({
	filters: {
		"& button": {
			marginRight: theme.spacing(2),
			marginBottom: theme.spacing(2),
		},
	},
	card: {
		"&:hover": {
			borderColor: theme.palette.primary.main,
		},
	},
}));
export default function ClassesPage() {
	const classes = useStyles();
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	return (
		<Container maxWidth="md">
			<Grid direction="row" container>
				<Grid item xs={12} md={6}>
					<Grid style={{ margin: "2em 0" }}>
						<Typography variant="h6">8 Feb</Typography>
					</Grid>
					<Box
						border={2}
						borderRadius="borderRadius"
						marginTop="1em"
						borderColor="lightGrey"
						className={classes.card}
					>
						<Grid xs={12} sm={12}>
							<Typography
								variant="body1"
								color="primary"
								style={{ marginLeft: "1em", marginTop: "1em" }}
							>
								5:00 PM - 6:00 PM{" "}
							</Typography>
							<Grid
								container
								direction="row"
								style={{ marginLeft: "1em", marginTop: "1em" }}
							>
								<AutorenewIcon color="primary" style={{ marginRight: "0.5em" }} />
								<Typography variant="body2">Every Mon, Wed & Fri</Typography>
							</Grid>
							<Grid
								container
								direction="row"
								style={{ marginLeft: "1em", marginTop: "0.5em" }}
							>
								<MonetizationOnIcon
									color="primary"
									style={{ marginRight: "0.5em" }}
								/>
								<Typography variant="body2" color="initial">
									Trial, Drop-in, Semester, other packages
								</Typography>
							</Grid>
							<Box mt={0.5} display="flex" justifyContent="space-between">
								<Box marginTop="2.4em" style={{ marginLeft: "1em" }}>
									<Typography variant="body2">From</Typography>
									<Typography>$79.99</Typography>
								</Box>
								<Grid
									container
									alignItems="flex-end"
									direction="column"
									style={{ margin: "1em" }}
								>
									<Typography
										style={{
											margin: "0em 7",
										}}
									>
										5 spots left!
									</Typography>
									<Button
										variant="outlined"
										color="primary"
										style={{ color: "white", background: "#FF8021" }}
									>
										Selected
									</Button>
								</Grid>
							</Box>
						</Grid>
					</Box>
					<Box
						border={2}
						borderColor="lightGrey"
						className={classes.card}
						borderRadius="borderRadius"
						marginTop="1em"
					>
						<Grid xs={12} sm={12}>
							<Typography
								variant="body1"
								color="primary"
								style={{ marginLeft: "1em", marginTop: "1em" }}
							>
								5:00 PM - 6:00 PM{" "}
							</Typography>
							<Grid
								container
								direction="row"
								style={{ marginLeft: "1em", marginTop: "1em" }}
							>
								<AutorenewIcon color="primary" style={{ marginRight: "0.5em" }} />
								<Typography variant="body2">Every Mon, Wed & Fri</Typography>
							</Grid>
							<Grid
								container
								direction="row"
								style={{ marginLeft: "1em", marginTop: "0.5em" }}
							>
								<MonetizationOnIcon
									color="primary"
									style={{ marginRight: "0.5em" }}
								/>
								<Typography variant="body2" color="initial">
									Trial, Drop-in, Semester, other packages
								</Typography>
							</Grid>
							<Box mt={0.5} display="flex" justifyContent="space-between">
								<Box marginTop="2.4em" style={{ marginLeft: "1em" }}>
									<Typography variant="body2">From</Typography>
									<Typography>$79.99</Typography>
								</Box>
								<Grid
									container
									alignItems="flex-end"
									direction="column"
									style={{ margin: "1em" }}
								>
									<Typography
										style={{
											margin: "0em 7",
										}}
									>
										5 spots left!
									</Typography>
									<Button
										variant="outlined"
										color="primary"
										style={{ color: "white", background: "#FF8021" }}
									>
										Selected
									</Button>
								</Grid>
							</Box>
						</Grid>
					</Box>

					<Grid style={{ marginTop: "1em" }}>
						<Typography variant="h6">10 Feb</Typography>
					</Grid>
					<Box
						border={2}
						borderColor="lightGrey"
						className={classes.card}
						borderRadius="borderRadius"
						marginTop="1em"
					>
						<Grid style={{ margin: "0.8em" }} xs={12} sm={12}>
							<Typography variant="h6">The Friday Batch </Typography>
							<Typography variant="body2">Every Mon, Wed & Fri</Typography>
							<Box mt={0.5} display="flex" justifyContent="space-between">
								<Box marginTop="5.7em">
									<Typography>$79.99</Typography>
								</Box>
								<Grid
									direction="column"
									style={{ marginRight: "0.5em", marginTop: "2.7em" }}
								>
									<Typography
										style={{
											margin: "0em 7",
										}}
									>
										5 spots left!
									</Typography>
									<Button
										variant="outlined"
										color="primary"
										className="choose-btn"
									>
										Choose
									</Button>
								</Grid>
							</Box>
						</Grid>
					</Box>

					<Box
						border={2}
						borderColor="lightGrey"
						className={classes.card}
						borderRadius="borderRadius"
						marginTop="1em"
					>
						<Grid style={{ margin: "0.8em" }} xs={12} sm={12}>
							<Typography variant="h6">The Friday Batch </Typography>
							<Typography variant="body2">Every Mon, Wed & Fri</Typography>
							<Box mt={0.5} display="flex" justifyContent="space-between">
								<Box marginTop="5.7em">
									<Typography>$79.99</Typography>
								</Box>
								<Grid
									direction="column"
									style={{ marginRight: "0.5em", marginTop: "2.7em" }}
								>
									<Typography
										style={{
											margin: "0em 7",
										}}
									>
										5 spots left!
									</Typography>
									<Button
										variant="outlined"
										color="primary"
										style={{ color: "white", background: "#FF8021" }}
									>
										Choose
									</Button>
								</Grid>
							</Box>
						</Grid>
					</Box>
					<Button
						variant="outlined"
						className="show-more-btn"
						color="primary"
						style={{ marginTop: "1em" }}
					>
						Show More
					</Button>
				</Grid>
				<Grid item xs={8} md={2}></Grid>
				<Grid item xs={12} md={4}>
					<Box
						border={2}
						// height="40%"
						width="100%"
						borderColor="lightGrey"
						borderRadius="borderRadius"
						marginTop="1em"
						justifyContent="flex-end"
						padding={0.5}
					>
						<Grid style={{ marginLeft: "0.8em" }} md={12}>
							<Typography
								variant="body2"
								style={{ marginTop: "0.5em", fontSize: 23, fontFamily: "Gilroy" }}
							>
								Class title{" "}
							</Typography>
							<Typography variant="h6" style={{ marginTop: "1em" }}>
								8 Feb, 5:00pm - 6:00pm{" "}
							</Typography>
							<Typography variant="body2" style={{ marginTop: "1.5em" }}>
								Batch ---- Batch name
							</Typography>
							<Typography variant="body2" style={{ marginTop: "1em" }}>
								Schedule ---- weekly- x,y
							</Typography>
							<Typography variant="body2" style={{ marginTop: "1em" }}>
								Location ---- online
							</Typography>
							<Typography
								variant="body2"
								style={{ marginTop: "3em" }}
								color="primary"
							>
								5 seats left!
							</Typography>
							<Typography variant="h6" style={{ marginTop: "0.5em" }} color="primary">
								$79.99
							</Typography>
							<Button
								variant="outlined"
								style={{
									maxWidth: "250px",
									maxHeight: "40px",
									minWidth: "250px",
									minHeight: "40px",
									marginBottom: "8px",
									marginTop: "8px",
									color: "white",
									background: "#FF8021",
								}}
							>
								Confirm and Continue
							</Button>
						</Grid>
					</Box>
					<Box width="90%" marginLeft="1em" marginTop="1em">
						<Typography variant="body2">
							Don't see a time that work for you ?
							<Button
								variant="outlined"
								color="primary"
								style={{ maxWidth: "250px", marginLeft: "30px" }}
							>
								Request a new time
							</Button>{" "}
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
}
