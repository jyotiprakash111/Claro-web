import React, { Component } from "react";
import SideBar from "../../../../components/common/SideBar";
import Header from "../../../../components/common/HeaderMain";

import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Clock from "../../../../assets/img/clock_b_w.png";
import Calender from "../../../../assets/img/calender_b_w.png";
import Recycle from "../../../../assets/img/recycle_b_w.png";
import Card from "@material-ui/core/Card";
import Pexels_Photo_by_Lukas from "../../../../assets/img/Pexels_Photo_by_Lukas.png";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

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
    marginTop: 0,
    marginLeft: 0,
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
    marginTop: 20,
  },
});

export default function Classes() {
  const classes = useStyles();

  return (
    <div>
      <SideBar />
      <div style={{ marginLeft: 300 }}>
        <Header name="Services > Classes" avatar={true} />
        <div>
          <div
            style={{
              marginTop: 20,
              display: "flex",
              justifyContent: "space-between",
              width: "90%",
            }}
          >
            <div>
              <FormControl variant="outlined">
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={10}
                  size="small"
                  style={{ height: 40 }}
                >
                  <MenuItem value={10}>All location </MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
              <FormControl style={{ marginLeft: 20 }} variant="outlined">
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={10}
                  size="small"
                  style={{ height: 40 }}
                >
                  <MenuItem value={10}>All Instructors</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
            <Link to="/new_class" style={{ textDecoration: "none" }}>
              <Button
                style={{
                  background: "#65B1EC",
                  textTransform: "capitalize",
                  color: "#fff",
                  borderRadius: 30,
                  width: 150,
                }}
              >
                add new classes
              </Button>
            </Link>
          </div>
          <div>
            <p style={{ fontSize: 30, marginBottom: 0 }}>Category 1</p>
            <Divider
              style={{ color: "#65B1EC", width: "90%", marginTop: 10 }}
            />
            <Card
              style={{
                marginBottom: 20,
                display: "flex",
                background: "#F8F8F8",
                marginTop: 10,
                width: "90%",
                alignItems: "flex-end",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <div className={classes.cardContent}>
                <div>
                  <img
                    src={Pexels_Photo_by_Lukas}
                    style={{ width: 200, height: 200, marginRight: 20 }}
                  />
                </div>
                <div>
                  <p className={classes.head}>Class Title</p>
                  <ul className={classes.cardContentUl}>
                    <li className={classes.cardContentList}>
                      <img
                        src={Calender}
                        className={classes.liImg}
                        alt="list_icon"
                      />
                      <p className={classes.liP}>
                        12th March - 12th April 2020
                      </p>
                    </li>
                    <li className={classes.cardContentList}>
                      <img
                        src={Clock}
                        className={classes.liImg}
                        alt="list_icon"
                      />
                      <p className={classes.liP}>5:00-6:00 PM</p>
                    </li>
                    <li className={classes.cardContentList}>
                      <img
                        src={Recycle}
                        className={classes.liImg}
                        alt="list_icon"
                      />
                      <p className={classes.liP}> Weekly - Mon, Wed, Fri</p>
                    </li>
                  </ul>
                </div>
              </div>
              <p style={{ marginRight: 20 }}>
                Published online / Published offline / Draft
              </p>
              <IconButton style={{ position: "absolute", top: 10, right: 10 }}>
                <MoreVertIcon />
              </IconButton>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
