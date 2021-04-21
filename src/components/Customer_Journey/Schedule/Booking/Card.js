import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Pexels_Photo_by_Lukas from "../../../../assets/img/Pexels_Photo_by_Lukas.png";

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
          >
            Business name
          </Typography>
          <Typography
            className={classes.heading}
            gutterBottom
            variant="h5"
            component="h2"
          >
            Class title
          </Typography>
          <Typography
            className={classes.paragraph}
            variant="body2"
            component="p"
          >
            Class date duration> 20 Feb - 15 Feb
          </Typography>
          <Typography
            className={classes.paragraph}
            variant="body2"
            component="p"
          >
            Class time duration> 5:00pm - 6:00pm
          </Typography>
          <Typography
            className={classes.paragraph}
            variant="body2"
            component="p"
          >
            Location
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardContent}>
        <Button
          style={{
            textTransform: "capitalize",
            color: "#FF8021",
            fontSize: 24,
          }}
          size="small"
          color="primary"
        >
          Confirmed
        </Button>
        <Button
          style={{
            textTransform: "capitalize",
            marginLeft: "auto",
            fontSize: 12,
          }}
          variant="outlined"
          size="small"
          color="primary"
        >
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
