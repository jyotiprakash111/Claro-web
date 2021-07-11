import { PropsWithChildren } from "react";

interface headerProps extends PropsWithChildren<any> {
	logo: string;
	menus: {
		text: string;
		to: string;
	}[];
}

const headerConfig: headerProps = {
	logo: "https://www.google.com",
	menus: [
		{
			text: "Home",
			to: "/home",
		},
		{
			text: "Services",
			to: "/services",
		},
		{
			text: "Schedule",
			to: "/scheduler",
		},
		{
			text: "Packages",
			to: "/packages",
		},
		{
			text: "Partner",
			to: "/partner",
		},
		{
			text: "Contact Us",
			to: "#contact-us",
		},
	],
};

function getUserActionConfig(classes: any, currentUser: any) {
	return [
		{
			className: classes.userAction,
			variant: "text",
			color: null,
			text: "Cart",
			route: "/cart",
			show: !Boolean(currentUser?.items?.length),
		},
		{
			className: classes.userAction,
			variant: "text",
			color: null,
			text: "Login",
			route: "/login",
			show: !Boolean(currentUser),
		},
		{
			className: classes.userAction,
			variant: "contained",
			color: "primary",
			text: "Signup",
			route: "/signUp",
			show: !Boolean(currentUser),
		},
	];
}

export { headerConfig, getUserActionConfig };
