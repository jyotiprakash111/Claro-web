import React, { useState, useEffect } from "react";
import { Typography, Box, TextField } from "@material-ui/core";
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
import axios from "axios";

export default function Signupstep1() {
	const [age, setAge] = React.useState("");
	const [age1, setAge1] = React.useState([]);
	const [select, setSelect] = React.useState("");

	useEffect(() => {
		axios
			.get("http://13.234.241.199:8080/api/v1/timezones")
			.then((res: any) => res.data)
			.then(data => setAge1(data.data.timezones));
	});

	const { register, handleSubmit, errors } = useForm();

	const { mutate, isLoading, isError, error } = useStepTwo();

	const { validateUser } = useAuth();

	async function onSubmit(data: any) {
		const { businessName, businessType, timezone } = data;
		const payload: any = { businessName, businessType, timezone };
		mutate(payload, {
			onSuccess: validateUser,
		});
	}
	const handleChange = (event: any) => {
		setAge(event.target.value);
	};
	const handleChange1 = (event: any) => {
		setSelect(event.target.value);
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
						Hello first name
					</Typography>
					<Typography
						variant="h5"
						gutterBottom
						style={{ marginBottom: "30px" }}
						align="center"
					>
						Let’s setup your business (1/2)
					</Typography>

					<form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
						<Box mt={1.5} mb={2}>
							<Box>
								<Typography gutterBottom color="textSecondary">
									Business name
									<sup>*</sup>
								</Typography>
								<TextField
									name="businessName"
									inputRef={register({
										required: "Name of your business is required",
									})}
									aria-describedby="business-name"
									color="secondary"
									variant="outlined"
									fullWidth
									error={Boolean(errors.firstName)}
									helperText={errors.firstName?.message}
									placeholder="Name of your business"
								/>
							</Box>
						</Box>
						<Box mt={1.5} mb={2}>
							<Box>
								<Typography gutterBottom color="textSecondary">
									Choose your business type
									<sup>*</sup>
								</Typography>
								<FormControl variant="outlined" style={{ width: "100%" }}>
									<Select
										name="businessType"
										labelId="demo-simple-select-outlined-label"
										id="demo-simple-select-outlined"
										value={age}
										inputRef={register({
											required: "Business type is required",
										})}
										onChange={handleChange}
									>
										<MenuItem value="Fitness and Sport">
											Fitness and Sport
										</MenuItem>
										<MenuItem value="Tuition and education">
											Tuition and education
										</MenuItem>
										<MenuItem value="Children’s activities">
											Children’s activities
										</MenuItem>
										<MenuItem value="Yoga and Pilates">
											Yoga and Pilates
										</MenuItem>
										<MenuItem value="Training and learning">
											Training and learning
										</MenuItem>
										<MenuItem value="Activities and experiences">
											Activities and experiences
										</MenuItem>
										<MenuItem value="Arts and Craft">Arts and Craft</MenuItem>
									</Select>
								</FormControl>
							</Box>
						</Box>
						<Box mt={1.5} mb={2}>
							<Box>
								<Typography gutterBottom color="textSecondary">
									Timezone settings
									<sup>*</sup>
								</Typography>
								<FormControl variant="outlined" style={{ width: "100%" }}>
									<Select
										defaultValue="India"
										name="timeZone"
										labelId="demo-simple-select-outlined-label"
										id="demo-simple-select-outlined"
										inputRef={register({ required: "Timezone is required" })}
										value={select}
										onChange={handleChange1}
										style={{ marginBottom: "30px" }}
									>
										{age1.map((age, id) => (
											<MenuItem key={id} value={age}>
												{age}
											</MenuItem>
										))}
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
								<Link to="/step2" style={{ color: "white" }}>
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
