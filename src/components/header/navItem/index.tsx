import { ListItem, ListItemText, makeStyles } from "@material-ui/core";
import React, { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

interface Props extends PropsWithChildren<any> {
	type: string;
	text: string;
	to: string;
}

const useStyles = makeStyles(theme => ({
	navItem: {
		textDecoration: "none",
		padding: "0.25em 1em 0.25em 0",
		color: theme.palette.text.primary,
		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
}));

const NavItem = ({ type, text, to }: Props) => {
	const classes = useStyles();
	const CustomLink = (props: any) => (
		<NavLink to={to} className={classes.navItem}>
			{props.children}
		</NavLink>
	);
	return (
		<ListItem button component={CustomLink}>
			<ListItemText primary={text} />
		</ListItem>
	);
};

export default NavItem;
