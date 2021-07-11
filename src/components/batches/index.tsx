import React, { useState,Fragment } from "react";
import {
	Box,
	Breadcrumbs, 
	Container,
	Grid,
	makeStyles,
	Typography,
    Divider
} from "@material-ui/core";
import { Link } from "react-router-dom";

//import { MDBBtn } from "mdbreact";

import useMediaQuery from '@material-ui/core/useMediaQuery';

// import SearchBar from "material-ui-search-bar";
import Card from "@components/card";

import "react-datepicker/dist/react-datepicker.css";	
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Button from "@components/button";
import ClassTitle from "@components/class-title";
import TextField from '@material-ui/core/TextField';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import FiberManualRecordRoundedIcon from '@material-ui/icons/FiberManualRecordRounded';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { Check, CloseOutlined, ScheduleOutlined, SelectAllRounded } from "@material-ui/icons";
import { addDays, format } from "date-fns";

import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";



const useStyles = makeStyles(theme => ({
	filters: {
		"& button": {
			"&:hover": {
				background: theme.palette.primary.main,
				color:"white",
			},
			marginRight: theme.spacing(2),
			marginBottom: theme.spacing(2),
			
			
		},
		
		
		
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200,
	  },
	  container: {
		display: 'flex',
		flexWrap: 'wrap',
	  },
	  formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	  },
  
}));

export default function Batches() {
	const classes = useStyles();
	
	const [startDate, setStartDate] = useState<any>(null);

	
	
	const [value, setValue] = useState("Schedule");
    const [selectedDate, setSelectedDate] = React.useState(new Date());

 


	const handleDateChange = (date: any) => {
		setSelectedDate(date);
	};
	const handleChange = (event: any, newValue: any) => {
		setValue(newValue);
	};
	const today = new Date()
const tomorrow = new Date(today)

const  weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";
  let n = weekday[tomorrow.getDay() + 1 ];
  if(n===7)
  {
	  n="sun";
  }

	

	return (
		<Container maxWidth="md">
			
			
			{/* <Box marginTop="2em">
				<Grid container justify="space-between">
					<Grid item xs={12} sm={9}>
						<SearchBar
							onChange={() => console.log("onChange")}
							onRequestSearch={() => console.log("onRequestSearch")}
							style={{
								margin: "0 auto",
							}}
						/>
					</Grid>
					<Grid item>Price filter TBD</Grid>
				</Grid>
			</Box> */}
						
							
            <Box>
								
			<Grid md={12} style={{flexDirection:"row", display:"flex"}}>
							
							
									<Grid item md={2} style={{
										margin: "1.2em 0" 
									}}>
										<Typography variant="body1" style={{
										 width:"7em",margin:"0.5em 0.5em 0em 0.2em"
									}}><h3>Batch Name</h3>
                                        </Typography>
									
									
									<Typography style={{
										padding: "0.3em", width:"15em",margin:"0.5em 0.5em 0em 1em"
									}}>
									Every Mon,and Wed
									</Typography>
									
										<Typography style={{
										padding: "0.3em", width:"15em" , margin:"0.5em 0.5em 0em 1em"
									}}>
									Location
									</Typography> 
									
									<Typography style={{
										padding: "0.3em", width:"15em", margin:"0.5em 0.5em 0em 1em"
									}}>
                                    Schedule: "15" sessions left
									</Typography>
									
										
									</Grid>

									
									</Grid>
							</Box>
                            <Box mt={0.5} display="flex" justifyContent="space-between">
							{/* <DatePicker
       placeholderText="Select Date"
       selected={startDate}
	   onChange={date => setStartDate(date)}
       dateFormat='dd/MM/yyyy'
       minDate={new Date()}
       
     /> */}
	 <Button variant="outlined" style={{maxWidth: '280px'}}>Select Date</Button>

								<Box display="flex" alignItems="center">
								<Button variant="outlined" style={{maxWidth: '250px', marginLeft:'30px'}}>Select Time</Button>

								</Box>
							</Box>
							
	 <Button variant="outlined" color="primary" style={{maxWidth: '280px', marginTop:'100px'}}>Show more</Button>		
							
							
			
		</Container>
		
	);
    }