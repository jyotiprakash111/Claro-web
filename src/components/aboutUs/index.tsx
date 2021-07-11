import React from "react";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import ReadMore from "./readMore";
import lang from "@utils/lang";
import Carousel from "../carousel";

const useStyles = makeStyles(theme => ({
	carouselImage: {
		objectFit: "cover",
		backgroundColor: theme.palette.background.default,
		opacity: 0.8,
		height: "100%",
		width: "100%",
	},
	aboutUs: {
		paddingRight: theme.spacing(5),
		[theme.breakpoints.down("sm")]: {
			marginBottom: theme.spacing(5),
		},
	},
}));

export default function AboutUs() {
	const classes = useStyles();

	const images = [
		{ url: "https://images.unsplash.com/photo-1503764654157-72d979d9af2f" },
		{ url: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9" },
		{ url: "https://images.unsplash.com/photo-1568919618505-13f7d9eb373f" },
		{ url: "https://images.unsplash.com/photo-1598679470734-80d6ee5f863a" },
		{ url: "https://images.unsplash.com/photo-1598792325882-b89b6109523b" },
	];

	return (
		<Grid container justify="space-between">
			<Grid item sm={6} className={classes.aboutUs}>
				<Typography variant="h3" gutterBottom>
					{lang.aboutUs}
				</Typography>
				<ReadMore>
					<Typography variant="body1" align="justify">
						{
							"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos tempore odit reprehenderit repellat nam, omnis nemo repellendus soluta, id rem hic ab \n\n maxime pariatur officia, officiis debitis. Dolor quia laudantium corrupti excepturi tempora error in obcaecati aut numquam natus ducimus, modi eum quod assumenda illum voluptatibus laboriosam explicabo atque provident repudiandae. Quisquam ut nam repudiandae, nisi autem perspiciatis commodi perferendis explicabo magni! \n\n Deleniti cumque blanditiis odio rem sapiente odit, perspiciatis voluptatum iusto corrupti nihil doloremque earum praesentium tempora eum? Voluptas similique natus accusamus \n\n reiciendis minus sequi in molestiae explicabo non, soluta sit officia autem tempore fuga eaque hic numquam doloremque incidunt voluptatum? Deserunt, nemo."
						}
					</Typography>
				</ReadMore>
			</Grid>
			<Grid item sm={6}>
				<Carousel>
					{images.map(image => (
						<Paper square={true} style={{ height: "275px", width: "100%" }}>
							<img src={image.url} alt="partner" className={classes.carouselImage} />
						</Paper>
					))}
				</Carousel>
			</Grid>
		</Grid>
	);
}
