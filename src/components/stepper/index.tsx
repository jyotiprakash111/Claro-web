import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepButton from "@material-ui/core/StepButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FinalPayment from "../../containers/finalPayment";
import Cart from "../../containers/Cart";
import Check from "../../containers/check";
import Detail from "../../containers/Detail";

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
	},
	button: {
		marginRight: theme.spacing(1),
	},
	backButton: {
		marginRight: theme.spacing(1),
	},
	completed: {
		display: "inline-block",
	},
	instructions: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	button1: {
		width: "208px",
		height: "59px",
		color: "white",
		background: "#FF8021",
		borderRadius: "5px",
		margin: "31px",
	},
}));

function getSteps() {
	return ["Cart", "Checkout", "Customer Info", "Payment"];
}

export default function HorizontalNonLinearAlternativeLabelStepper() {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState(new Set());
	const [skipped, setSkipped] = React.useState(new Set());
	const steps = getSteps();

	const totalSteps = () => {
		return getSteps().length;
	};

	const isStepOptional = (step: any) => {
		return step === 1;
	};
	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !completed.has(i))
				: activeStep + 1;

		setActiveStep(newActiveStep);
	};
	function getStepContent(step: any) {
		switch (step) {
			case 0:
				return <Cart />;
			case 1:
				return <Check handleNext={handleNext} />;
			case 2:
				return <Detail handleNext={handleNext} />;
			case 3:
				return <FinalPayment />;
			default:
				return "Unknown step";
		}
	}
	const handleSkip = () => {
		if (!isStepOptional(activeStep)) {
			// You probably want to guard against something like this
			// it should never occur unless someone's actively trying to break something.
			throw new Error("You can't skip a step that isn't optional.");
		}

		setActiveStep(prevActiveStep => prevActiveStep + 1);
		setSkipped(prevSkipped => {
			const newSkipped = new Set(prevSkipped.values());
			newSkipped.add(activeStep);
			return newSkipped;
		});
	};

	const skippedSteps = () => {
		return skipped.size;
	};

	const completedSteps = () => {
		return completed.size;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps() - skippedSteps();
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const handleBack = () => {
		setActiveStep(prevActiveStep => prevActiveStep - 1);
	};

	const handleStep = (step: any) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = new Set(completed);
		newCompleted.add(activeStep);
		setCompleted(newCompleted);

		/**
		 * Sigh... it would be much nicer to replace the following if conditional with
		 * `if (!this.allStepsComplete())` however state is not set when we do this,
		 * thus we have to resort to not being very DRY.
		 */
		if (completed.size !== totalSteps() - skippedSteps()) {
			handleNext();
		}
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted(new Set());
		setSkipped(new Set());
	};

	const isStepSkipped = (step: any) => {
		return skipped.has(step);
	};

	function isStepComplete(step: any) {
		return completed.has(step);
	}

	return (
		<div className={classes.root}>
			<Stepper
				alternativeLabel
				nonLinear
				activeStep={activeStep}
				style={{ background: "none", padding: "0" }}
			>
				{steps.map((label, index) => {
					const stepProps = {};
					const buttonProps = {};

					return (
						<Step key={label} {...stepProps}>
							<StepButton
								onClick={handleStep(index)}
								completed={isStepComplete(index)}
								{...buttonProps}
								style={{ width: "100%" }}
							>
								{label}
							</StepButton>
						</Step>
					);
				})}
			</Stepper>
			<div>
				{allStepsCompleted() ? (
					<div>
						<Typography className={classes.instructions}>
							All steps completed - you&apos;re finished
						</Typography>
						<Button onClick={handleReset}>Reset</Button>
					</div>
				) : (
					<div>
						<Typography className={classes.instructions}>
							{getStepContent(activeStep)}
						</Typography>

						<div>
							{/* <Button
								disabled={activeStep === 0}
								onClick={handleBack}
								className={classes.button}
							>
								Back
							</Button> */}
							{/* <Button
								variant="contained"
								color="primary"
								onClick={handleNext}
								className={classes.button1}
								style={{ float: "right" }}
							>
								Next
							</Button> */}
							{/* 
							{activeStep !== steps.length &&
								(completed.has(activeStep) ? (
									<Typography variant="caption" className={classes.completed}>
										Step {activeStep + 1} already completed
									</Typography>
								) : (
									<Button
										variant="contained"
										color="primary"
										onClick={handleComplete}
									>
										{completedSteps() === totalSteps() - 1
											? "Finish"
											: "Complete Step"}
									</Button>
								))} */}
						</div>
					</div>
				)}
			</div>
		</div>
	);
}
