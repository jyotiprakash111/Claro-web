import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";
import ClassDetails from "./ClassDetails";

export default function Current() {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item lg={4}>
          <Card />
        </Grid>
        <Grid item lg={8}>
          <ClassDetails />
          <ClassDetails />
          <ClassDetails />
        </Grid>
      </Grid>
    </div>
  );
}
