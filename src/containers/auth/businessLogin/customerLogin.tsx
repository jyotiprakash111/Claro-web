import React, { useState } from "react";
import { Typography, Box, Link as MUILink, TextField, InputAdornment } from "@material-ui/core";
import AuthWrapper from "..";

export default function CustomerLogin() {
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
						<MUILink color="primary" href="/login" style={{ marginLeft: "5px" }}>
							login here
						</MUILink>
					</Typography>
				</Box>
			</Box>
		</>
	);
}
