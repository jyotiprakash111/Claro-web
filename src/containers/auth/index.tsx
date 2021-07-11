// This is the wrapper for the auth pages
import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

export default function AuthWrapper(props: any) {
	return (
		<Grid
			container
			wrap="nowrap"
			style={{
				width: "100%",
				height: "100vh",
			}}
		>
			<Hidden smDown>
				<Grid
					item
					style={{
						height: "100vh",
						zIndex: -1,
					}}
				>
					<img src={props.coverImage} height="100%" alt="Cover goes here" />
				</Grid>
			</Hidden>
			<Grid item xs={12} md={8}>
				<Container maxWidth="sm">{props.children}</Container>
			</Grid>
		</Grid>
	);
}
