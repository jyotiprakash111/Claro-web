import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Pexels_Photo_by_Lukas from "../../../assets/img/Pexels_Photo_by_Lukas.png";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    maxWidth: 370,
  },
  media: {
    width: 370,
    height: 245,
  },
  cardContent: {
    background: "#f8f8f8",
  },
  paragraph: {
    fontSize: 15,
    marginBottom: 5,
    color: "#000000",
  },
  heading: {
    fontSize: 24,
    color: "#000000",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={Pexels_Photo_by_Lukas}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.paragraph}
            variant="body2"
            component="p"
            style={{ display: "flex" }}
          >
            <p style={{ width: 200 }}>04:00 PM - 04:40 PM</p>
            <p style={{ marginLeft: 60 }}>SMTWFS</p>
          </Typography>
          <Typography
            className={classes.heading}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Mandaring Daily | N1 | Monday-Friday | Online Learning
          </Typography>
          <Typography
            className={classes.paragraph}
            variant="body2"
            component="p"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>ONLINE</div>
            <div>View Details</div>
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <CardActions className={classes.cardContent}>
        <Button
          style={{
            textTransform: "capitalize",
            color: "#FF8021",
            fontSize: 16,
            border: "1px solid #ccc",
            width: 40,
            height: 40,
            padding: 0,
            borderRadius: 20,
          }}
          size="small"
          color="primary"
        >
          TW
        </Button>
        <Button
          style={{
            textTransform: "capitalize",
            marginLeft: "auto",
            fontSize: 12,
            width: 100,
            height: 40,
          }}
          variant="contained"
          size="small"
          color="primary"
        >
          Book
        </Button>
      </CardActions>
    </Card>
  );
}
