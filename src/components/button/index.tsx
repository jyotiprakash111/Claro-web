// Custom button component

import React from "react";
import { Button as MUIButton, withStyles } from "@material-ui/core";

const StyledButton = withStyles(({ palette, spacing }) => ({
	root: {
		textTransform: "none",
		borderRadius: (props: any) => (props.rounded ? spacing(3) : spacing(0.5)),
	},
	containedPrimary: {
		color: palette.common.white,
	},
	containedSecondary: {
		color: palette.common.white,
	},
	outlinedSecondary: {
		color: palette.common.black,
	},
}))(MUIButton);

const Button = (props: any) => <StyledButton {...props} />;

export default Button;
