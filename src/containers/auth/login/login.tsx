import { Typography, Box, Link } from "@material-ui/core";
export default function BusinessLogin() {
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
						Login for businesses
					</Typography>
					<Typography gutterBottom align="center">
						To access your business account{" "}
						<Link color="primary" href="/businessLogin" style={{ marginLeft: "5px" }}>
							login here
						</Link>
					</Typography>
				</Box>
			</Box>
		</div>
	);
}
