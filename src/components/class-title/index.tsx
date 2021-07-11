import React, { useState } from "react";
import {
	Box,
	Breadcrumbs, 
	Container,
	Grid,
	makeStyles,
	Typography,
    Divider
} from "@material-ui/core";
import Button from "@components/button";
export default function ClassTitle(){
return(
<Container maxWidth="md">
<Grid item xs={12} md={4} > 
<Box border={2} height="40%" width="100%" borderColor="#FF8021" borderRadius="borderRadius" marginTop="1em" justifyContent="flex-end" padding={0.5}>
	<Grid style={{marginLeft:"0.8em"}}  md={12} >
        <Typography variant="body2" style={{marginTop:"1em"}}>class title </Typography>               
        <Typography variant="h6" style={{marginTop:"1em"}}>8 Feb, 5:00pm - 6:00pm </Typography>
        <Typography variant="body2" style={{marginTop:"1.5em"}}>Batch ---- Batch name</Typography>
	    <Typography variant="body2" style={{marginTop:"1em"}}>Schedule ---- weekly- x,y</Typography>
        <Typography variant="body2" style={{marginTop:"1em"}}>Location ---- online</Typography>
		<Typography variant="body2" style={{marginTop:"3em"}} color="primary">5 seats left!</Typography>
		<Typography variant="h6" style={{marginTop:"0.5em"}} color="primary">$79.99</Typography>
		<Button  variant="outlined"  style={{maxWidth: '250px', maxHeight: '40px', minWidth: '250px', minHeight: '40px', marginBottom:'8px', marginTop:'8px', color: "white", background: "#FF8021"}}>Confirm and Continue</Button>
		
	</Grid>
    </Box>
	<Box width="90%" marginLeft="1em" marginTop="1em">
		<Typography variant="body2">Don't see a time that work for you ?<Button variant="outlined" color="primary" style={{maxWidth: '250px', marginLeft:'30px'}}>Request a new time</Button> </Typography>
	</Box>
	</Grid>
	</Container>
				
);
}
				