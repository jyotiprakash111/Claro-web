// import React, { useState } from "react";
// import {
// 	Box,
// 	Container,
// 	Divider,
// 	Grid,
// 	Hidden,
// 	IconButton,
// 	makeStyles,
// 	TextField,
// 	Typography,
// } from "@material-ui/core";
// import { NavLink } from "react-router-dom";
// import BoxSeparator from "@components/boxSeparator";
// import Card from "@components/card";
// import HeroImage from "@components/heroImage";
// import AboutUs from "@components/aboutUs";
// import { services, testimonials } from "./mockData";
// import Testimonial from "@components/testimonial";
// import Carousel from "@components/carousel";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import ContactForm from "@components/contactForm";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import AccessTimeIcon from "@material-ui/icons/AccessTime";
// import Button from "@components/button";

// const useStyles = makeStyles(theme => ({
// 	newsletterForm: {
// 		display: "flex",
// 		alignItems: "center",
// 	},
// }));

// export default function HomePage() {
// 	const classes = useStyles();

// 	const [servicesOffered, setServicesOffered] = useState<any>([]);

// 	if (!servicesOffered.length) setServicesOffered(services);

// 	return (
// 		<>
// 			<HeroImage />
// 			<Container maxWidth="md">
// 				<BoxSeparator>
// 					<AboutUs />
// 				</BoxSeparator>
// 				<BoxSeparator>
// 					<Grid container justify="space-between">
// 						<Typography variant="h3">Our Services</Typography>
// 						<Button
// 							variant="outlined"
// 							size="small"
// 							color="primary"
// 							component={NavLink}
// 							to="/services"
// 						>
// 							View Courses
// 						</Button>
// 					</Grid>
// 					<Box marginTop="1.5em">
// 						<Grid container spacing={3} justify="space-between">
// 							{servicesOffered.map((service: any) => (
// 								<Card type="classInfo" data={service} />
// 							))}
// 						</Grid>
// 					</Box>
// 				</BoxSeparator>
// 				<BoxSeparator>
// 					<Typography variant="h3" gutterBottom>
// 						Testimonials
// 					</Typography>
// 					<Box width="100%" display="flex" justifyContent="center">
// 						<Carousel navButtonsAlwaysInvisible={false}>
// 							{testimonials.map((testimonial: any) => (
// 								<Testimonial {...testimonial} />
// 							))}
// 						</Carousel>
// 					</Box>
// 				</BoxSeparator>
// 				<BoxSeparator>
// 					<Grid container spacing={4} justify="space-between" alignItems="center">
// 						<Grid item xs={12} sm={6}>
// 							<ContactForm />
// 						</Grid>
// 						<Hidden smUp>
// 							<Grid item xs={6}>
// 								<Divider
// 									style={{
// 										margin: "2em 0",
// 									}}
// 								/>
// 							</Grid>
// 						</Hidden>
// 						<Grid item xs={12} sm={6}>
// 							<Typography variant="h4" gutterBottom>
// 								Let's stay in touch
// 							</Typography>
// 							<Typography variant="body1" gutterBottom color="textSecondary">
// 								Lorem ipsum dolor sit amet consectetur adipisicing elit.
// 								Exercitationem incidunt adipisci magni dolore sit!
// 							</Typography>
// 							<Box mt={3.5} component="form" className={classes.newsletterForm}>
// 								<TextField
// 									required
// 									id="contact-form-email"
// 									label="Email ID"
// 									variant="outlined"
// 									placeholder="Enter your email ID here"
// 									style={{
// 										width: "90%",
// 									}}
// 								/>
// 								<IconButton type="submit" aria-label="subscribe">
// 									<ExitToAppIcon />
// 								</IconButton>
// 							</Box>

// 							<Box mt={4} display="flex" alignItems="center">
// 								<Box>
// 									<IconButton>
// 										<AccessTimeIcon />
// 									</IconButton>
// 								</Box>
// 								<Typography variant="body1">Closed Now(Need Ex here)</Typography>
// 							</Box>
// 							<Box mt={3.5}>
// 								<Typography variant="body1" gutterBottom color="textSecondary">
// 									Follow Us:
// 								</Typography>

// 								<Box
// 									display="flex"
// 									mt={2}
// 									justifyContent="space-between"
// 									maxWidth={"40%"}
// 								>
// 									<FacebookIcon />
// 									<InstagramIcon />
// 									<LinkedInIcon />
// 									<TwitterIcon />
// 								</Box>
// 							</Box>
// 						</Grid>
// 					</Grid>
// 				</BoxSeparator>
// 			</Container>
// 		</>
// 	);
// }
