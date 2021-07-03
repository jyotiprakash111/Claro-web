import React, { Component } from "react";
import SideBar from "../../components/common/SideBar";
import Main from "./tabBar/tabBar";
import Header from "../../components/common/HeaderMain";
import useStyles from "./style";

export default function Index() {
  const classes = useStyles();

  return (
    <div id="batch_schedule">
      <SideBar />
      <div className={classes.batchScheduleContainer}>
        <Header name="Batch Schedule" avatar={true} />
        <Main />
      </div>
    </div>
  );
}
