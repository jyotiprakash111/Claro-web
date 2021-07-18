import React, { useState } from "react";
import {
	Typography,
	Box,
	Link as MUILink,
	ClickAwayListener,
	Tooltip,
	withStyles,
	Checkbox,
	FormControlLabel,
	TextField,
	InputAdornment,
	makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import BusinessSignup from "./signup";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AuthWrapper from "..";
import { useForm } from "react-hook-form";
import { VisibilityOffOutlined, VisibilityOutlined } from "@material-ui/icons";
import useSignup from "@hooks/auth/useSignup";
import { Alert } from "@material-ui/lab";
import { useAuth } from "@contexts/Auth";
import Button from "@components/button";
import GoogleIcon from "@assets/icons/google.svg";
import axios from 'axios';

const CustomTooltip = withStyles(theme => ({
	tooltip: {
		backgroundColor: theme.palette.secondary.main,
		boxShadow: theme.shadows[1],
	},
	arrow: {
		color: theme.palette.secondary.main,
	},
}))(Tooltip);

export default function SignUpPage() {
	const [showPassword, setShowPassword] = useState(false);
	const [agreement, setAgreement] = useState(false);
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const togglePassword = () => setShowPassword(!showPassword);

	const setUserAgreement = () => setAgreement(!agreement);

	const handleTooltipClose = () => setTooltipOpen(false);
	const handleTooltipOpen = () => setTooltipOpen(true);

	const { register, handleSubmit, errors } = useForm();

	const { mutate, isLoading, isError, error } = useSignup();

	const { validateUser, googleLogin, googleLoginError } = useAuth();

	async function onSubmit(data: any) {
		const { firstName, lastName, email, contactNumber, password } = data;
		const payload: any = { firstName, lastName, email, contactNumber, password };
		axios.post('http://13.234.241.199:8080/api/v1/auth/register/store',payload).then((res) => {
			console.log(res.data)
		})
		mutate(payload, {
			onSuccess: validateUser,
		});
	
	}

	return (
		<div style={{ background: "#f2f2f7" }}>
			<Box
				style={{
					width: "550px",
					padding: "30px",
					background: "#FDFDFD",
					margin: "auto",
					paddingBottom: "0px",
				}}
			>
				<Box>
					<Typography variant="h3" gutterBottom align="center">
						Sign up to book
					</Typography>

					<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
						{isError && (
							<Alert severity="error">
								{(error as any)?.message ??
									"Some error occured. Please try again after some time."}
							</Alert>
						)}
						{googleLoginError && <Alert severity="error">{googleLoginError}</Alert>}
						<Box display="flex" justifyContent="space-between" mt={1.5} mb={2}>
							<Box width="48%">
								<Typography gutterBottom color="textSecondary">
									First name
									<sup>*</sup>
								</Typography>
								<TextField
									name="firstName"
									inputRef={register({ required: "First Name is required" })}
									aria-describedby="first-name"
									color="secondary"
									variant="outlined"
									fullWidth
									error={Boolean(errors.firstName)}
									helperText={errors.firstName?.message}
									placeholder="First name"
								/>
							</Box>
							<Box width="48%">
								<Typography gutterBottom color="textSecondary">
									Last name
									<sup>*</sup>
								</Typography>
								<TextField
									name="lastName"
									inputRef={register({ required: "Last Name is required" })}
									aria-describedby="last-name"
									color="secondary"
									variant="outlined"
									fullWidth
									error={Boolean(errors.lastName)}
									helperText={errors.lastName?.message}
									placeholder="Last name"
								/>
							</Box>
						</Box>
						<Box my={2}>
							<Typography gutterBottom color="textSecondary">
								Email address<sup>*</sup>
							</Typography>
							<TextField
								name="email"
								inputRef={register({
									required: "Email address is required",
									pattern: {
										value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
										message: "Invalid email address",
									},
								})}
								aria-describedby="email-id"
								color="secondary"
								variant="outlined"
								fullWidth
								error={Boolean(errors.email)}
								helperText={errors.email?.message}
								placeholder="Email address"
							/>
						</Box>
						<Box my={2}>
							<Typography gutterBottom color="textSecondary">
								Password<sup>*</sup>
							</Typography>
							<TextField
								name="password"
								type={showPassword ? "text" : "password"}
								inputRef={register({
									required: "Password is required",
									minLength: {
										value: 8,
										message: "Min. 8 characters",
									},
									maxLength: {
										value: 15,
										message: "Max. 15 characters only",
									},
								})}
								aria-describedby="password"
								color="secondary"
								variant="outlined"
								fullWidth
								error={Boolean(errors.password)}
								helperText={errors.password?.message}
								placeholder="Password"
								InputProps={{
									endAdornment: (
										<InputAdornment
											position="start"
											onClick={togglePassword}
											style={{
												cursor: "pointer",
											}}
										>
											{showPassword ? (
												<VisibilityOffOutlined color="secondary" />
											) : (
												<VisibilityOutlined color="secondary" />
											)}
										</InputAdornment>
									),
								}}
							/>
						</Box>

						<Box mt={2}>
							<Box display="flex" mb={0.7}>
								<Typography color="textSecondary">
									Phone number(optional)&nbsp;
								</Typography>
								<ClickAwayListener onClickAway={handleTooltipClose}>
									<div>
										<CustomTooltip
											PopperProps={{
												disablePortal: true,
											}}
											onClose={handleTooltipClose}
											open={tooltipOpen}
											disableFocusListener
											disableTouchListener
											title="Sharing contact number makes it easier for partners to get in touch with you regarding your booking compared to emails"
											placement="right"
											arrow
										>
											<InfoOutlinedIcon
												color="secondary"
												onClick={handleTooltipOpen}
											/>
										</CustomTooltip>
									</div>
								</ClickAwayListener>
							</Box>
							<TextField
								name="contactNumber"
								inputRef={register}
								aria-describedby="phone-number"
								color="secondary"
								variant="outlined"
								fullWidth
								error={Boolean(errors.contactNumber)}
								helperText={errors.contactNumber?.message}
								placeholder="Phone number"
							/>
						</Box>

						<Box mt={0.25} mb={2.5}>
							<FormControlLabel
								control={
									<Checkbox
										checked={agreement}
										onChange={setUserAgreement}
										name="agreeToTnC"
										id="agree-to-tnc"
										inputRef={register({ required: true })}
									/>
								}
								label="I agree to the privacy policy and terms and conditions"
							/>
							{errors.agreeToTnC &&
								document.getElementById("agree-to-tnc")?.parentElement?.focus}
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
								Sign up
							</Button>
						</Box>
					</form>

					<Box textAlign="center" my={2}>
						<Button
							type="submit"
							disabled={isLoading}
							variant="outlined"
							color="secondary"
							onClick={googleLogin}
							rounded
							style={{
								width: "470px",
								height: "40px",
								border: "1px solid #65B1EC",
								borderRadius: "25px",
							}}
						>
							<img height="15px" src={GoogleIcon} alt="G" />
							&nbsp;&nbsp;&nbsp;Sign up using Google
						</Button>
					</Box>

					<Box>
						<Typography variant="body1" align="center">
							<h2>Already have an account?</h2>
							<Link to="/login">Log In</Link>
						</Typography>
					</Box>
				</Box>
			</Box>
			<BusinessSignup />
		</div>
	);
}
