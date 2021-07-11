import React, { useState } from "react";
import { Typography, Box, Link as MUILink } from "@material-ui/core";
export default function CustomerSignupLink() {
	return (
		<>
			<Box
				style={{
					width: "550px",
					padding: "30px",
					background: "#FDFDFD",
					margin: "30px auto ",
				}}
			>
				<Box>
					<Typography variant="h5" gutterBottom align="center">
						Booking as a customer?
					</Typography>
					<Typography gutterBottom align="center">
						This is a business page, please go to customer
						<MUILink color="primary" href="/signUp" style={{ marginLeft: "5px" }}>
							sign up page
						</MUILink>
					</Typography>
				</Box>
			</Box>
		</>
	);
}
