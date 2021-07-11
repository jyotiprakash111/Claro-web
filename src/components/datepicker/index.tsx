import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

export default function MaterialUIPickers() {
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(
		new Date("2014-08-18T21:11:54")
	);

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<Grid container justify="space-around" style={{ cursor: "pointer" }}>
				<KeyboardDatePicker
					style={{ cursor: "pointer" }}
					disableToolbar
					variant="inline"
					format="MM/dd/yyyy"
					id="date-picker-inline"
					placeholder="Select Date"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						"aria-label": "change date",
					}}
				/>
			</Grid>
		</MuiPickersUtilsProvider>
	);
}
