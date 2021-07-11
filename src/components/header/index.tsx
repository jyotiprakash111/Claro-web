import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import {
	Drawer,
	IconButton,
	makeStyles,
	useMediaQuery,
	Theme,
	List,
	ListItemIcon,
	Avatar,
	Menu,
	MenuItem,
	Divider,
	withStyles,
	ListItemText,
} from "@material-ui/core";
import { headerConfig, getUserActionConfig } from "./config";
import MenuIcon from "@material-ui/icons/Menu";
import NavItem from "./navItem";
// This would replace the app logo
import AcUnitIcon from "@material-ui/icons/AcUnit";
import { Link } from "react-router-dom";
import { useAuth } from "@contexts/Auth";
import SendIcon from "@material-ui/icons/Send";
import Button from "@components/button";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(theme => ({
	userAction: {
		marginLeft: "10px",
	},
	partnerHeaders: {
		display: "flex",
		flexGrow: 1,
		alignItems: "center",
	},
	[theme.breakpoints.down("sm")]: {
		navList: {
			padding: theme.spacing(2.5),
			width: "175px",
		},
		close: {
			marginBottom: theme.spacing(1.5),
			cursor: "pointer",
		},
	},
	[theme.breakpoints.up("md")]: {
		navList: {
			display: "flex",
			flexGrow: 1,
			alignItems: "center",
		},
	},
}));

const StyledMenu = withStyles({
	paper: {
		border: "1px solid #d3d4d5",
	},
})((props: any) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: "bottom",
			horizontal: "right",
		}}
		transformOrigin={{
			vertical: "top",
			horizontal: "right",
		}}
		open={props.open}
		{...props}
	/>
));

const StyledMenuItem = withStyles(theme => ({
	root: {
		"&:focus": {
			backgroundColor: theme.palette.primary.main,
			"& .MuiListItemIcon-root, & .MuiListItemText-primary": {
				color: theme.palette.common.white,
			},
		},
	},
}))(MenuItem);

export default function Header(props: any) {
	const classes = useStyles();

	const [drawerOpen, toggleDrawer] = useState(false);
	const [anchorElement, setAnchorElement] = useState(null);
	const mobileView = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
	const { currentUser } = useAuth();

	const handleClick = (event: any) => {
		setAnchorElement(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorElement(null);
	};

	const NavList = (props: any) => (
		<List component="nav" {...props} className={classes.navList}>
			<ListItemIcon className={classes.close}>
				{props.mobile ? <CloseIcon /> : <AcUnitIcon color="primary" />}
			</ListItemIcon>
			{headerConfig.menus.map((item: any) => (
				<NavItem type="temp" text={item.text} to={item.to} />
			))}
		</List>
	);

	const displayDesktop = () => (
		<Toolbar disableGutters={true}>
			<Box component={NavList} />
			<Box display="flex">
				{getUserActionConfig(classes, currentUser).map(
					button =>
						button.show &&
						ButtonGenerator(
							button.className,
							button.variant,
							button.color,
							button.text,
							button.route
						)
				)}
				{currentUser && (
					<>
						<Avatar
							onClick={handleClick}
							style={{
								cursor: "pointer",
							}}
						>
							{`${currentUser.firstName
								.slice(0, 1)
								.toUpperCase()}${currentUser.lastName.slice(0, 1).toUpperCase()}`}
						</Avatar>
						<StyledMenu
							id="customized-menu"
							anchorEl={anchorElement}
							keepMounted
							open={Boolean(anchorElement)}
							onClose={handleClose}
						>
							<StyledMenuItem>
								<ListItemText primary="Jane Doe" />
							</StyledMenuItem>
							<Link to="/userSettings">
								<ListItemText primary="Edit Profile" />
							</Link>
							<Divider />
							<StyledMenuItem>
								<ListItemIcon>
									<SendIcon fontSize="small" />
								</ListItemIcon>
								<Link to="/userSettings">
									<ListItemText primary="Notifications" />
								</Link>
							</StyledMenuItem>
							<StyledMenuItem>
								<ListItemIcon>
									<SendIcon fontSize="small" />
								</ListItemIcon>
								<Link to="/userSettings">
									<ListItemText primary="Schedule" />
								</Link>
							</StyledMenuItem>
							<StyledMenuItem>
								<ListItemIcon>
									<SendIcon fontSize="small" />
								</ListItemIcon>
								<Link to="/userSettings">
									<ListItemText primary="Bookings" />
								</Link>
							</StyledMenuItem>
							<StyledMenuItem>
								<ListItemIcon>
									<SendIcon fontSize="small" />
								</ListItemIcon>
								<Link to="/userSettings">
									<ListItemText primary="Saved Classes" />
								</Link>
							</StyledMenuItem>
							<StyledMenuItem>
								<ListItemIcon>
									<SendIcon fontSize="small" />
								</ListItemIcon>
								<Link to="/userSettings">
									<ListItemText primary="Pending Transactions" />
								</Link>
							</StyledMenuItem>
							<Divider />
							<StyledMenuItem>
								<ListItemText primary="Help" />
							</StyledMenuItem>
							<StyledMenuItem>
								<ListItemText primary="Logout" />
							</StyledMenuItem>
						</StyledMenu>
					</>
				)}
			</Box>
		</Toolbar>
	);

	const displayMobile = () => {
		const handleDrawerOpen = () => toggleDrawer(true);
		const handleDrawerClose = (event: any) => {
			if (event.target.nodeName !== "DIV" && event.target.nodeName !== "NAV") {
				toggleDrawer(false);
			}
		};

		return (
			<Toolbar disableGutters={true}>
				<IconButton
					edge={"start"}
					color={"inherit"}
					aria-label={"menu"}
					aria-haspopup={"true"}
					onClick={handleDrawerOpen}
				>
					<MenuIcon />
				</IconButton>

				<Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
					<NavList onClick={handleDrawerClose} mobile />
				</Drawer>

				<Box className={classes.partnerHeaders}>{/* <AcUnitIcon /> */}</Box>
				<Box display="flex">
					{getUserActionConfig(classes, currentUser)
						.map(
							button =>
								button.show &&
								ButtonGenerator(
									button.className,
									button.variant,
									button.color,
									button.text,
									button.route
								)
						)
						.filter(data => data)}
				</Box>
			</Toolbar>
		);
	};

	const ButtonGenerator = (className: any, variant: any, color: any, text: any, route: any) => (
		<Button
			component={Link}
			to={route}
			variant={variant}
			className={className}
			color={color || "inherit"}
			rounded
		>
			{text}
		</Button>
	);

	return (
		<React.Fragment>
			<AppBar color={"inherit"}>
				<Container maxWidth="md">
					{mobileView ? displayMobile() : displayDesktop()}
				</Container>
			</AppBar>
			{/* Do not remove the empty Toolbar below. It is necessary to make the main content start below the app bar */}
			<Toolbar disableGutters={true} />
		</React.Fragment>
	);
}
