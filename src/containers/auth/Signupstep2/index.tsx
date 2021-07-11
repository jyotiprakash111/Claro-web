import React, { useState } from "react";
import { Typography, Box, Tooltip, withStyles, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import useStepTwo from "@hooks/auth/useStepTwo";
import { Alert } from "@material-ui/lab";
import { useAuth } from "@contexts/Auth";
import Button from "@components/button";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "../../../styles/step1.scss";

const CustomTooltip = withStyles(theme => ({
	tooltip: {
		backgroundColor: theme.palette.secondary.main,
		boxShadow: theme.shadows[1],
	},
	arrow: {
		color: theme.palette.secondary.main,
	},
}))(Tooltip);

export default function Signupstep2() {
	const [showPassword, setShowPassword] = useState(false);
	const [agreement, setAgreement] = useState(false);
	const [tooltipOpen, setTooltipOpen] = useState(false);
	const [age, setAge] = React.useState("");
	const [age1, setAge1] = React.useState("");

	const togglePassword = () => setShowPassword(!showPassword);

	const setUserAgreement = () => setAgreement(!agreement);

	const handleTooltipClose = () => setTooltipOpen(false);
	const handleTooltipOpen = () => setTooltipOpen(true);

	const { register, handleSubmit, errors } = useForm();

	const { mutate, isLoading, isError, error } = useStepTwo();

	const { validateUser, googleLogin, googleLoginError } = useAuth();

	async function onSubmit(data: any) {
		const { firstName, lastName, email, contactNumber, password } = data;
		const payload: any = { firstName, lastName, email, contactNumber, password };
		mutate(payload, {
			onSuccess: validateUser,
		});
	}
	const handleChange = (event: any) => {
		setAge(event.target.value);
	};
	const handleChange1 = (event: any) => {
		setAge1(event.target.value);
	};
	return (
		<>
			<Box
				className="step1-div"
				style={{
					width: "550px",
					padding: "30px",
					background: "#FDFDFD",
					margin: "auto",
					paddingBottom: "0px",
					marginTop: "100px",
				}}
			>
				<Box>
					<Typography variant="h3" gutterBottom align="center">
						Just one more thing
					</Typography>
					<Typography
						variant="h5"
						gutterBottom
						style={{ marginBottom: "30px" }}
						align="center"
					>
						Let’s setup your business (2/2)
					</Typography>

					<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
						<Box mt={1.5} mb={2}>
							<Box>
								<Typography gutterBottom color="textSecondary">
									What your team size right now
									<sup>*</sup>
								</Typography>
								<FormControl variant="outlined" style={{ width: "100%" }}>
									<Select
										labelId="demo-simple-select-outlined-label"
										id="demo-simple-select-outlined"
										value={age}
										inputRef={register({
											required: "What your team size right now is required",
										})}
										onChange={handleChange}
									>
										<MenuItem value="It’s just me">It’s just me</MenuItem>
										<MenuItem value="2 -5 ">2 -5 </MenuItem>
										<MenuItem value="6 - 10">6 - 10</MenuItem>
										<MenuItem value="11+">11+</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</Box>
						<Box mt={1.5} mb={2}>
							<Box>
								<Typography gutterBottom color="textSecondary">
									What tool do you use to manage bookings?
									<sup>*</sup>
								</Typography>
								<TextField
									name="What tool do you use to manage bookings?"
									inputRef={register({
										required:
											"What tool do you use to manage bookings? is required",
									})}
									aria-describedby="business-name"
									color="secondary"
									variant="outlined"
									fullWidth
									error={Boolean(errors.firstName)}
									helperText={errors.firstName?.message}
									placeholder="Software name"
								/>
							</Box>
						</Box>
						<Box mt={1.5} mb={2}>
							<Box>
								<Typography gutterBottom color="textSecondary">
									How did you hear about Claroo?
									<sup>*</sup>
								</Typography>
								<FormControl variant="outlined" style={{ width: "100%" }}>
									<Select
										inputRef={register({ required: "Timezone is required" })}
										value={age1}
										onChange={handleChange1}
										style={{ marginBottom: "30px" }}
										placeholder="Please tell us how did you hear about us :)"
									>
										<MenuItem value="You reached out to me!">
											You reached out to me!
										</MenuItem>
										<MenuItem value="Recommended by a friend">
											Recommended by a friend
										</MenuItem>
										<MenuItem value="Google or other search engines (Yahoo, Bing etc.)">
											Google or other search engines (Yahoo, Bing etc.)
										</MenuItem>
										<MenuItem value="Social media (Facebook, Instagram)">
											Social media (Facebook, Instagram)
										</MenuItem>
										<MenuItem value="Rating website (Capterra, Trustpilot)">
											Rating website (Capterra, Trustpilot)
										</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</Box>
						<Box textAlign="center">
							<Button
								type="submit"
								disabled={isLoading}
								variant="contained"
								color="secondary"
								rounded
								style={{
									padding: "12px 40px",
									width: "470px",
									// height: "59px",
									background: "#65B1EC",
									borderRadius: "30px",
								}}
							>
								<Link to="/businessLogin" style={{ color: "white" }}>
									Continue
								</Link>
							</Button>
						</Box>
					</form>
				</Box>
			</Box>
		</>
	);
}
