import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
	container: {
		display: "flex",
		flexWrap: "wrap",
	},
	formControl: {
		margin: theme.spacing(1),
		minWidth: 120,
	},
}));

interface BookingOptionProps {
	callbackFromParent: any;
	callbackFromParent2: any;
	callbackFromParent3: any;
}

export default function Bookingcalender(props: BookingOptionProps) {
	const classes = useStyles();
	const [open, setOpen] = React.useState(false);
	// const [age, setAge] = React.useState("");
	const [num, setNum] = React.useState(0);
	const [state, setState] = React.useState({
		gilad: true,
		jason: false,
		antoine: false,
		antoine1: false,
		antoine2: false,
		antoine3: false,
		antoine4: false,
	});
	// const handleChange = (event: any) => {
	// 	setAge(Number(event.target.value) || "");
	// };

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};
	const handleChange1 = (event: any) => {
		setState({
			...state,
			[event.target.name]: event.target.checked,
		});
		setNum(event.target.checked === true ? num + 1 : num - 1);
		props.callbackFromParent3(event.target.checked === true ? num + 1 : num - 1);
	};

	const { gilad, jason, antoine, antoine1, antoine2, antoine3, antoine4 } = state;
	const error = [gilad, jason, antoine].filter(v => v).length !== 2;

	return (
		<div>
			<Dialog
				disableBackdropClick
				disableEscapeKeyDown
				open={props.callbackFromParent}
				onClose={props.callbackFromParent2}
			>
				<DialogContent>
					<form className={classes.container}>
						<FormControl component="fieldset" className={classes.formControl}>
							<FormLabel component="legend">Assign responsibility</FormLabel>
							<FormGroup>
								<FormControlLabel
									control={
										<Checkbox
											id="2"
											checked={jason}
											onChange={handleChange1}
											name="jason"
										/>
									}
									label={
										<div>
											<span style={{ paddingRight: "15px" }}>
												27 May 2021
											</span>{" "}
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												Wed
											</span>
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												4 pm
											</span>
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												3 spots left
											</span>
										</div>
									}
								/>
								<FormControlLabel
									control={
										<Checkbox
											id="3"
											checked={antoine}
											onChange={handleChange1}
											name="antoine"
										/>
									}
									label={
										<div>
											<span style={{ paddingRight: "15px" }}>
												31 May 2021
											</span>{" "}
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												Wed
											</span>
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												4 pm
											</span>
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												3 spots left
											</span>
										</div>
									}
								/>
								<FormControlLabel
									control={
										<Checkbox
											id="4"
											checked={antoine1}
											onChange={handleChange1}
											name="antoine1"
										/>
									}
									label={
										<div>
											<span style={{ paddingRight: "15px" }}>
												22 May 2021
											</span>{" "}
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												Wed
											</span>
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												4 pm
											</span>
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												3 spots left
											</span>
										</div>
									}
								/>
								<FormControlLabel
									control={
										<Checkbox
											id="4"
											checked={antoine2}
											onChange={handleChange1}
											name="antoine2"
										/>
									}
									label={
										<div>
											<span style={{ paddingRight: "15px" }}>
												11 May 2021
											</span>{" "}
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												Wed
											</span>
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												4 pm
											</span>
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												3 spots left
											</span>
										</div>
									}
								/>
								<FormControlLabel
									control={
										<Checkbox
											id="5"
											checked={antoine3}
											onChange={handleChange1}
											name="antoine3"
										/>
									}
									label={
										<div>
											<span style={{ paddingRight: "15px" }}>
												26 May 2021
											</span>{" "}
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												Wed
											</span>
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												4 pm
											</span>
											<span
												style={{
													paddingRight: "15px",
													color: "rgb(84 81 81 / 87%)",
												}}
											>
												3 spots left
											</span>
										</div>
									}
								/>
							</FormGroup>
						</FormControl>
					</form>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.callbackFromParent2} color="primary">
						Cancel
					</Button>
					<Button onClick={props.callbackFromParent2} color="primary">
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
function callbackFromParent3(num: number) {
	throw new Error("Function not implemented.");
}
