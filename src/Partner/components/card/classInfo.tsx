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
import ClassImage from '../../assets/img/class.png'
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	cardMedia: {
		height: 250,
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
		backgroundColor: '#FF8021',
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
					<Typography style={{color:'#FF8021'}} variant="h6" color="primary">
						${price}
					</Typography>
				);
			default:
				return (
					<Box display="flex" alignItems="center">
						<Typography variant="body2" color="textSecondary">
							From&nbsp;
						</Typography>
						<Typography style={{color:'#FF8021'}} variant="h6" color="primary">
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
						image={ClassImage}
					/>
					<CardContent className={classes.cardContent}>
						<Box>
							<Box display="flex" justifyContent="space-between" width="100%">
								<Typography style={{fontSize:15}} variant="body2">{type}</Typography>
							
									<Typography style={{fontSize:15}} variant="body2" color="textSecondary">
										Online
									</Typography>
							
							</Box>
							<Typography style={{fontSize:24}} variant="h6" className={classes.title} title={title}>
								{title}
							</Typography>
						</Box>
						<Box style={{marginTop:-20}}>
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
