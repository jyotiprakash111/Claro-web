import React from "react";
import { TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";

const currencies = [
  {
    value: "0",
    label: "Allow registration anytime before end date",
  },
  {
    value: "1",
    label: "Close registration once start date has passed",
  },
];

export default function OtherOptions() {
  const [temp, setTemp] = React.useState("0");
  const [arr, setArr] = React.useState([]);
  const [arr2, setArr2] = React.useState([]);
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");
  return (
    <div>
      <Grid container>
        <Grid item lg={6}>
          <label style={{ color: "#827575" }}>Repeat until</label>
          <TextField
            select
            size="large"
            style={{ width: "100%", marginBottom: 20 }}
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            // helperText="Please select your currency"
            variant="outlined"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          {arr.map((item, i) => {
            return (
              <div>
                <label style={{ color: "#827575" }}>Benifit {i + 1}</label>
                <TextField
                  style={{ width: "100%", marginBottom: 20 }}
                  variant="outlined"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  multiline
                  rows={3}
                  placeholder="Mention learning goals or key benefits the participant will derive from attending the session"
                />
              </div>
            );
          })}
          <label style={{ color: "#827575" }}>Benifit {arr.length + 1}</label>
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            value={text}
            onChange={(e) => setText(e.target.value)}
            multiline
            rows={3}
            placeholder="Mention learning goals or key benefits the participant will derive from attending the session"
          />
          <Button
            onClick={() => setArr([...arr, ...[text]])}
            style={{ textTransform: "none", color: "#FF8021", marginTop: 20 }}
          >
            + Add another benefit
          </Button>
          <div style={{ marginTop: 10 }}></div>
          <label style={{ color: "#827575" }}>
            Customer message on booking (optional)
          </label>
          <TextField
            style={{ width: "100%", marginBottom: 30 }}
            variant="outlined"
            multiline
            rows={3}
            placeholder="Shows on the class public page.Add class info/instructions"
          />
          <label style={{ color: "#827575" }}>
            Customer message on booking (optional)
          </label>
          <TextField
            style={{ width: "100%", marginBottom: 30 }}
            variant="outlined"
            multiline
            rows={3}
            placeholder="Shows on the class public page.Add class info/instruction.Hello!.Thank you for your request. We will send you the class details soon.Please get in touch for any question"
          />
          <label style={{ color: "#827575" }}>
            Prerequistes / Preparation (optional)
          </label>
          <TextField
            style={{ width: "100%", marginBottom: 30 }}
            variant="outlined"
            multiline
            rows={3}
            placeholder="We will send prep instructions along the class reminder 1 day and 1 hour before the class start time"
          />
          <label style={{ color: "#827575" }}>
            Cancellation policy (optional)
          </label>
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            multiline
            rows={3}
            placeholder="We will send prep instructions along the class reminder 1 day and 1 hour before the class start time"
          />
          <h1>FAQs</h1>
          <label style={{ color: "#827575" }}>Question 1</label>
          <TextField
            style={{ width: "100%", marginBottom: 20 }}
            variant="outlined"
            multiline
            rows={3}
            placeholder="E.g. Lead instructor. Field viewable while booking"
          />
          {arr2.map((item, i) => {
            return (
              <div>
                <label style={{ color: "#827575" }}>Answer {i + 1}</label>
                <TextField
                  style={{ width: "100%", marginBottom: 20 }}
                  variant="outlined"
                  value={text2}
                  onChange={(e) => setText2(e.target.value)}
                  multiline
                  rows={3}
                  placeholder="Add notes viewable to customers for on the course landing page"
                />
              </div>
            );
          })}
          <label style={{ color: "#827575" }}>Answer {arr2.length + 1}</label>
          <TextField
            style={{ width: "100%" }}
            variant="outlined"
            value={text2}
            onChange={(e) => setText2(e.target.value)}
            multiline
            rows={3}
            placeholder="Add notes viewable to customers for on the course landing page"
          />
          <Button
            onClick={() => setArr2([...arr2, ...[text2]])}
            style={{ textTransform: "none", color: "#FF8021", marginTop: 20 }}
          >
            + Add another benefit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
