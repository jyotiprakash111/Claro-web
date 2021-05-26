import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import Upload_Image from "../../../assets/img/upload.png";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PublishIcon from "@material-ui/icons/Publish";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Dialog from "./Dialog";
import "./style.css";

const Accordion = withStyles({
  root: {
    boxShadow: "none",

    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:not(:first-child)": {
      borderTop: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    marginBottom: -1,
    borderTop: "1px solid rgba(101, 177, 236, 0.5)",
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
    "&:not(:first-child)": {
      borderTop: 0,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {},
}))(MuiAccordionDetails);

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div id="general_page_testimonial">
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <Dialog />
        <Grid container>
          <Grid item lg={4}>
            {" "}
            <AccordionSummary
              aria-controls="panel1d-content"
              id="panel1d-header"
            >
              <h3>Testimonial 1</h3>
            </AccordionSummary>
            <AccordionDetails>
              <form style={{ maxWidth: 480 }}>
                <label for="name">Name of Customer</label>

                <p style={{ fontWeight: "bold", marginTop: 4 }}>John Doe</p>

                <label for="name">Customer bio / credentials</label>

                <p style={{ fontWeight: "bold", marginTop: 4 }}>
                  Father of Jane(7 yo)
                </p>

                <label for="name">Review</label>

                <p style={{ fontWeight: "bold", marginTop: 4 }}>
                  Lorem ipsum dolor sit amet, consectets adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum{" "}
                </p>
              </form>
            </AccordionDetails>
          </Grid>
          <Grid item lg={6}>
            <div style={{ textAlign: "right" }}>
              <Button
                style={{
                  background: "rgba(101, 177, 236, 1)",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: 20,
                  width: 150,
                  fontWeight: 400,
                  marginTop: 20,
                  fontSize: 17,
                  height: 45,
                }}
                variant="contained"
              >
                Add New
              </Button>
            </div>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                paddingTop: 50,
              }}
            >
              <div>
                <img src={Upload_Image} />
              </div>
            </div>
          </Grid>
        </Grid>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h3>Testimonial 2</h3>
            <div>
              <IconButton
                style={{ background: "rgba(101, 177, 236, 1)", padding: 0 }}
              >
                <ExpandMoreIcon style={{ fontSize: 40, color: "#fff" }} />
              </IconButton>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
            }}
          >
            <h3>Testimonial 3</h3>
            <div>
              <IconButton
                style={{ background: "rgba(101, 177, 236, 1)", padding: 0 }}
              >
                <ExpandMoreIcon style={{ fontSize: 40, color: "#fff" }} />
              </IconButton>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
