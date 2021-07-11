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
import { services } from "../home/mockData";
import { filters } from "./filters";
import Button from "@components/button";
import DateRangeOutlinedIcon from "@material-ui/icons/DateRangeOutlined";
import { Check, CloseOutlined, ScheduleOutlined, SelectAllRounded } from "@material-ui/icons";
import { addDays, format } from "date-fns";
import Classes from "@components/classes";
import { Tabs } from "@material-ui/core";
import { Tab } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import ClassTitle from "@components/class-title";
import { useHistory } from "react-router";

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
}));

export default function ClassesPage() {
	const [servicesOffered, setServicesOffered] = useState<any>(services);
	const [value, setValue] = useState("classes");
	const [selectedDate, setSelectedDate] = React.useState(new Date());
	const history = useHistory();
	console.log(history)
	const handleDateChange = (date: any) => {
		setSelectedDate(date);
	};
	const handleChange = (event: any, newValue: any) => {
		setValue(newValue);
		console.log(newValue)
		newValue === "classes" ? history.replace('/classes') :  history.replace('/batches') 
	};

	if (!servicesOffered.length) setServicesOffered(services);

	const getMoreClasses = () => {
		setServicesOffered([...servicesOffered, ...services]);
	};

	const classes = useStyles();
	return (
		<Container maxWidth="md" >
			<Paper square>
				<Tabs
					value={value}
					indicatorColor="primary"
					textColor="primary"
					onChange={handleChange}
					aria-label="disabled tabs example"
				>
					<Tab label="All Classes"  value="classes" />

					<Tab label="All Batches" value="batches" />
				</Tabs>
			</Paper>
			<Box marginTop="2em" className={classes.filters}>
				{filters.map((category: any) => (
					<Button variant="outlined" rounded="0" style={{ width: "8em" }}>
						{category.type}
					</Button>
				))}
			</Box>
			<Grid item md={12}>
				<Typography variant="body2" color="textSecondary">
					Starting from
				</Typography>
				<Box mt={0.5} display="flex" justifyContent="space-between">
				<Grid container direction="row" style={{marginTop:'0.5em'}}>
						<DateRangeOutlinedIcon color="primary" style={{marginTop:'0.2em'}}/>
					<Typography variant="h6">
						{format(selectedDate, "dd MMMM yyyy")}
					</Typography>
				</Grid>
				<Grid  container direction="row" style={{marginTop:'0.5em'}}>
					<ScheduleOutlined color="primary" />
					<Typography >
					Indian Standard Time (IST)
					</Typography>
				</Grid>
			</Box>
			</Grid>
				<Classes />
				{/* <Grid md={12} xs={8} item >
					<ClassTitle></ClassTitle>
				</Grid> */}
		</Container>
	);
}
