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
import { services } from "../home/mockData";
import { filters } from "./filters";
import Button from "@components/button";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { Check, CloseOutlined, ScheduleOutlined, SelectAllRounded } from "@material-ui/icons";
import { addDays, format } from "date-fns";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const useStyles = makeStyles(theme => ({
	filters: {
		"& button": {
			"&:hover": {
				background: theme.palette.primary.main,
				color: "white",
			},
			marginRight: theme.spacing(2),
			marginBottom: theme.spacing(2),
		},
	},
	root: {
		fontFamily: "Gilroy",
	},
}));

export default function SchedulerPage() {
	const classes = useStyles();
	const [servicesOffered, setServicesOffered] = useState<any>(services);
	const [value, setValue] = useState("Schedule");
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const handleDateChange = (date: any) => {
		setSelectedDate(date);
	};
	const handleChange = (event: any, newValue: any) => {
		setValue(newValue);
	};
	const today = new Date();
	const tomorrow = new Date(today);
	let n;
	const weekday = new Array(7);
	weekday[0] = "Sun";
	weekday[1] = "Mon";
	weekday[2] = "Tue";
	weekday[3] = "Wed";
	weekday[4] = "Thu";
	weekday[5] = "Fri";
	weekday[6] = "Sat";
	if (tomorrow.getDay() + 1 === 7) {
		n = weekday[0];
	} else {
		n = weekday[tomorrow.getDay() + 1];
	}

	if (!servicesOffered.length) setServicesOffered(services);

	const getMoreClasses = () => {
		setServicesOffered([...servicesOffered, ...services]);
	};

	return (
		<Container maxWidth="md" className={classes.root}>
			<Box marginTop="2em">
				<Breadcrumbs separator=">" aria-label="breadcrumb">
					<Link to="/home">Home</Link>
					<Typography color="textPrimary">Schedule</Typography>
				</Breadcrumbs>
			</Box>
			<Box marginTop="0.5em">
				<Typography style={{ fontSize: "56px", fontFamily: "Gilroy" }}>Schedule</Typography>
			</Box>
			<Box marginTop="0.5em" className={classes.filters}>
				{filters.map((category: any) => (
					<Button variant="outlined" rounded="0" style={{ width: "15em" }}>
						{category.type}
					</Button>
				))}
			</Box>

			<Typography variant="body2" color="textSecondary">
				Starting from
			</Typography>
			<Box mt={0.5} display="flex" justifyContent="space-between">
				<Grid container direction="row" style={{ marginTop: "0.5em" }}>
					<DateRangeOutlinedIcon color="primary" style={{ marginTop: "0.2em" }} />
					<Typography variant="h6">{format(selectedDate, "dd MMMM yyyy")}</Typography>
				</Grid>
				<Grid container direction="row" justify="flex-end" style={{ marginTop: "0.5em" }}>
					<ScheduleOutlined color="primary" />
					<Typography style={{ fontFamily: "Gilroy" }}>
						Indian Standard Time (IST)
					</Typography>
				</Grid>
				{/* <Box display="flex" alignItems="center">
					&nbsp; &nbsp;Indian Standard Time (IST)
				</Box> */}
			</Box>
			<Divider style={{ marginTop: "1em" }} />

			<Grid container xs={12} md={12} justify="space-between" style={{ marginTop: "1em" }}>
				<Grid item md={1}>
					<Typography variant="h6">
						{format(tomorrow.setDate(tomorrow.getDate() + 1), "dd MMMM")},{n}
					</Typography>
				</Grid>

				<Grid item md={1}>
					<Typography variant="body1">4:00 pm</Typography>
				</Grid>
				<Grid item direction="row" xs={12} md={7} spacing={3}>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						<FiberManualRecordRoundedIcon
							color="primary"
							style={{ marginRight: "0.5em" }}
						/>
						<Typography>Class Title</Typography>
					</Grid>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						<ScheduleOutlined color="primary" style={{ marginRight: "0.5em" }} />
						<Typography>Batch Name</Typography>
					</Grid>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						<LocationOnOutlinedIcon color="primary" style={{ marginRight: "0.5em" }} />
						<Typography>Location</Typography>
					</Grid>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						<PeopleOutlineIcon color="primary" style={{ marginRight: "0.5em" }} />
						<Typography>Instructor Name</Typography>
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					md={1}
					justify="flex-end"
					spacing={3}
					style={{ marginTop: "0.5em" }}
				>
					<Typography variant="body1">Price from </Typography>
					<Typography variant="body1">$79.99 </Typography>

					<Typography variant="body1" style={{ marginTop: "1em" }}>
						5 spots left!{" "}
					</Typography>
					<Typography>
						<Button
							size="small"
							variant="outlined"
							style={{
								color: "white",
								background: "#FF8021",
								width: "7em",
								padding: "0.5em",
							}}
						>
							Choose
						</Button>
					</Typography>
				</Grid>
			</Grid>
			<Divider style={{ marginTop: "2em" }} />
			<Grid container xs={12} md={12} justify="space-between" style={{ marginTop: "1em" }}>
				<Grid item md={1}>
					<Typography variant="h6">
						{format(tomorrow.setDate(tomorrow.getDate() + 1), "dd MMMM")},{n}
					</Typography>
				</Grid>

				<Grid item md={1}>
					<Typography variant="body1">4:00 pm</Typography>
				</Grid>
				<Grid item direction="row" xs={12} md={7} spacing={3}>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						<FiberManualRecordRoundedIcon
							color="primary"
							style={{ marginRight: "0.5em" }}
						/>
						<Typography>Class Title</Typography>
					</Grid>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						<ScheduleOutlined color="primary" style={{ marginRight: "0.5em" }} />
						<Typography>Batch name. Default recommendation:</Typography>
					</Grid>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						{/* <LocationOnOutlinedIcon color="primary" style={{marginRight:"0.5em"}} /> */}
						<Typography>Location Instructor</Typography>
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					md={1}
					justify="flex-end"
					spacing={3}
					style={{ marginTop: "0.5em" }}
				>
					<Typography variant="body1">Price from </Typography>
					<Typography variant="body1">$79.99 </Typography>
					<Typography variant="body1" style={{ marginTop: "1em" }}>
						5 spots left!{" "}
					</Typography>
					<Typography>
						<Button
							size="small"
							variant="outlined"
							style={{
								color: "white",
								background: "#FF8021",
								width: "7em",
								padding: "0.5em",
							}}
						>
							Choose
						</Button>
					</Typography>
				</Grid>
				<Grid container justify="flex-end">
					<Divider style={{ marginTop: "2em", width: "86.5%" }} />
				</Grid>
				<Grid item md={1}></Grid>
				<Grid item md={1} style={{ marginTop: "1em" }}>
					<Typography variant="body1">4:00 pm</Typography>
				</Grid>
				<Grid item direction="row" xs={12} md={7} spacing={3} style={{ marginTop: "1em" }}>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						<FiberManualRecordRoundedIcon
							color="primary"
							style={{ marginRight: "0.5em" }}
						/>
						<Typography>Class Title</Typography>
					</Grid>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						<ScheduleOutlined color="primary" style={{ marginRight: "0.5em" }} />
						<Typography>Batch name. Default recommendation:</Typography>
					</Grid>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						{/* <LocationOnOutlinedIcon color="primary" style={{marginRight:"0.5em"}} /> */}
						<Typography>Location Instructor</Typography>
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					md={1}
					justify="flex-end"
					spacing={3}
					style={{ marginTop: "1.5em" }}
				>
					<Typography variant="body1">Price from </Typography>
					<Typography variant="body1">$79.99 </Typography>
					<Typography variant="body1" style={{ marginTop: "1em" }}>
						5 spots left!{" "}
					</Typography>
					<Typography>
						<Button
							size="small"
							variant="outlined"
							style={{
								color: "white",
								background: "#FF8021",
								width: "7em",
								padding: "0.5em",
							}}
						>
							Choose
						</Button>
					</Typography>
				</Grid>
			</Grid>
			<Divider style={{ marginTop: "2em" }} />

			<Grid container xs={12} md={12} justify="space-between" style={{ marginTop: "1em" }}>
				<Grid item md={1}>
					<Typography variant="h6">
						{format(tomorrow.setDate(tomorrow.getDate() + 1), "dd MMMM")},{n}
					</Typography>
				</Grid>

				<Grid item md={1}>
					<Typography variant="body1">4:00 pm</Typography>
				</Grid>
				<Grid item direction="row" xs={12} md={7} spacing={3}>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						<FiberManualRecordRoundedIcon
							color="primary"
							style={{ marginRight: "0.5em" }}
						/>
						<Typography>Class Title</Typography>
					</Grid>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						<ScheduleOutlined color="primary" style={{ marginRight: "0.5em" }} />
						<Typography>Batch name. Default recommendation:</Typography>
					</Grid>
					<Grid container direction="row" style={{ marginTop: "0.5em" }}>
						{/* <LocationOnOutlinedIcon color="primary" style={{marginRight:"0.5em"}} /> */}
						<Typography>Location Instructor</Typography>
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					md={1}
					justify="flex-end"
					spacing={3}
					style={{ marginTop: "0.5em" }}
				>
					<Typography variant="body1">Price from </Typography>
					<Typography variant="body1">$79.99 </Typography>

					<Typography variant="body1" style={{ marginTop: "1em" }}>
						5 spots left!{" "}
					</Typography>
					<Typography>
						<Button
							size="small"
							variant="outlined"
							style={{
								color: "white",
								background: "#FF8021",
								width: "7em",
								padding: "0.5em",
							}}
						>
							Choose
						</Button>
					</Typography>
				</Grid>
			</Grid>
			<Divider style={{ marginTop: "2em" }} />

			<Button color="primary" variant="outlined" fullWidth style={{ marginTop: "1em" }}>
				Show next 10 days
			</Button>
		</Container>
	);
}
