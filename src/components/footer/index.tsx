import React from "react";
import Container from "@material-ui/core/Container";
import {
	Box,
	Divider,
	Grid,
	Hidden,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@material-ui/core";
import { headerConfig } from "@components/header/config";
import NavItem from "@components/header/navItem";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import WebIcon from "@material-ui/icons/Language";
import LocationIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/PhoneInTalk";
import MailIcon from "@material-ui/icons/Mail";
import TimeIcon from "@material-ui/icons/Schedule";
import AppLogo from "@assets/icons/appLogo.svg";

export default function Footer(props: any) {
	return (
		<Box mt={6} pt={6} pb={2} style={{ background: "#F1F1F1" }}>
			<Container maxWidth="md">
				<Grid container justify="space-between">
					<Grid item xs={12} md={7}>
						<Typography variant={"h5"} gutterBottom>
							Flavours of Asia
						</Typography>
						<Typography variant={"body1"} gutterBottom paragraph={true}>
							Let your buds do the talking
						</Typography>
						<Divider
							style={{
								width: "75px",
								marginTop: "2em",
							}}
						/>
						<Box component={List} display="flex">
							{headerConfig.menus.map((item: any) => (
								<NavItem type="temp" text={item.text} to={item.to} />
							))}
						</Box>
						<Box display="flex" mt={2} justifyContent="space-between" maxWidth={"40%"}>
							<LinkedInIcon />
							<TwitterIcon />
							<InstagramIcon />
							<FacebookIcon />
							<WebIcon />
						</Box>
						<Box display="flex" mt={5}>
							<NavItem type="temp" to="#home" text="Privacy Policy" />
							<NavItem type="temp" to="#home" text="Terms and conditions" />
						</Box>
					</Grid>
					<Hidden mdUp>
						<Grid item xs={6}>
							<Divider
								style={{
									margin: "2em 0",
								}}
							/>
						</Grid>
					</Hidden>
					<Grid item xs={12} md={4}>
						<Typography variant="h6">Contact Us</Typography>
						<List>
							<ListItem alignItems="flex-start" disableGutters>
								<ListItemIcon>
									<LocationIcon />
								</ListItemIcon>
								<ListItemText>
									87 Science Park Drive The Oasis, #03-02, Singapore, 118260
								</ListItemText>
							</ListItem>

							<ListItem alignItems="flex-start" disableGutters>
								<ListItemIcon>
									<PhoneIcon />
								</ListItemIcon>
								<ListItemText>(+91) - 556-536-8512</ListItemText>
							</ListItem>

							<ListItem alignItems="flex-start" disableGutters>
								<ListItemIcon>
									<MailIcon />
								</ListItemIcon>
								<ListItemText>customer.service@claroo.com</ListItemText>
							</ListItem>

							<ListItem alignItems="flex-start" disableGutters>
								<ListItemIcon>
									<TimeIcon />
								</ListItemIcon>
								<ListItemText>
									<Box>Mon - Fri</Box>
									<Box>10.00AM - 6 PM</Box>
									<Box mt={1.5}>Sat - Sun</Box>
									<Box>1 PM - 6 PM</Box>
								</ListItemText>
							</ListItem>
						</List>
					</Grid>
				</Grid>
				<Box
					display={"flex"}
					justifyContent={"center"}
					alignItems={"flex-end"}
					width={"100%"}
				>
					<Typography variant="body1">Powered By&nbsp;&nbsp;</Typography>
					<Box>
						<img src={AppLogo} alt="Claroo" height={22} width={100} />
					</Box>
				</Box>
			</Container>
		</Box>
	);
}
