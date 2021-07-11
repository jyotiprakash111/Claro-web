import { Typography, Box, Link } from "@material-ui/core";
export default function BusinessSignup() {
	return (
		<div style={{ margin: "auto", paddingBottom: "0px" }}>
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
						Are you a business owner
					</Typography>
					<Typography gutterBottom align="center">
						Manage your business with Claroo by{" "}
						<Link color="primary" href="/businessSignup" style={{ marginLeft: "5px" }}>
							signup here
						</Link>
					</Typography>
				</Box>
			</Box>
		</div>
	);
}
