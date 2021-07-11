import React from "react";
import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "@components/button";

const useStyles = makeStyles(theme => ({
	heroImage: {
		height: "700px",
		width: "100%",
		display: "grid",
		alignItems: "center",
		backgroundImage: "url(https://images.unsplash.com/photo-1615217482859-6b0c8a50129d)",
		backgroundSize: "cover",
		color: theme.palette.common.black,

		"& h1": {
			mixBlendMode: "difference",
			color: theme.palette.common.white,
		},
		"& h5": {
			mixBlendMode: "difference",
		},
	},
	heroDiv: {
		textAlign: "center",
	},
}));

export default function HeroImage() {
	const classes = useStyles();

	return (
		<Box className={classes.heroImage}>
			<Box className={classes.heroDiv}>
				<Typography variant="h1">Flavours of Asia</Typography>
				<Typography variant="h5" paragraph={true}>
					Let your buds do the talking
				</Typography>
				<Button component={Link} to="/services" variant="contained" color="primary">
					View courses
				</Button>
			</Box>
		</Box>
	);
}
