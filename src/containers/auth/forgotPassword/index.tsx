import React from "react";
import AuthWrapper from "..";
import LoginImage from "@assets/images/loginImage.svg";
import { Box, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import GotMail from "@assets/images/gotMail.svg";
import { Link } from "react-router-dom";
import useForgotPassword from "@hooks/auth/useForgotPassword";
import { Alert } from "@material-ui/lab";
import Button from "@components/button";

export default function ForgotPassword() {
	const { register, handleSubmit, errors } = useForm();

	const { mutate, isLoading, isError, error, isSuccess } = useForgotPassword();
	async function onSubmit(data: any) {
		mutate(data);
	}

	return (
		<AuthWrapper coverImage={LoginImage}>
			<Box height="100vh" display="flex" flexDirection="column" justifyContent="space-around">
				<Typography variant="h3" gutterBottom align="center">
					{isSuccess ? "You've got mail!" : "Forgot password"}
				</Typography>
				{isSuccess ? (
					<Box>
						<Box mb={8} display="flex" alignItems="center">
							<img
								src={GotMail}
								alt="mail"
								style={{
									marginRight: "2em",
								}}
							/>
							<Typography variant="h4">
								Check your inbox to find the password reset link.
							</Typography>
						</Box>
						<Typography variant="body1" gutterBottom>
							You’ll receive an email within 5 minutes. Be sure to check spam folder,
							too.
						</Typography>
						<Typography variant="body1" gutterBottom>
							Didn’t receive any email from us? Click here to contact us.
						</Typography>
						<Box textAlign="center" mt={2}>
							<Button
								component={Link}
								to="/login"
								variant="contained"
								color="secondary"
								rounded
							>
								Back to login
							</Button>
						</Box>
					</Box>
				) : (
					<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
						{isError && (
							<Alert severity="error">
								{(error as any)?.message ??
									"Some error occured. Please try again after some time."}
							</Alert>
						)}
						<Box mt={1.5} mb={2}>
							<Typography gutterBottom color="textSecondary">
								Please enter your registered email id. If the email is registered
								with us, we will send you a reset password link on your mail
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
						<Box textAlign="center" mt={4}>
							<Button
								type="submit"
								disabled={isLoading}
								variant="outlined"
								color="secondary"
								rounded
							>
								Request reset link
							</Button>
						</Box>
					</form>
				)}
				<Box />
			</Box>
		</AuthWrapper>
	);
}
