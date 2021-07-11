import React from "react";
import { Box, Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	testimonial: {
		[theme.breakpoints.up("sm")]: {
			display: "flex",
			alignItems: "center",
		},
		// maxWidth: "800px",
	},
}));

const Testimonial = (props: any) => {
	const classes = useStyles();
	const { imgUrl, testimony, name, role } = props;
	return (
		<Box component={Card} className={classes.testimonial}>
			<CardContent style={{ background: "#ece8e8", margin: "10px", padding: "0px" }}>
				<CardMedia
					style={{ height: 260, minWidth: 260 }}
					image={imgUrl}
					title="Contemplative Reptile"
				/>
				<Typography
					style={{ padding: "20px" }}
					variant="body2"
					gutterBottom
					color="textSecondary"
				>
					{testimony}
				</Typography>
				<Box style={{ padding: "20px" }} marginTop="2em">
					<Typography variant="h5">{name}</Typography>
					<Typography variant="body2">{role}</Typography>
				</Box>
			</CardContent>
			<CardContent style={{ background: "#ece8e8", margin: "10px", padding: "0px" }}>
				<CardMedia
					style={{ height: 260, minWidth: 260 }}
					image={imgUrl}
					title="Contemplative Reptile"
				/>
				<Typography
					style={{ padding: "20px" }}
					variant="body2"
					gutterBottom
					color="textSecondary"
				>
					{testimony}
				</Typography>
				<Box style={{ padding: "20px" }} marginTop="2em">
					<Typography variant="h5">{name}</Typography>
					<Typography variant="body2">{role}</Typography>
				</Box>
			</CardContent>
			<CardContent style={{ background: "#ece8e8", margin: "10px", padding: "0px" }}>
				<CardMedia
					style={{ height: 260, minWidth: 260 }}
					image={imgUrl}
					title="Contemplative Reptile"
				/>
				<Typography
					style={{ padding: "20px" }}
					variant="body2"
					gutterBottom
					color="textSecondary"
				>
					{testimony}
				</Typography>
				<Box style={{ padding: "20px" }} marginTop="2em">
					<Typography variant="h5">{name}</Typography>
					<Typography variant="body2">{role}</Typography>
				</Box>
			</CardContent>
		</Box>
	);
};

export default Testimonial;
