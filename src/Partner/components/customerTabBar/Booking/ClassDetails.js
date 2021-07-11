import React from "react";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Clock from "../../../../assets/img/clock_b_w.png";
import Calender from "../../../../assets/img/calender_b_w.png";
import Recycle from "../../../../assets/img/recycle_b_w.png";
const useStyles = makeStyles({
  root: {
    maxWidth: 370,
  },
  media: {
    width: 370,
    height: 245,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  card: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardContentUl: {
    listStyle: "none",
    padding: 0,
  },
  cardContentList: {
    display: "flex",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 5,
  },
  liImg: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  liP: {
    padding: 0,
    margin: 0,
    fontSize: 18,
  },
  head: {
    fontSize: 24,
    color: "#242424",
    marginBottom: 0,
  },
});
export default function ClassDetails() {
  const classes = useStyles();
  return (
    <div>
      <Card style={{ padding: "10px 20px", marginBottom: 20 }}>
        <div className={classes.card}>
          <p className={classes.head}>Class Title</p>
          <p className={classes.head}>$24.99</p>
        </div>
        <div className={classes.cardContent}>
          <div>
            <ul className={classes.cardContentUl}>
              <li className={classes.cardContentList}>
                <img src={Calender} className={classes.liImg} alt="list_icon" />
                <p className={classes.liP}>12th March - 12th April 2020</p>
              </li>
              <li className={classes.cardContentList}>
                <img src={Clock} className={classes.liImg} alt="list_icon" />
                <p className={classes.liP}>5:00-6:00 PM</p>
              </li>
              <li className={classes.cardContentList}>
                <img src={Recycle} className={classes.liImg} alt="list_icon" />
                <p className={classes.liP}> Weekly - Mon, Wed, Fri</p>
              </li>
            </ul>
          </div>
          <div>
            <Button variant="outlined">View Details</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
