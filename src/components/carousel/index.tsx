import React from "react";
import { makeStyles } from "@material-ui/core";
import MuiCarousel from "react-material-ui-carousel";

const useStyles = makeStyles(theme => ({
	activeIndicator: {
		border: "none",
		color: theme.palette.primary.main,
	},
	navButton: {
		backgroundColor: theme.palette.primary.main,
		opacity: 0.7,
	},
}));

const Carousel = (props: any) => {
	const classes = useStyles();

	const { navButtonsAlwaysInvisible, children } = props;

	return (
		<MuiCarousel
			animation="slide"
			navButtonsAlwaysInvisible={navButtonsAlwaysInvisible}
			activeIndicatorIconButtonProps={{
				className: classes.activeIndicator,
				style: {}, // ! Do not remove this. The library breaks without this
			}}
			navButtonsProps={{
				className: classes.navButton,
				style: {}, // ! Do not remove this. The library breaks without this
			}}
		>
			{children}
		</MuiCarousel>
	);
};

export default Carousel;
