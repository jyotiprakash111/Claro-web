import React, { useState } from "react";
import AuthWrapper from "..";
import LoginImage from "@assets/images/loginImage.svg";
import { Box, InputAdornment, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { VisibilityOffOutlined, VisibilityOutlined } from "@material-ui/icons";
import { Alert } from "@material-ui/lab";
import useResetPassword from "@hooks/auth/useResetPassword";
import queryString from "query-string";
import Button from "@components/button";

export default function ResetPassword() {
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const togglePassword = () => setShowPassword(!showPassword);
	const toggleConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

	const { register, handleSubmit, errors, watch } = useForm();

	const { mutate, isLoading, isError, error, isSuccess } = useResetPassword();
	async function onSubmit(data: any) {
		const params = queryString.parse(window.location.search);
		const { password } = data;
		const payload: any = { ...params, newPassword: password };
		mutate(payload);
	}

	return (
		<AuthWrapper coverImage={LoginImage}>
			<Box height="100vh" display="flex" flexDirection="column" justifyContent="space-around">
				<Typography variant="h3" gutterBottom align="center">
					Set new password
				</Typography>
				<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
					{isError && (
						<Alert severity="error">
							{(error as any)?.message ??
								"Some error occured. Please try again after some time."}
						</Alert>
					)}
					{isSuccess && (
						<Alert severity="success">Password has been successfully reset</Alert>
					)}
					<Box mt={1.5} mb={2}>
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
							placeholder="Enter a new password"
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
							disabled={isSuccess}
						/>
					</Box>
					<Box my={2}>
						<Typography gutterBottom color="textSecondary">
							Password<sup>*</sup>
						</Typography>
						<TextField
							name="confirmPassword"
							type={showConfirmPassword ? "text" : "password"}
							inputRef={register({
								validate: value =>
									value === watch("password") ||
									"Passwords don't match. Please try again.",
							})}
							aria-describedby="password"
							color="secondary"
							variant="outlined"
							fullWidth
							error={Boolean(errors.confirmPassword)}
							helperText={errors.confirmPassword?.message}
							placeholder="Confirm the new password"
							InputProps={{
								endAdornment: (
									<InputAdornment
										position="start"
										onClick={toggleConfirmPassword}
										style={{
											cursor: "pointer",
										}}
									>
										{showConfirmPassword ? (
											<VisibilityOffOutlined color="secondary" />
										) : (
											<VisibilityOutlined color="secondary" />
										)}
									</InputAdornment>
								),
							}}
							disabled={isSuccess}
						/>
					</Box>
					<Box textAlign="center" mt={4}>
						{isSuccess ? (
							<Button
								component={Link}
								to="/login"
								variant="contained"
								color="secondary"
								rounded
							>
								Proceed to login
							</Button>
						) : (
							<Button
								type="submit"
								disabled={isLoading}
								variant="outlined"
								color="secondary"
								rounded
							>
								Set Password
							</Button>
						)}
					</Box>
				</form>
				<Box />
			</Box>
		</AuthWrapper>
	);
}
