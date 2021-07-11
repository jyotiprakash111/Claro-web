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
		{ url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" },
		{ url: "https://media.istockphoto.com/photos/top-view-table-full-of-food-picture-id1220017909?k=6&m=1220017909&s=170667a&w=0&h=Zy_NqTbEluSW0T667IHW7DVlpQih70V45k-rgeFt6Oo=" },
		{ url: "https://media.istockphoto.com/photos/food-backgrounds-table-filled-with-large-variety-of-food-picture-id1155240408?k=6&m=1155240408&s=612x612&w=0&h=SEhOUzsexrBBtRrdaLWNB6Zub65Dnyjk7vVrTk1KQSU=" },
		{ url: "https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=6&m=1218254547&s=170667a&w=0&h=EXwwoHJ3wI0H2jDfoFhqOiIo2c4cL0y7R8Gop3iIO30=" },
		{ url: "https://media.istockphoto.com/photos/varied-food-carbohydrates-protein-vegetables-fruits-dairy-legumes-on-picture-id1218254547?b=1&k=6&m=1218254547&s=170667a&w=0&h=EXwwoHJ3wI0H2jDfoFhqOiIo2c4cL0y7R8Gop3iIO30=" },
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
