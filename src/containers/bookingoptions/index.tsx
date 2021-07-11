import React, { useState } from "react";
import { Grid, Typography, Button, Divider, TextField, makeStyles, Card } from "@material-ui/core";
import Logoclaroo from "../../assets/images/logoclaroo.png";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare, faMinusSquare, faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import CardContent from "@material-ui/core/CardContent";
import MenuItem from "@material-ui/core/MenuItem";
import MaterialUIPickers from "@components/datepicker";
import Bookingcalender from "../../components/booking-calender";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import "../../assets/css/bookingoptions.scss";
import Cross from "../../assets/images/cross.png";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard", "Omar Alexander"];

interface BookingOptionProps {
	handleBookClose: any;
}

export default function BookingOption(props: BookingOptionProps) {
	const [expanded, setExpanded] = useState(true);
	const [value, setValue] = React.useState("female");
	const [attendees, setAttendees] = React.useState(0);
	const [dateChange, setDateChange] = React.useState(false);
	const [dropIn, setropIn] = React.useState(true);
	const [bookingoption, setBookingoption] = React.useState("");
	const [personName, setPersonName] = React.useState<string[]>([]);
	const [numberofslots, setNumberofslots] = React.useState(0);
	const [checkout, setCheckout] = React.useState(false);

	const handleChange1 = (event: React.ChangeEvent<{ value: unknown }>) => {
		setPersonName(event.target.value as string[]);
	};
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue((event.target as HTMLInputElement).value);
	};

	const handleAttendees = () => {
		setAttendees(attendees + 1);
	};
	const handleAttendees2 = () => {
		setAttendees(attendees - 1);
	};
	const handleDateChange = () => {
		setDateChange(true);
	};

	const handlesNumberofSlots = (childData: any) => {
		setNumberofslots(childData);
	};
	const myCallback = (handleClickOpen: any) => {
		handleClickOpen(handleClickOpen);
	};
	const myCallback2 = () => {
		setDateChange(false);
	};
	const myCallback3 = (num: any) => {
		setNumberofslots(num);
	};
	const handleCheckout = () => {
		setCheckout(true);
		console.log("clicked");
	};

	const forn = () => {
		return (
			<FormControl component="fieldset">
				<FormLabel className="bookingoptions--title ">Booking option</FormLabel>
				<p className="bookingoptions--title-orange-border"></p>
				<Divider />
				<RadioGroup name="gender1" value={value} onChange={handleChange}>
					<FormControlLabel
						value="trialClass"
						className="bookingoptions--radiobuttons"
						control={<Radio />}
						label={
							<div style={{ display: "flex", marginTop: "17px" }}>
								<p>Trial class</p>
								<p className="bookingoptions--radio-title">Free</p>
							</div>
						}
					/>
					<Divider />
					<FormControlLabel
						value="dropIn"
						className="bookingoptions--radiobuttons"
						control={<Radio />}
						label={
							<div style={{ display: "flex", marginTop: "17px" }}>
								<p>Drop-in</p>
								<p className="bookingoptions--radio-title">$20</p>
							</div>
						}
					/>
					<Divider />

					<FormControlLabel
						value="semester"
						className="bookingoptions--radiobuttons"
						control={<Radio />}
						label={
							<div style={{ display: "flex", marginTop: "17px" }}>
								<p>Semester</p>
								<p className="bookingoptions--radio-title">$40</p>
							</div>
						}
					/>
					<Divider />

					<FormControlLabel
						value="weeklyclasses"
						control={<Radio />}
						className="bookingoptions--radiobuttons"
						label={
							<div style={{ display: "flex", marginTop: "17px" }}>
								<p>Weekly classes</p>
								<p className="bookingoptions--radio-title">$95</p>
							</div>
						}
					/>
					<Divider />

					<FormControlLabel
						value="custom"
						className="bookingoptions--radiobuttons"
						control={<Radio />}
						label={
							<div style={{ display: "flex", marginTop: "17px" }}>
								<p>Custom</p>
								<p className="bookingoptions--radio-title">$65</p>
							</div>
						}
					/>
				</RadioGroup>
				<Grid item>
					<Button
						variant="contained"
						size="medium"
						className="bookingoptions--register-btn"
						color="primary"
						fullWidth={false}
					>
						Register
					</Button>
				</Grid>
				<Grid item xs={6}>
					<p className="bookingoptions--poweredby">
						Powered by <img src={Logoclaroo} width={100} height={22}></img>
					</p>
				</Grid>
			</FormControl>
		);
	};
	const useStyles = makeStyles({
		root: {
			minWidth: 275,
			marginBottom: 15,
			marginTop: 25,
		},
		bullet: {
			display: "inline-block",
			margin: "0 2px",
			transform: "scale(0.8)",
		},
		title: {
			fontSize: 14,
		},
		pos: {
			marginBottom: 12,
		},
	});
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Grid xs={12} className="bookingoptions">
			<img src={Cross} width={25} className="cross-icon" onClick={props.handleBookClose} />
			<Grid xs={12}>
				{value === "custom" ? (
					<FormControl component="fieldset" style={{ width: "650px" }}>
						<FormLabel className="bookingoptions--title ">Booking details</FormLabel>
						<Grid item xs={12} className="bookingoptions--form-label-div">
							<FormLabel className="bookingoptions--form-label">
								Custom (
								<a
									onClick={() => setValue("female")}
									className="bookingoptions--form-label2"
								>
									Change
								</a>
								)
							</FormLabel>
							<FormLabel className="bookingoptions--form-label2">Free</FormLabel>
						</Grid>
						<Grid item xs={12} className="bookingoptions--form-label-div">
							<Typography className="bookingoptions--description">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad enim
								vel voluptatibus ullam porro aut, consectetur sunt sapiente illum
								sint hic. Libero esse, itaque voluptatibus et expedita quia deserunt
								reiciendis.
							</Typography>
						</Grid>
						<Divider className="hr" />
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Number of attendees
							</FormLabel>
							<Grid>
								<Button onClick={handleAttendees2}>
									<FontAwesomeIcon
										className="bookingoptions--add-sub-btn"
										icon={faMinusSquare}
									/>
								</Button>
								{attendees}
								<Button onClick={handleAttendees}>
									<FontAwesomeIcon
										className="bookingoptions--add-sub-btn"
										icon={faPlusSquare}
									/>
								</Button>
							</Grid>
						</Grid>
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Select batch
							</FormLabel>
							<Grid>
								<Select
									multiple
									value={personName}
									onChange={handleChange1}
									// input={<OutlinedInput label="Tag" />}
									renderValue={(selected: any) => selected.join(", ")}
									MenuProps={MenuProps}
								>
									{names.map(name => (
										<MenuItem key={name} value={name}>
											<Checkbox checked={personName.indexOf(name) > -1} />
											<ListItemText primary={name} />
										</MenuItem>
									))}
								</Select>
							</Grid>
						</Grid>
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Select dates
							</FormLabel>
							<TextField
								style={{ cursor: "pointer" }}
								id="outlined-basic"
								label={
									<div>
										{numberofslots} dates selected
										<FontAwesomeIcon
											icon={faCalendarWeek}
											style={{ cursor: "pointer" }}
										/>
									</div>
								}
								variant="outlined"
								disabled
								onClick={myCallback}
							/>
							{dateChange === true ? (
								<Bookingcalender
									callbackFromParent2={myCallback2}
									callbackFromParent3={myCallback3}
									callbackFromParent={myCallback}
								/>
							) : null}
						</Grid>
						<div className="bookingoptions--total">
							<Typography>Total(Prorated pricing)</Typography>
							<Typography>$0</Typography>
						</div>
						<Button
							className="bookingoptions--btn-add"
							onClick={() => setValue("checkout")}
						>
							Add to cart
						</Button>
					</FormControl>
				) : value === "trialClass" ? (
					<FormControl component="fieldset" style={{ width: "650px" }}>
						<FormLabel className="bookingoptions--title ">Booking details</FormLabel>
						<Grid item xs={12} className="bookingoptions--form-label-div">
							<FormLabel className="bookingoptions--form-label">
								Trial class (
								<a
									onClick={() => setValue("female")}
									className="bookingoptions--form-label2"
								>
									Change
								</a>
								)
							</FormLabel>
							<FormLabel className="bookingoptions--form-label2">Free</FormLabel>
						</Grid>
						<Grid item xs={12} className="bookingoptions--form-label-div">
							<Typography className="bookingoptions--description">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad enim
								vel voluptatibus ullam porro aut, consectetur sunt sapiente illum
								sint hic. Libero esse, itaque voluptatibus et expedita quia deserunt
								reiciendis.
							</Typography>
						</Grid>
						<Divider className="hr" />
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Number of attendees
							</FormLabel>
							<Grid>
								<Button onClick={handleAttendees2}>
									<FontAwesomeIcon
										className="bookingoptions--add-sub-btn"
										icon={faMinusSquare}
									/>
								</Button>
								{attendees}
								<Button onClick={handleAttendees}>
									<FontAwesomeIcon
										className="bookingoptions--add-sub-btn"
										icon={faPlusSquare}
									/>
								</Button>
							</Grid>
						</Grid>
						<Grid xs={12}>
							<FormLabel className="bookingoptions--form-label">
								Select batch
							</FormLabel>

							<Grid>
								<Select
									multiple
									value={personName}
									onChange={handleChange1}
									// input={<OutlinedInput label="Tag" />}
									renderValue={(selected: any) => selected.join(", ")}
									MenuProps={MenuProps}
								>
									{names.map(name => (
										<MenuItem key={name} value={name}>
											<Checkbox checked={personName.indexOf(name) > -1} />
											<ListItemText primary={name} />
										</MenuItem>
									))}
								</Select>
							</Grid>
						</Grid>
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Select a date
							</FormLabel>
							<MaterialUIPickers />
						</Grid>
						<div className="bookingoptions--total">
							<Typography>Total</Typography>
							<Typography>$0</Typography>
						</div>
						<Button
							className="bookingoptions--btn-add"
							onClick={() => setValue("checkout")}
						>
							Add to cart
						</Button>
					</FormControl>
				) : value === "dropIn" ? (
					<FormControl component="fieldset" style={{ width: "650px" }}>
						<FormLabel className="bookingoptions--title ">Booking details</FormLabel>
						<Grid item xs={12} className="bookingoptions--form-label-div">
							<FormLabel className="bookingoptions--form-label">
								Drop In (
								<a
									onClick={() => setValue("female")}
									className="bookingoptions--form-label2"
								>
									Change
								</a>
								)
							</FormLabel>
							<FormLabel className="bookingoptions--form-label2">Free</FormLabel>
						</Grid>
						<Grid item xs={12} className="bookingoptions--form-label-div">
							<Typography className="bookingoptions--description">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad enim
								vel voluptatibus ullam porro aut, consectetur sunt sapiente illum
								sint hic. Libero esse, itaque voluptatibus et expedita quia deserunt
								reiciendis.
							</Typography>
						</Grid>
						<Divider className="hr" />
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Number of attendees
							</FormLabel>
							<Grid>
								<Button onClick={handleAttendees2}>
									<FontAwesomeIcon
										className="bookingoptions--add-sub-btn"
										icon={faMinusSquare}
									/>
								</Button>
								{attendees}
								<Button onClick={handleAttendees}>
									<FontAwesomeIcon
										className="bookingoptions--add-sub-btn"
										icon={faPlusSquare}
									/>
								</Button>
							</Grid>
						</Grid>
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Select batch
							</FormLabel>
							<Grid>
								<Select
									multiple
									value={personName}
									onChange={handleChange1}
									// input={<OutlinedInput label="Tag" />}
									renderValue={(selected: any) => selected.join(", ")}
									MenuProps={MenuProps}
								>
									{names.map(name => (
										<MenuItem key={name} value={name}>
											<Checkbox checked={personName.indexOf(name) > -1} />
											<ListItemText primary={name} />
										</MenuItem>
									))}
								</Select>
							</Grid>
						</Grid>
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Select dates
							</FormLabel>
							<TextField
								onClick={handleDateChange}
								id="outlined-basic"
								label={
									<div style={{ display: "flex" }}>
										<p>{numberofslots} dates selected</p>
										<FontAwesomeIcon
											icon={faCalendarWeek}
											style={{ position: "absolute", left: 600 }}
										/>
									</div>
								}
								variant="outlined"
								disabled
								style={{ marginTop: "10px", cursor: "pointer" }}
							/>
							{/* <div onClick={handleDateChange}>
								<MaterialUIPickers />
							</div> */}

							{dateChange === true ? (
								<Bookingcalender
									callbackFromParent2={myCallback2}
									callbackFromParent={myCallback}
									callbackFromParent3={myCallback3}
								/>
							) : null}
						</Grid>
						<div className="bookingoptions--total">
							<Typography>Total</Typography>
							<Typography>$0</Typography>
						</div>
						<Button
							className="bookingoptions--btn-add"
							onClick={() => setValue("checkout")}
						>
							Add to cart
						</Button>
					</FormControl>
				) : value === "semester" ? (
					<FormControl component="fieldset" style={{ width: "650px" }}>
						<FormLabel className="bookingoptions--title ">Booking details</FormLabel>
						<Grid item xs={12} className="bookingoptions--form-label-div">
							<FormLabel className="bookingoptions--form-label">
								Semester (
								<a
									onClick={() => setValue("female")}
									className="bookingoptions--form-label2"
								>
									Change
								</a>
								)
							</FormLabel>
							<FormLabel className="bookingoptions--form-label2">Free</FormLabel>
						</Grid>
						<Grid item xs={12} className="bookingoptions--form-label-div">
							<Typography className="bookingoptions--description">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad enim
								vel voluptatibus ullam porro aut, consectetur sunt sapiente illum
								sint hic. Libero esse, itaque voluptatibus et expedita quia deserunt
								reiciendis.
							</Typography>
						</Grid>
						<Divider className="hr" />
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Number of attendees
							</FormLabel>
							<Grid>
								<Button onClick={handleAttendees2}>
									<FontAwesomeIcon
										className="bookingoptions--add-sub-btn"
										icon={faMinusSquare}
									/>
								</Button>
								{attendees}
								<Button onClick={handleAttendees}>
									<FontAwesomeIcon
										className="bookingoptions--add-sub-btn"
										icon={faPlusSquare}
									/>
								</Button>
							</Grid>
						</Grid>
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Select batch
							</FormLabel>
							<Grid>
								<Select
									multiple
									value={personName}
									onChange={handleChange1}
									// input={<OutlinedInput label="Tag" />}
									renderValue={(selected: any) => selected.join(", ")}
									MenuProps={MenuProps}
								>
									{names.map(name => (
										<MenuItem key={name} value={name}>
											<Checkbox checked={personName.indexOf(name) > -1} />
											<ListItemText primary={name} />
										</MenuItem>
									))}
								</Select>
							</Grid>
						</Grid>
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Select starting date
							</FormLabel>
							<MaterialUIPickers />
						</Grid>
						<div className="bookingoptions--total">
							<Typography>Total(Prorated pricing)</Typography>
							<Typography>$0</Typography>
						</div>
						<Button
							className="bookingoptions--btn-add"
							onClick={() => setValue("checkout")}
						>
							Add to cart
						</Button>
					</FormControl>
				) : value === "weeklyclasses" ? (
					<FormControl component="fieldset" style={{ width: "650px" }}>
						<FormLabel className="bookingoptions--title ">Booking details</FormLabel>
						<Grid item xs={12} className="bookingoptions--form-label-div">
							<FormLabel className="bookingoptions--form-label">
								Monthly (
								<a
									onClick={() => setValue("female")}
									className="bookingoptions--form-label2"
								>
									Change
								</a>
								)
							</FormLabel>
							<FormLabel className="bookingoptions--form-label2">Free</FormLabel>
						</Grid>
						<Grid item xs={12} className="bookingoptions--form-label-div">
							<Typography className="bookingoptions--description">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad enim
								vel voluptatibus ullam porro aut, consectetur sunt sapiente illum
								sint hic. Libero esse, itaque voluptatibus et expedita quia deserunt
								reiciendis.
							</Typography>
						</Grid>
						<Divider className="hr" />
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Number of attendees
							</FormLabel>
							<Grid>
								<Button onClick={handleAttendees2}>
									<FontAwesomeIcon
										className="bookingoptions--add-sub-btn"
										icon={faMinusSquare}
									/>
								</Button>
								{attendees}
								<Button onClick={handleAttendees}>
									<FontAwesomeIcon
										className="bookingoptions--add-sub-btn"
										icon={faPlusSquare}
									/>
								</Button>
							</Grid>
						</Grid>
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Select batch
							</FormLabel>
							<Grid>
								<Select
									multiple
									value={personName}
									onChange={handleChange1}
									// input={<OutlinedInput label="Tag" />}
									renderValue={(selected: any) => selected.join(", ")}
									MenuProps={MenuProps}
								>
									{names.map(name => (
										<MenuItem key={name} value={name}>
											<Checkbox checked={personName.indexOf(name) > -1} />
											<ListItemText primary={name} />
										</MenuItem>
									))}
								</Select>
							</Grid>
						</Grid>
						<Grid>
							<FormLabel className="bookingoptions--form-label">
								Select starting date
							</FormLabel>
							<MaterialUIPickers />
						</Grid>
						<div className="bookingoptions--total">
							<Typography>Total(Prorated pricing)</Typography>
							<Typography>$0</Typography>
						</div>
						<Button
							className="bookingoptions--btn-add"
							onClick={() => setValue("checkout")}
						>
							Add to cart
						</Button>
					</FormControl>
				) : value === "checkout" ? (
					<FormControl component="fieldset" style={{ width: "650px" }}>
						<FormLabel className="bookingoptions--title ">Cart Summary</FormLabel>
						<p className="bookingoptions--title-orange-border"></p>
						<Divider />
						<Card className={classes.root}>
							<CardContent style={{ paddingBottom: "42px" }}>
								<Grid direction="row">
									<Grid container justify="space-between">
										<Typography
											variant="h5"
											className={classes.pos}
											style={{
												display: "inline-flex",
												fontFamily: "Gilroy",
												fontSize: "24px",
											}}
										>
											Class Title 1
										</Typography>
										<Typography
											variant="h5"
											className={classes.pos}
											style={{
												display: "inline-flex",
												marginRight: 30,
												color: "#323232",
												fontSize: "32px",
											}}
										>
											$43
										</Typography>
									</Grid>
									<Typography className={classes.pos} color="textSecondary">
										When the class is happening
									</Typography>
									<Typography className={classes.pos} color="textSecondary">
										Number of Sessions: 2
									</Typography>
									<Typography className={classes.pos} color="textSecondary">
										Type of price plan
									</Typography>
									<Grid container>
										<Typography
											className={classes.pos}
											style={{
												position: "absolute",
												right: "38px",
												color: "#FF8021",
											}}
										>
											Remove
										</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
						<Card className={classes.root}>
							<CardContent style={{ paddingBottom: "42px" }}>
								<Grid direction="row">
									<Grid container justify="space-between">
										<Typography
											variant="h5"
											className={classes.pos}
											style={{
												display: "inline-flex",
												fontFamily: "Gilroy",
												fontSize: "24px",
											}}
										>
											Class Title 1
										</Typography>
										<Typography
											variant="h5"
											className={classes.pos}
											style={{
												display: "inline-flex",
												marginRight: 30,
												color: "#323232",
												fontSize: "32px",
											}}
										>
											$43
										</Typography>
									</Grid>
									<Typography className={classes.pos} color="textSecondary">
										When the class is happening
									</Typography>
									<Typography className={classes.pos} color="textSecondary">
										Number of Sessions: 2
									</Typography>
									<Typography className={classes.pos} color="textSecondary">
										Type of price plan
									</Typography>
									<Grid>
										<Typography
											className={classes.pos}
											style={{
												position: "absolute",
												right: "38px",
												color: "#FF8021",
											}}
										>
											Remove
										</Typography>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
						<Grid>
							<h2 style={{ fontSize: "30px", float: "right", marginTop: "40px" }}>
								Total $60
							</h2>
						</Grid>
						<Grid container>
							<Button
								className="bookingoptions--btn-add"
								style={{ marginRight: "8px" }}
								href="/services"
							>
								Keep Shopping
							</Button>
							<Button
								className="bookingoptions--btn-add"
								style={{ marginRight: "8px" }}
								href="/cart"
							>
								Add to cart
							</Button>
						</Grid>
					</FormControl>
				) : (
					forn()
				)}
			</Grid>
		</Grid>
	);
}
