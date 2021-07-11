import React, { useState } from "react";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Breadcrumbs,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	Container,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Paper,
	Typography,
	Link as MUILink,
	Switch,
	Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Carousel from "@components/carousel";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LoopIcon from "@material-ui/icons/Loop";
import PeopleOutlinedIcon from "@material-ui/icons/PeopleOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { ExpandMore, PlayArrow } from "@material-ui/icons";
import ReadMore from "@components/aboutUs/readMore";
import MaterialUIPickers from "../../components/datepicker";
// import BookingOption from "../../pages/bookingoptions";
import BookingOption from "../../containers/bookingoptions";
import Drawer from "@material-ui/core/Drawer";
import "../../assets/css/coursedetail.scss";

const useStyles = makeStyles(theme => ({
	media: {
		height: 200,
	},
	carouselImage: {
		objectFit: "cover",
		backgroundColor: theme.palette.background.default,
		opacity: 0.8,
		height: "100%",
		width: "100%",
	},
	cssGrid: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gridGap: theme.spacing(6),
		[theme.breakpoints.down("xs")]: {
			gridTemplateColumns: "1fr",
		},
	},
	showAllToggle: {
		color: theme.palette.primary.main,
		opacity: 0.9,
		"& $checked": {
			color: theme.palette.primary.main,
			opacity: 1,
		},
	},
}));

