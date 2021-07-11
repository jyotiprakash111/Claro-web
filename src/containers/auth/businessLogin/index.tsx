import React, { useState } from "react";
import { Typography, Box, Link as MUILink, TextField, InputAdornment } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { VisibilityOffOutlined, VisibilityOutlined } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import useBusinessLogin from "@hooks/auth/useLoginbusiness";
import { useAuth } from "@contexts/Auth";
import Button from "@components/button";
import GoogleIcon from "@assets/icons/google.svg";
import CustomerLogin from "./customerLogin";

export default function BusinessLogin() {
	const [showPassword, setShowPassword] = useState(false);
	const togglePassword = () => setShowPassword(!showPassword);

	const { register, handleSubmit, errors } = useForm();

	const { mutate, isLoading, isError, error } = useBusinessLogin();
	const { validateUser, googleLogin, googleLoginError } = useAuth();

	async function onSubmit(data: any) {
		mutate(data, {
			onSuccess: validateUser,
		});
	}

	return (
		<div style={{ background: "#f2f2f7" }}>
			<Box
				style={{
					// minHeight: "90vh",
					width: "550px",
					padding: "30px",
					background: "#FDFDFD",
					margin: "auto ",
				}}
			>
				<Box>
					<Typography variant="h3" gutterBottom align="center">
						Login for business
					</Typography>
					<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
						{isError && (
							<Alert severity="error">
								{(error as any)?.message ??
									"Some error occured. Please try again after some time."}
							</Alert>
						)}
						{googleLoginError && <Alert severity="error">{googleLoginError}</Alert>}
						<Box mt={1.5} mb={2}>
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
						<Box mt={2}>
							<Box display="flex" justifyContent="space-between" alignItems="center">
								<Typography gutterBottom color="textSecondary">
									Password<sup>*</sup>
								</Typography>
								<MUILink component={Link} to="/forgotPassword" color="secondary">
									Forgot Password?
								</MUILink>
							</Box>
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
						<Box textAlign="center" mt={4}>
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
								Log In
							</Button>
						</Box>
					</form>

					<Box textAlign="center" mt={3} mb={2}>
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
							&nbsp;&nbsp;&nbsp;Log In using Google
						</Button>
					</Box>

					<Box mt={8}>
						<Typography variant="body1" align="center">
							<h2>Don't have an business account</h2>
							<Link to="/businessSignup">Sign up here</Link>
						</Typography>
					</Box>
				</Box>
			</Box>
			<CustomerLogin />
		</div>
	);
}
