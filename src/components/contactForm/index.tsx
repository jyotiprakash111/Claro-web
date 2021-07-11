import React from "react";
import { Box, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import useContactForm from "@hooks/useContactForm";
import Button from "@components/button";

const ContactForm = () => {
	const { register, handleSubmit, errors } = useForm();
	const { mutate, isLoading, isError, error } = useContactForm();

	const onSubmit = (data: any) => {
		console.log(data);
		// mutate(data);
	};

	return (
		<>
			<Typography variant="h3" gutterBottom>
				Contact Us
			</Typography>
			<form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
				<Box>
					<TextField
						name="username"
						inputRef={register({
							required: "Name is required",
						})}
						aria-describedby="name"
						color="secondary"
						variant="outlined"
						fullWidth
						error={Boolean(errors.username)}
						helperText={errors.username?.message}
						placeholder="Name"
					/>
				</Box>
				<Box mt={4}>
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
				<Box mt={4}>
					<TextField
						name="contactQuery"
						multiline
						rows={4}
						inputRef={register({
							required: "Please type in your query",
						})}
						aria-describedby="contact-query"
						color="secondary"
						variant="outlined"
						fullWidth
						error={Boolean(errors.contactQuery)}
						helperText={errors.contactQuery?.message}
						placeholder="Contact Query"
					/>
				</Box>
				<Box mt={4}>
					<Button type="submit" variant="contained" color="primary" disabled={isLoading}>
						Submit
					</Button>
					<Button
						variant="outlined"
						color="primary"
						style={{
							marginLeft: "2em",
						}}
					>
						Chat with us
					</Button>
				</Box>
			</form>
		</>
	);
};

export default ContactForm;