export default function CourseDetailsPage() {
	const classes = useStyles();
	const [expanded, setExpanded] = useState("");
	const [book, setBook] = React.useState(false);

	const handleBook = () => {
		setBook(true);
	};

	const handleBookClose = () => {
		setBook(false);
	};

	const handleChange = (panel: any) => (event: any, newExpanded: any) => {
		setExpanded(newExpanded ? panel : false);
	};

	const images = [
	{ url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" },
		{ url: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?k=6&m=1220017909&s=170667a&w=0&h=Zy_NqTbEluSW0T667IHW7DVlpQih70V45k-rgeFt6Oo=" },
		{ url: "https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=6&m=1155240408&s=612x612&w=0&h=SEhOUzsexrBBtRrdaLWNB6Zub65Dnyjk7vVrTk1KQSU=" },
		{ url: "https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=6&m=1218254547&s=170667a&w=0&h=EXwwoHJ3wI0H2jDfoFhqOiIo2c4cL0y7R8Gop3iIO30=" },
		{ url: "https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=6&m=1218254547&s=170667a&w=0&h=EXwwoHJ3wI0H2jDfoFhqOiIo2c4cL0y7R8Gop3iIO30=" },
	];

	const classMetadata = [
		{
			key: "Class duration",
			value: "2 hours",
			icon: <AccessTimeIcon color={"primary"} />,
		},
		{
			key: "Frequency of classes",
			value: "One Time",
			icon: <LoopIcon color={"primary"} />,
		},
		{
			key: "Number of participants",
			value: "Private (1:1) / Group",
			icon: <PeopleOutlinedIcon color={"primary"} />,
		},
		{
			key: "Age",
			value: "Combine Icon - Figma",
			icon: <PeopleOutlinedIcon color={"primary"} />,
		},
	];

	const faqs = [
		{
			question: "Where should I make the payments for the classes?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra nulla non lacus ultrices, vel malesuada urna vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra nulla non lacus ultrices, vel malesuada urna vulputate. ",
		},
		{
			question: "Where should I make the payments for the classes?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra nulla non lacus ultrices, vel malesuada urna vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra nulla non lacus ultrices, vel malesuada urna vulputate. ",
		},
		{
			question: "Where should I make the payments for the classes?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra nulla non lacus ultrices, vel malesuada urna vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra nulla non lacus ultrices, vel malesuada urna vulputate. ",
		},
		{
			question: "Where should I make the payments for the classes?",
			answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra nulla non lacus ultrices, vel malesuada urna vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra nulla non lacus ultrices, vel malesuada urna vulputate. ",
		},
	];

	const descriptionPoints = ["Week 1: xx", "Week 2: yy", "Class 1-3: xx", "Beginners: xxx"];

	const schedules = [
		{
			date: "Wed, 3 Feb",
			time: "5:00PM to 6:00PM",
			repeat: "One-time Session",
			cost: "18$/session",
		},
		{
			date: "Wed, 3 Feb",
			time: "5:00PM to 6:00PM",
			repeat: "Class every x days",
			cost: "18$/person",
		},
		{
			date: "Wed, 3 Feb",
			time: "5:00PM to 6:00PM",
			repeat: "Every Mon, Tues, Wed",
			cost: "18$/session",
		},
		{
			date: "Wed, 3 Feb",
			time: "5:00PM to 6:00PM",
			repeat: "One-time Session",
			cost: "18$/term",
		},
	];

	return (
		<Container maxWidth="md">
			{book === true ? (
				<Drawer open={book} onClose={handleBookClose}>
					<BookingOption handleBookClose={handleBookClose} />
				</Drawer>
			) : null}

			<Box marginTop="2rem">
				<Breadcrumbs separator=">" aria-label="breadcrumb">
					<Link to="/home">Home</Link>
					<Link to="/services">Services</Link>
					<Typography color="textPrimary">Beginner's Guide to Microsoft Excel</Typography>
				</Breadcrumbs>
			</Box>
			<Box marginTop="2rem">
				<Carousel>
					{images.map(image => (
						<Paper square={true} style={{ height: "500px", width: "100%" }}>
							<img src={image.url} alt="partner" className={classes.carouselImage} />
						</Paper>
					))}
				</Carousel>
			</Box>
			<Box marginTop="2rem">
				<Grid container spacing={5} justify="space-between">
					<Grid item xs={12} sm={8}>
						<Typography variant="h5">Beginner's Guide to Microsoft Excel</Typography>
						<Box marginTop="1rem">
							<Button
								style={{ marginRight: "20px" }}
								color="primary"
								startIcon={<FavoriteBorderIcon />}
							>
								Save
							</Button>
							<Button color="secondary" startIcon={<ShareIcon />}>
								Share
							</Button>
						</Box>
						<Box component="hr" marginTop="2rem" />
						<Box marginTop="2rem">
							<Typography variant="body1">
								Corrupti impedit recusandae neque inventore sunt debitis voluptates
								at ex ducimus assumenda. Distinctio sit veritatis nam possimus,
								architecto quos. Quasi dignissimos adipisci neque asperiores maxime
								animi, aspernatur consequatur nobis illo ullam cumque?
							</Typography>
							<Box marginTop="2rem">
								<Grid container spacing={5} alignContent="center">
									{classMetadata.map((data: any) => {
										return (
											<Grid
												item
												xs={6}
												style={{
													display: "flex",
													alignItems: "center",
												}}
											>
												{data.icon}
												<Box ml="2em">
													<Typography
														variant="body2"
														color="textSecondary"
														gutterBottom
													>
														{data.key}
													</Typography>

													<Typography variant="body1" color="textPrimary">
														{data.value}
													</Typography>
												</Box>
											</Grid>
										);
									})}
								</Grid>
							</Box>
						</Box>
						<Box component="hr" marginTop="2rem" />
						<Box marginTop="2rem">
							<Typography variant="h4">Meet your Instructor</Typography>
							<Box marginTop="2rem">
								<Box display="flex">
									<Box mr="2.5em">
										<img
											src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"
											alt="instructor"
											height="175px"
											width="175px"
											style={{
												objectFit: "cover",
											}}
										/>
										<Box mt="1em">
											<Button
												variant="outlined"
												color="primary"
												style={{
													marginRight: "2em",
												}}
												fullWidth
											>
												Ask a question
											</Button>
										</Box>
										<Box mt="1em">
											<MUILink
												component={Button}
												href="https://www.youtube.com/watch?v=I_6aMZwf9CU"
												target="_blank"
												startIcon={<PlayArrow color="primary" />}
												fullWidth
											>
												Intro Video
											</MUILink>
										</Box>
									</Box>
									<Box>
										<Typography variant="h5" gutterBottom>
											Hiroshima Nagasaki
										</Typography>
										<Typography variant="body1">
											Chef - Asian Cuisine
										</Typography>
										<Box mt="2em">
											<ReadMore>
												<Typography variant="body2" align="justify">
													{
														"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tempore odit reprehenderit repellat nam, omnis nemo repellendus soluta, id rem hic ab \n\n maxime pariatur officia, officiis debitis. Dolor quia laudantium corrupti excepturi tempora error in obcaecati aut numquam natus ducimus, modi eum quod assumenda illum voluptatibus laboriosam explicabo atque provident repudiandae. Quisquam ut nam repudiandae, nisi autem perspiciatis commodi perferendis explicabo magni! \n\n Deleniti cumque blanditiis odio rem sapiente odit, perspiciatis voluptatum iusto corrupti nihil doloremque earum praesentium tempora eum? Voluptas similique natus accusamus \n\n reiciendis minus sequi in molestiae explicabo non, soluta sit officia autem tempore fuga eaque hic numquam doloremque incidunt voluptatum? Deserunt, nemo."
													}
												</Typography>
											</ReadMore>
										</Box>
									</Box>
								</Box>
							</Box>
						</Box>
						<Box component="hr" marginTop="2rem" />
						<Box marginTop="2rem">
							<Typography variant="h4">Course Description</Typography>
							<Box marginTop="1em">
								<List>
									{descriptionPoints.map(point => (
										<ListItem disableGutters>
											<ListItemIcon>
												<CheckCircleIcon color="primary" />
											</ListItemIcon>
											<ListItemText>
												<Typography variant="h6">{point}</Typography>
											</ListItemText>
										</ListItem>
									))}
								</List>
							</Box>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Card className="seat-book">
							<CardActionArea>
								<CardContent>
									<Grid
										style={{
											marginBottom: "1em",
											borderBottom: "1px solid rgb(191 183 183)",
											padding: "10px 0px",
										}}
									>
										<h6>From</h6>
										<Typography variant="h6" color="primary">
											$79.99
										</Typography>
										<Grid className="date-picker ">
											<MaterialUIPickers />
										</Grid>
									</Grid>

									<Grid
										style={{
											marginBottom: "1em",
											borderBottom: "1px solid rgb(191 183 183)",
											padding: "10px 0px",
										}}
									>
										<Typography variant="h6">
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
												}}
											>
												<p>
													<strong>Mon, 8 Mar</strong>
												</p>
												<p>$799 / class</p>
											</div>
										</Typography>
										<Typography variant="h6">
											<p>5:00 PM - 7:00 PM (IST) </p>
										</Typography>
										<Grid
											style={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Typography
												variant="h6"
												color="primary"
												className="seats"
											>
												<p>5 seats left!</p>
											</Typography>
											<Button
												variant="contained"
												color="primary"
												className="choose-btn"
												onClick={handleBook}
											>
												Choose
											</Button>
										</Grid>
									</Grid>
									<Grid
										style={{
											marginBottom: "1em",
											borderBottom: "1px solid rgb(191 183 183)",
											padding: "10px 0px",
										}}
									>
										<Typography variant="h6">
											<div
												style={{
													display: "flex",
													justifyContent: "space-between",
												}}
											>
												<p>
													<strong>Mon, 8 Mar</strong>
												</p>
												<p>$7999 / class</p>
											</div>
										</Typography>
										<Typography variant="h6">
											<p>5:00 PM - 7:00 PM (IST) </p>
										</Typography>
										<Grid
											style={{
												display: "flex",
												justifyContent: "space-between",
											}}
										>
											<Typography
												variant="h6"
												color="primary"
												className="seats"
											>
												<p>5 seats left!</p>
											</Typography>
											<Button
												variant="contained"
												color="primary"
												className="choose-btn"
												onClick={handleBook}
											>
												Choose
											</Button>
										</Grid>
									</Grid>
									<Button className="show-more-btn">Show more</Button>
								</CardContent>
							</CardActionArea>
						</Card>
					</Grid>
				</Grid>
				<Box component="hr" marginTop="2rem" />
				<Box marginTop="2rem">
					<Typography variant="h4">Schedule</Typography>
					<Box marginTop="2em">
						<Box display="flex" alignItems="center">
							<Switch
								// checked={state.checkedB}
								// onChange={handleChange}
								color="primary"
								name="checkedB"
								inputProps={{ "aria-label": "primary checkbox" }}
								classes={{ switchBase: classes.showAllToggle }}
							/>
							<Typography variant="body2" color="textSecondary">
								Show only trial or drop-in class time slots
							</Typography>
						</Box>
						<Box mt={4}>
							<Grid container spacing={3}>
								{schedules.map(schedule => {
									return (
										<Grid item xs={12} sm={6} md={3}>
											<Card>
												<CardContent
													style={{
														height: "250px",
														display: "flex",
														flexDirection: "column",
														justifyContent: "space-between",
													}}
												>
													<Box>
														<Typography variant="body1" gutterBottom>
															{schedule.date}
														</Typography>
														<Typography variant="body1" gutterBottom>
															{schedule.time}
														</Typography>
													</Box>
													<Typography
														variant="body2"
														color="textSecondary"
													>
														{schedule.repeat}
													</Typography>
													<Typography variant="body1">
														{schedule.cost}
													</Typography>
													<Button
														color="primary"
														variant="contained"
														style={{ width: "100px" }}
													>
														className="choose-btn" Choose
													</Button>
												</CardContent>
											</Card>
										</Grid>
									);
								})}
							</Grid>
						</Box>
						<Box mt={4}>
							<Button
								variant="contained"
								color="primary"
								style={{ marginRight: "2em" }}
							>
								<Link
									to="/classes"
									style={{ textDecoration: "none", color: "#fff" }}
								>
									Show more timings
								</Link>
							</Button>
							<Button variant="outlined" color="primary">
								Request a new time
							</Button>
						</Box>
					</Box>
				</Box>

				<Box component="hr" marginTop="2rem" />
				<Box marginTop="2rem">
					<Typography variant="h4">Things to Note</Typography>
					<Box marginTop="2rem">
						<Box className={classes.cssGrid}>
							<Box>
								<Typography variant="h5" gutterBottom>
									Cancellation Policy
								</Typography>
								<Box>
									<ReadMore>
										<Typography variant="body2" align="justify">
											{
												"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tempore odit reprehenderit repellat nam, omnis nemo repellendus soluta, id rem hic ab \n\n maxime pariatur officia, officiis debitis. Dolor quia laudantium corrupti excepturi tempora error in obcaecati aut numquam natus ducimus, modi eum quod assumenda illum voluptatibus laboriosam explicabo atque provident repudiandae. Quisquam ut nam repudiandae, nisi autem perspiciatis commodi perferendis explicabo magni! \n\n Deleniti cumque blanditiis odio rem sapiente odit, perspiciatis voluptatum iusto corrupti nihil doloremque earum praesentium tempora eum? Voluptas similique natus accusamus \n\n reiciendis minus sequi in molestiae explicabo non, soluta sit officia autem tempore fuga eaque hic numquam doloremque incidunt voluptatum? Deserunt, nemo."
											}
										</Typography>
									</ReadMore>
								</Box>
							</Box>

							<Box>
								<Typography variant="h5" gutterBottom>
									Requirements for the session
								</Typography>
								<ReadMore>
									<Typography variant="body2" align="justify">
										{
											"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tempore odit reprehenderit repellat nam, omnis nemo repellendus soluta, id rem hic ab \n\n maxime pariatur officia, officiis debitis. Dolor quia laudantium corrupti excepturi tempora error in obcaecati aut numquam natus ducimus, modi eum quod assumenda illum voluptatibus laboriosam explicabo atque provident repudiandae. Quisquam ut nam repudiandae, nisi autem perspiciatis commodi perferendis explicabo magni! \n\n Deleniti cumque blanditiis odio rem sapiente odit, perspiciatis voluptatum iusto corrupti nihil doloremque earum praesentium tempora eum? Voluptas similique natus accusamus \n\n reiciendis minus sequi in molestiae explicabo non, soluta sit officia autem tempore fuga eaque hic numquam doloremque incidunt voluptatum? Deserunt, nemo."
										}
									</Typography>
								</ReadMore>
							</Box>
						</Box>
					</Box>
				</Box>

				<Box component="hr" marginTop="2rem" />
				<Box marginTop="2rem">
					<Typography variant="h4">Frequently Asked Questions</Typography>
					<Box marginTop="2rem">
						{faqs.map((faq: any, index: number) => (
							<Accordion
								expanded={expanded === `panel${index}`}
								onChange={handleChange(`panel${index}`)}
							>
								<AccordionSummary
									expandIcon={<ExpandMore />}
									aria-controls={`panel${index}d-content`}
									id={`panel${index}d-header`}
								>
									<Typography>{faq.question}</Typography>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>{faq.answer}</Typography>
								</AccordionDetails>
							</Accordion>
						))}
					</Box>
				</Box>
			</Box>
		</Container>
	);
}
