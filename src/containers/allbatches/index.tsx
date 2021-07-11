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
// import SearchBar from "material-ui-search-bar";
import Card from "@components/card";
import { services } from "../home/mockData";
import { filters } from "./filters";
import Button from "@components/button";
import TextField from "@material-ui/core/TextField";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import {
	Autorenew,
	Check,
	CloseOutlined,
	ScheduleOutlined,
	SelectAllRounded,
} from "@material-ui/icons";
import { addDays, format } from "date-fns";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import { useHistory } from "react-router";
import ClassTitle from "@components/class-title";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import LocationIcon from "@material-ui/icons/LocationOn";

const useStyles = makeStyles(theme => ({
	filters: {
		"& button": {
			"&:hover": {
				background: theme.palette.primary.main,
				color: "white",
			},
			marginRight: theme.spacing(1),
			marginBottom: theme.spacing(1),
			fontSize:"15px"
		},
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		// width: 200,
	},
	container: {
		display: "flex",
		flexWrap: "wrap",

	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
	FamilyandSize: {
		fontFamily: "Gilroy",
		fontSize: 18,
		marginLeft: "0.3em",
	},
	headText:{
		fontFamily: "Gilroy",
		fontSize: 24,
		fontWeight:"bold",
		marginTop:'1em'
	}
}));

export default function BatchPage() {
	const classes = useStyles();
	const history = useHistory();
	const [servicesOffered, setServicesOffered] = useState<any>(services);
	const [value, setValue] = useState("classes");
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const handleDateChange = (date: any) => {
		setSelectedDate(date);
	};
	const handleChange = (event: any, newValue: any) => {
		setValue(newValue);
		console.log(newValue);
		newValue === "classes" ? history.replace("/classes") : history.replace("/batches");
	};
	const today = new Date();
	const tomorrow = new Date(today);

	const weekday = new Array(7);
	weekday[0] = "Sun";
	weekday[1] = "Mon";
	weekday[2] = "Tue";
	weekday[3] = "Wed";
	weekday[4] = "Thu";
	weekday[5] = "Fri";
	weekday[6] = "Sat";
	let n = weekday[tomorrow.getDay() + 1];
	if (n === 7) {
		n = "sun";
	}

	if (!servicesOffered.length) setServicesOffered(services);

	const getMoreClasses = () => {
		setServicesOffered([...servicesOffered, ...services]);
	};

	return (
		<Container maxWidth="md">
			<Paper square>
				<Tabs
					value={value}
					indicatorColor="primary"
					textColor="primary"
					onChange={handleChange}
					aria-label="disabled tabs example"
				>
					<Tab label="All Classes" value="classes" defaultChecked />

					<Tab label="All Batches" value="batches" />
				</Tabs>
			</Paper>
			<Box marginTop="2em" className={classes.filters}>
				{filters.map((category: any) => (
					<Button
						variant="outlined"
						rounded="0"
						style={{ width: "8em" }}
					>
						{category.type}
					</Button>
				))}
			</Box>

			<Typography
				variant="body2"
				color="textSecondary"
			>
				Starting from
			</Typography>
			<Box mt={0.5} display="flex" justifyContent="space-between">
			<Grid container direction="row" style={{marginTop:'0.5em'}}>
						<DateRangeOutlinedIcon color="primary" style={{marginTop:'0.2em'}}/>
					<Typography variant="h6">
						{format(selectedDate, "dd MMMM yyyy")}
					</Typography>
				</Grid>

				<Grid container direction="row" style={{ marginTop: "0.5em" }}>
					<ScheduleOutlined color="primary" />
					<Typography>Indian Standard Time (IST)</Typography>
				</Grid>
			</Box>
			<Divider style={{ marginTop: "1em", width: "58.5%" }} />
			<Grid direction="row" container>
				<Grid item xs={12} md={7}>
					<Box>
						<Grid container>
							<Grid item md={8}>
								<Typography
									style={{
										fontFamily: "Gilroy",
										fontSize: 23,
										fontWeight: "bold",
										marginTop:"1em"
									}}
								>
									Batch Name
								</Typography>

								<Grid container direction="row" style={{ marginTop: "0.5em" }}>
									<DateRangeOutlinedIcon color="primary" />
									<Typography className={classes.FamilyandSize}>
										Every Mon,and Wed
									</Typography>
								</Grid>
								<Grid container direction="row" style={{ marginTop: "0.5em" }}>
									<LocationIcon color="primary" />
									<Typography className={classes.FamilyandSize}>
										Location
									</Typography>
								</Grid>
								<Grid container direction="row" style={{ marginTop: "0.5em" }}>
									<AutorenewIcon color="primary" />
									<Typography className={classes.FamilyandSize}>
										Schedule: "15" sessions left
									</Typography>
									{/* <Box> */}
							<form className={classes.container} noValidate>
								<TextField
									id="date"
									label="Select Date"
									type="date"
									defaultValue=""
									className={classes.textField}
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</form>
						{/* </Box> */}
								</Grid>
							</Grid>
						</Grid>
					</Box>
					<Divider style={{ marginTop: "1.5em", width: "100%" }}/>

					<Typography className={classes.headText}>
						16 Feb, 4:00 pm - 5:00 pm
					</Typography>	

					<Grid container direction="row" style={{ marginTop: "1em" }} justify="space-between">
						<Box border={2}
						borderRadius="borderRadius"
						marginTop="0.5em"
						borderColor="#FF8021"
						padding={1}
						>
							<Typography className={classes.FamilyandSize}>
							05/02/2021
							</Typography>
						</Box>

						<Box border={2}
						borderRadius="borderRadius"
						marginTop="0.5em"
						borderColor="#FF8021"
						padding={1}
						>
							<Typography className={classes.FamilyandSize}>
							4:00 PM - 6:00 PM
							</Typography>
						</Box>


						<Divider style={{ marginTop: "1.5em", width: "100%" }}/>
					</Grid>	

					<Typography className={classes.headText}>
						Every Mon, Tue
						</Typography>	
						<Divider style={{ marginTop: "1.5em", width: "100%" }}/>
					<Grid container direction="row" style={{ marginTop: "0.5em" }} justify="space-between">
					<form className={classes.container} noValidate>
								<TextField
									id="date"
									label="Select Date"
									type="date"
									defaultValue=""
									className={classes.textField}
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</form>
							<form className={classes.container} noValidate>
								<TextField
									id="time"
									label="Select time"
									type="time"
									defaultValue=""
									className={classes.textField}
									InputLabelProps={{
										shrink: true,
									}}
								/>
							</form>

						
					</Grid>	
					<Button
								variant="outlined"
								color="primary"
								style={{ maxWidth: "250px",marginTop:'2em'}}
							>
								Show more
							</Button>	
					



				</Grid>
				<Grid item xs={8} md={1}></Grid>
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
						<Typography variant="body2" style={{  marginTop: "0.5em",fontSize:23,fontFamily:"Gilroy" }}>
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
									maxWidth: "300px",
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
