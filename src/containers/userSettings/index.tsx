import Card from "@components/card";
import {
	Avatar,
	Box,
	Container,
	Divider,
	Grid,
	makeStyles,
	Paper,
	Tab,
	Tabs,
	Typography,
} from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { Check, CloseOutlined, ScheduleOutlined } from "@material-ui/icons";
import { TabContext, TabPanel } from "@material-ui/lab";
import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { services } from "../../containers/home/mockData";
import React, { useState } from "react";
import { addDays, format } from "date-fns";
import Button from "@components/button";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		display: "flex",
		padding: `${theme.spacing(0.125)}rem ${theme.spacing(0.25)}rem`,
		alignItems: "center",
		marginTop: theme.spacing(2),
		background: "#F1F1F1",

		"& div": {
			marginRight: theme.spacing(3),
		},
	},

	avatar: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		width: theme.spacing(8),
		height: theme.spacing(8),
		fontSize: "1.5rem",
	},
	classInfo: {
		background: "#FFFFFF",
		padding: theme.spacing(2),
		marginBottom: theme.spacing(3),
	},
}));

interface UserSettingsProps {
	// handleBook: any;
}

export default function UserSettings(props: UserSettingsProps) {
	const classes = useStyles();
	const [value, setValue] = useState("Schedule");
	const array1 = [0, 1, 2];
	const array2 = [0, 1];
	const [selectedDate, setSelectedDate] = React.useState(new Date());

	const handleDateChange = (date: any) => {
		setSelectedDate(date);
	};
	const handleChange = (event: any, newValue: any) => {
		setValue(newValue);
	};
	return (
		<Container maxWidth="md">
			<TabContext value={value}>
				<Box marginTop="2em">
					<Tabs
						value={value}
						onChange={handleChange}
						indicatorColor="primary"
						textColor="primary"
						scrollButtons="auto"
					>
						<Tab label="Schedule" value="Schedule" />
						<Tab label="Bookings" value="Bookings" />
						<Tab label="Notifications" value="Notifications" />
						<Tab label="Saved" value="Saved" />
						<Tab label="Profile" value="Profile" />
					</Tabs>
				</Box>
				<Divider />
				<Box>
					<TabPanel value={"Schedule"}>
						<Box mb={3}>
							<Typography variant="body2" color="textSecondary">
								Starting from
							</Typography>
							<Box mt={0.5} display="flex" justifyContent="space-between">
								<Box>
									<MuiPickersUtilsProvider utils={DateFnsUtils}>
										<KeyboardDatePicker
											disableToolbar
											variant="inline"
											format="dd MMMM yyyy"
											margin="normal"
											id="date-picker-inline"
											value={selectedDate}
											onChange={handleDateChange}
											KeyboardButtonProps={{
												"aria-label": "change date",
											}}
											InputAdornmentProps={{
												position: "start",
											}}
										/>
									</MuiPickersUtilsProvider>
								</Box>
								<Box display="flex" alignItems="center">
									<ScheduleOutlined color="primary" />
									&nbsp; &nbsp;Indian Standard Time (IST)
								</Box>
							</Box>
						</Box>
						<Box mt={2}>
							<Typography variant="h6" color="primary">
								{format(selectedDate, "dd MMMM yyyy")}
							</Typography>
							<Box>
								<Divider />
								<Grid
									container
									style={{
										margin: "1.5em 0",
									}}
								>
									<Grid item md={2}>
										<Typography variant="body1">5:00pm - 6:00pm</Typography>
									</Grid>
									<Grid item md={5}>
										<Typography variant="body1">{`Class Title\nBy Hiroshima`}</Typography>
									</Grid>
									<Grid item md={3}>
										<Typography variant="body1">{`Participant: Jane Doe`}</Typography>
									</Grid>
									<Grid item md={2} justify="flex-end">
										<Button size="small" variant="outlined">
											View Details
										</Button>
									</Grid>
								</Grid>
							</Box>
							<Box>
								<Divider />
								<Grid
									container
									style={{
										margin: "1.5em 0",
									}}
									alignItems="center"
								>
									<Grid item md={2}>
										<Typography variant="body1">5:00pm - 6:00pm</Typography>
									</Grid>
									<Grid item md={5}>
										<Typography variant="body1">{`Class Title\nBy Hiroshima`}</Typography>
									</Grid>
									<Grid item md={3}>
										<Typography variant="body1">{`Participant: Jane Doe`}</Typography>
									</Grid>
									<Grid item md={2} justify="flex-end">
										<Button size="small" variant="outlined">
											View Details
										</Button>
									</Grid>
								</Grid>
							</Box>
						</Box>
						<Box mt={2}>
							<Typography variant="h6" color="primary">
								{format(addDays(selectedDate, 3), "dd MMMM yyyy")}
							</Typography>
							<Box>
								<Divider />
								<Grid
									container
									style={{
										margin: "1.5em 0",
									}}
								>
									<Grid item md={2}>
										<Typography variant="body1">5:00pm - 6:00pm</Typography>
									</Grid>
									<Grid item md={5}>
										<Typography variant="body1">{`Class Title\nBy Hiroshima`}</Typography>
									</Grid>
									<Grid item md={3}>
										<Typography variant="body1">{`Participant: Jane Doe`}</Typography>
									</Grid>
									<Grid item md={2} justify="flex-end">
										<Button size="small" variant="outlined">
											View Details
										</Button>
									</Grid>
								</Grid>
							</Box>
						</Box>
					</TabPanel>
					<TabPanel value={"Bookings"}>
						<Box mb={3} width="500px" display="flex" justifyContent="space-between">
							<Button variant="contained" color="primary">
								Current
							</Button>
							<Button variant="outlined" color="primary">
								Past
							</Button>
							<Button variant="outlined" color="primary">
								Cancelled
							</Button>
							<Button variant="outlined" color="primary">
								Pending
							</Button>
						</Box>
						<Box display="flex">
							<Card
								type="classInfo"
								// handleBook={props.handleBook}
								data={{
									type: "Class",
									title: "Understanding Data with Visual Basic Excel",
									online: false,
									tag: "Sale",
									ageRange: "10-16yo",
									location: "Zoom",
									instructor: "MS",
									price: "95",
								}}
							/>
							<Box flexGrow={1} ml={4}>
								{array1.map(item => (
									<Paper className={classes.classInfo}>
										<Box display="flex" justifyContent="space-between" mb={1}>
											<Typography variant="h6">Class Title</Typography>
											<Typography variant="h6">$24.99</Typography>
										</Box>
										<Box
											display="flex"
											alignItems="flex-end"
											justifyContent="space-between"
										>
											<Box>
												<Box mb={1.25}>12th March - 12th April 2020</Box>
												<Box mb={1.25}>5:00-6:00 PM</Box>
												<Box mb={1.25}>Weekly - Mon, Wed, Fri</Box>
											</Box>
											<Button variant="outlined" size="small">
												{" "}
												View Details
											</Button>
										</Box>
									</Paper>
								))}
							</Box>
						</Box>
					</TabPanel>
					<TabPanel value={"Notifications"}>
						<Typography variant="h5">Unread</Typography>
						{array1.map(item => (
							<Box className={classes.root}>
								<Avatar className={classes.avatar}>OP</Avatar>
								<Typography variant="body1">
									Yatna’s Academy of Yoga Classes has accepted your admission to
									their course “Yoga For Beginners”.
								</Typography>
								<CloseOutlined />
							</Box>
						))}
						<Box mt={5}>
							<Typography variant="h5">Read</Typography>
							{array2.map(item => (
								<Box className={classes.root}>
									<Avatar className={classes.avatar}>OP</Avatar>
									<Typography variant="body1">
										Yatna’s Academy of Yoga Classes has accepted your admission
										to their course “Yoga For Beginners”.
									</Typography>
									<Check />
								</Box>
							))}
						</Box>
					</TabPanel>
					<TabPanel value={"Saved"}>
						<Grid container spacing={2}>
							{services.slice(0, 2).map((service: any, handleBook: any) => (
								<Card type="classInfo" data={service} handleBook={handleBook} />
							))}
						</Grid>
					</TabPanel>

					<TabPanel value={"Profile"}>
						<Box mt={3}>
							<Grid container justify="space-between" alignItems="center">
								<Grid item xs={12} sm={4}>
									<Box clone borderRadius="50%">
										<img
											src="https://images.unsplash.com/photo-1582140141257-f4588733e374"
											width={"275px"}
											height={"275px"}
											alt="profile"
											style={{
												objectFit: "cover",
											}}
										/>
									</Box>
								</Grid>
								<Box clone display="flex" justifyContent="space-between" ml={3}>
									<Grid item xs={12} sm={7}>
										<Box width="100%">
											<Box>
												<Typography
													variant="body2"
													color="textSecondary"
													gutterBottom
												>
													Name
												</Typography>
												<Typography variant="h5">Jane Doe</Typography>
											</Box>
											<Box
												display="flex"
												mt={3}
												justifyContent="space-between"
												width="100%"
												flexGrow={1}
											>
												<Box>
													<Typography
														variant="body2"
														color="textSecondary"
														gutterBottom
													>
														Email ID
													</Typography>
													<Typography variant="body1" gutterBottom>
														janedoe@xyz.com
													</Typography>
												</Box>
												<Box>
													<Typography
														variant="body2"
														color="textSecondary"
														gutterBottom
													>
														Phone No.
													</Typography>
													<Typography variant="body1" gutterBottom>
														+0123456789
													</Typography>
												</Box>
											</Box>
										</Box>
										<Box>
											<Button variant="outlined">Edit</Button>
										</Box>
									</Grid>
								</Box>
							</Grid>
						</Box>
					</TabPanel>
				</Box>
			</TabContext>
		</Container>
	);
}
