import React from "react";
import {
	Avatar,
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	Grid,
	makeStyles,
	Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	cardMedia: {
		height: 200,
	},
	location: {
		marginTop: theme.spacing(1),
	},
	priceHolder: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		marginTop: theme.spacing(2),
	},
	avatar: {
		color: theme.palette.common.white,
		backgroundColor: theme.palette.primary.main,
		width: theme.spacing(5),
		height: theme.spacing(5),
		fontSize: "0.9375rem",
	},
	cardContent: {
		backgroundColor: "#F1F1F1",
		height: "250px",
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
	},
	title: {
		display: "-webkit-box",
		WebkitLineClamp: 2,
		overflow: "hidden",
		WebkitBoxOrient: "vertical",
		marginTop: theme.spacing(1),
	},
}));

const ClassInfo = (props: any) => {
	const classes = useStyles();
	const { type, title, online, ageRange, location, instructor, price } = props;
	// const { tag } = props;

	const ClassPrice = () => {
		switch (type) {
			case "Appointment":
				return (
					<Typography variant="h6" color="primary">
						${price}
					</Typography>
				);
			default:
				return (
					<Box display="flex" alignItems="center">
						<Typography variant="body2" color="textSecondary">
							From&nbsp;
						</Typography>
						<Typography variant="h6" color="primary">
							${price}
						</Typography>{" "}
						<Typography variant="body2" color="textSecondary">
							&nbsp;/class
						</Typography>
					</Box>
				);
		}
	};
	// TODO: Tag to be used to explain partner offer
	// TODO: Add to wishlist icon
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card>
				<CardActionArea component={Link} to="/courseDetails">
					<CardMedia
						className={classes.cardMedia}
						image="https://images.unsplash.com/photo-1592064064956-30807b590c08"
						title="Contemplative Reptile"
					/>
					<CardContent className={classes.cardContent}>
						<Box>
							<Box display="flex" justifyContent="space-between" width="100%">
								<Typography variant="body2">{type}</Typography>
								{online && (
									<Typography variant="body2" color="textSecondary">
										Online
									</Typography>
								)}
							</Box>
							<Typography variant="h6" className={classes.title} title={title}>
								{title}
							</Typography>
						</Box>
						<Box>
							<Typography variant="body2" color="textSecondary">
								{ageRange}
							</Typography>
							<Typography
								variant="body2"
								className={classes.location}
								color="textSecondary"
							>
								{location}
							</Typography>
							<Box className={classes.priceHolder}>
								<Avatar className={classes.avatar}>{instructor}</Avatar>
								<ClassPrice />
							</Box>
						</Box>
					</CardContent>
				</CardActionArea>
			</Card>
		</Grid>
	);
};

export default ClassInfo;
