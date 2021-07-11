import React, { useState } from "react";
import { Box, Breadcrumbs, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import SearchBar from "material-ui-search-bar";
import Card from "@components/card";
import { services } from "../home/mockData";
import { filters } from "./filters";
import Button from "@components/button";

const useStyles = makeStyles(theme => ({
	filters: {
		"& button": {
			marginRight: theme.spacing(2),
			marginBottom: theme.spacing(2),
		},
	},
}));

export default function ServicesPage() {
	const classes = useStyles();
	const [servicesOffered, setServicesOffered] = useState<any>(services);
	const [book, setBook] = useState(false);

	if (!servicesOffered.length) setServicesOffered(services);

	const getMoreClasses = () => {
		setServicesOffered([...servicesOffered, ...services]);
	};

	const handleBook = () => {
		setBook(true);
		console.log("triggered");
	};

	return (
		<Container maxWidth="md">
			<Box marginTop="2em">
				<Breadcrumbs separator=">" aria-label="breadcrumb">
					<Link to="/home">Home</Link>
					<Typography color="textPrimary">Services</Typography>
				</Breadcrumbs>
			</Box>
			<Box marginTop="2em">
				<Typography variant="h3">Services</Typography>
			</Box>
			<Box marginTop="1em">
				<Typography variant="body1">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</Typography>
			</Box>
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
			<Box marginTop="2em" className={classes.filters}>
				{filters.map((category: any) => (
					<Button variant="outlined" onClick={() => alert(category.type)}>
						{category.type}
					</Button>
				))}
			</Box>
			<Box marginTop="1em" component={"hr"} />
			<Box marginTop="3em">
				<Grid container spacing={2} justify="space-between">
					{servicesOffered.map((service: any) => (
						<Card type="classInfo" data={service} handleBook={handleBook} />
					))}
				</Grid>
			</Box>
			<Button
				variant="outlined"
				color="primary"
				onClick={getMoreClasses}
				style={{
					marginTop: "2em",
				}}
			>
				View More
			</Button>
		</Container>
	);
}
