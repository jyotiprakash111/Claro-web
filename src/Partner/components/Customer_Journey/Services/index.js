import React, { useState } from "react";
import {
  Box,
  Breadcrumbs,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import SearchBar from "material-ui-search-bar";
import Card from "../../card";
import { services } from "../../../pages/home/mockData";
import { filters } from "./filters";
import Button from "../../button/Button";
import Header from "./Header";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  filters: {
    "& button": {
      marginRight: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
  },
}));

export default function ServicesPage() {
  const classes = useStyles();
  const [servicesOffered, setServicesOffered] = useState(services);

  if (!servicesOffered.length) setServicesOffered(services);

  const getMoreClasses = () => {
    setServicesOffered([...servicesOffered, ...services]);
  };

  return (
    <div>
      <Header />
      <Container>
        <Box marginTop='2em'>
          <Breadcrumbs separator='>' aria-label='breadcrumb'>
            <Link style={{ textDecoration: "none" }} color='inherit' href='/'>
              Home
            </Link>
            <Typography color='textPrimary'> Services</Typography>
          </Breadcrumbs>
        </Box>
        <Box marginTop='2em'>
          <Typography
            style={{ fontSize: "56px", color: "#323232" }}
            variant='h3'
          >
            Services
          </Typography>
        </Box>
        <Box marginTop='1em'>
          <Typography
            style={{ fontSize: "18px ", color: "#323232" }}
            variant='body1'
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Typography>
        </Box>
        <Box marginTop='2em'>
          <SearchBar
            onChange={() => console.log("onChange")}
            onRequestSearch={() => console.log("onRequestSearch")}
            style={{
              margin: "0 auto",
            }}
          />
        </Box>
        <Box marginTop='2em' className={classes.filters}>
          {filters.map((category, i) => (
            <Button
              style={{
                minWidth: "157px",
                height: 42,
                border: i == 0 ? "none" : "0.5px solid rgba(50, 50, 50, 0.5)",
                borderRadius: 25,
                color: i == 0 ? "#fff" : "rgba(50, 50, 50, 0.5)",
                background: i == 0 ? "#FF8021" : "",
              }}
              variant='outlined'
            >
              {category.type}
            </Button>
          ))}
        </Box>
        <Box style={{ color: "#323232" }} marginTop='1em' component={"hr"} />
        <Box marginTop='3em'>
          <Grid container spacing={2} justify='space-between'>
            {servicesOffered.map((service) => (
              <Card type='classInfo' data={service} />
            ))}
          </Grid>
        </Box>
        {/* <Button
          variant="outlined"
          color="primary"
          onClick={getMoreClasses}
          style={{
            marginTop: "2em",
          }}
        >
          View More
        </Button> */}
      </Container>
      <Footer />
    </div>
  );
}
