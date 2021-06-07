import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card1 from "../../../components/homePage/Card1";
import Card2 from "../../../components/homePage/Card2";
import Card3 from "../../../components/homePage/Card3";
import Card4 from "../../../components/homePage/Card4";
import Link from "react-router-dom/Link";
import useStyles from "./style";

export default function Main() {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item lg={6}>
          <Paper className={classes.paper}>
            <h4 className={classes.h4}>Sales</h4>
            <div className={classes.salesDiv}>
              <Card1
                background="rgba(40, 180, 70, 0.1)"
                headerColor="#518888"
                text="Confirmed sales"
              />
              <Card1
                text="Pending approval"
                background="rgba(255,  128, 33, 0.1)"
                headerColor="#FF8021"
                isIcon={true}
                iconColor="#65B1EC"
              />
            </div>
            <div className={classes.transaction_div}>
              <p className={classes.transaction_div_p}>All transaction</p>
              <Link className={classes.link}>See all past transaction</Link>
            </div>
            <Card2
              title="John Doe Sr."
              price="100 INR"
              class_name="Mindful Yoga class"
              status="Confirmed"
              statusColor="#518888"
            />
            <Card2
              title="John Doe Sr."
              price="100 INR"
              class_name="Mindful Yoga class"
              status="Pending approval"
              statusColor="#FF8021"
            />
          </Paper>
        </Grid>
        <Grid item lg={6}>
          <Paper className={classes.paper}>
            <h4 className={classes.h4}>Schedule</h4>
            <div className={classes.salesDiv}>
              <Card1
                background="#fff"
                headerColor="#518888"
                text="Session Today"
              />
              <Card1
                text="Session Tomorrow"
                background="#fff"
                headerColor="#FF8021"
                isIcon={true}
                iconColor="#fff"
              />
            </div>
            <div className={classes.transaction_div}>
              <p className={classes.transaction_div_p}>All sessions</p>
              <Link className={classes.link}>See complete schedule</Link>
            </div>
            <Card3
              title="Mindful Yoga Class"
              price="0/10 booked     "
              class_name="By Anita and Yug"
              status="0/10 booked"
              statusColor="#323232"
            />
            <Card3
              title="Mindful Yoga Class"
              price="0/10 booked"
              class_name="By Anita and Yug"
              status="0/10 booked"
              statusColor="#323232"
            />
          </Paper>
        </Grid>
        <Grid item lg={4}>
          <Card4
            title="Total Bookings"
            number="110"
            number_of_percentage="20%"
            status1_number="10"
            status2_number="100"
            status1="Confirmed"
            status2="Pending"
          />
        </Grid>
        <Grid item lg={4}>
          <Card4
            title="New Customers"
            number="110"
            number_of_percentage="20%"
            status1_number="10"
            status2_number="100"
            status1="Active buyer"
            status2="Prospects "
          />
        </Grid>
        <Grid item lg={4}>
          <Card4
            title="Total Sessions"
            number="4"
            number_of_percentage="20%"
            status1_number="10"
            status2_number="100"
            status1="Booked"
            status2="Empty"
          />
        </Grid>
      </Grid>
    </div>
  );
}
