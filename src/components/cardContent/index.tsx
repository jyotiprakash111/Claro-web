import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Container, Divider } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		// backgroundColor: "#fff",
		paddingTop: 1,
	},
	paper: {
		padding: theme.spacing(2),
		textAlign: "center",
		color: theme.palette.text.secondary,
	},

	root1: {
		minWidth: 275,
		backgroundColor: "#F8F8F8",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 18,
	},
	pos: {
		marginBottom: 12,
	},

	mt: {
		marginTop: 50,
	},
	bottomBorder: {
		width: "200px",
		height: "6px",
		backgroundColor: "#FF8021",
		// position: "absolute",
	},
}));

export default function CartCheckout(props:any) {
	const classes = useStyles();

	return (
		<div className={classes.root}>
            <Card className={classes.root1}>
							<CardContent>
								<Typography className={classes.title} gutterBottom>
									Cart summary (2 items)
								</Typography>
								<Divider />
								<br />
								<Grid container justify="space-between">
									<Typography
										className={classes.pos}
										style={{ display: "inline-flex" }}
										
									>
										Class Title 1
									</Typography>
									<Typography
										className={classes.pos}
										style={{ display: "inline-flex", marginRight: 30 }}
										
									>
										$43
									</Typography>
								</Grid>

								<Grid container justify="space-between">
									<Typography
										className={classes.pos}
										style={{ display: "inline-flex" }}
										
									>
										Class Title 1
									</Typography>
									<Typography
										className={classes.pos}
										style={{ display: "inline-flex", marginRight: 30 }}
										
									>
										$43
									</Typography>
								</Grid>
								<br />
								<Divider />
								<br />

								<Grid container justify="space-between">
									<Typography
										className={classes.pos}
										style={{ display: "inline-flex",fontWeight:"bold"}}
										
									>
										Total
									</Typography>
									<Typography
										className={classes.pos}
										style={{ display: "inline-flex", marginRight: 30,fontWeight:"bold" }}
										
									>
										$60
									</Typography>
								</Grid>
								<Divider />
							</CardContent>
                        {
                            props && props.hideCheckout === true ?
                            null
                            :
                            <CardActions>
								<Button
									variant="contained"
									style={{ width: "100%", color: "#fff", marginTop: 60 }}
									color="primary"
								>
									<Link
										to={props.path}
										style={{ textDecoration: "none", color: "#fff" }}
									>
										{props.buttonName}
									</Link>
								</Button>
							</CardActions>                        
                        }
							
						</Card>
		</div>
	);
}
