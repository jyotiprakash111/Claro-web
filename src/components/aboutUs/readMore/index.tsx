import React, { useState } from "react";
import { Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
	hidden: {
		display: "-webkit-box",
		WebkitLineClamp: 8,
		overflow: "hidden",
		WebkitBoxOrient: "vertical",
		whiteSpace: "pre-line",
		marginBottom: "0.75em"
	},
	visible: {
		whiteSpace: "pre-line",
		marginBottom: "1em"
	},
	readMore: {
		color: theme.palette.primary.main,
		cursor: "pointer",
	},
}));
function ReadMore(props: any) {
	const classes = useStyles();
	const [isHidden, setIsHidden] = useState(true);
	return (
		<>
			<div className={isHidden ? classes.hidden : classes.visible}>{props.children}</div>
			<Link className={classes.readMore} onClick={() => setIsHidden(!isHidden)}>
				{isHidden ? "Read More" : "Read Less"}
			</Link>
		</>
	);
}

export default ReadMore;
