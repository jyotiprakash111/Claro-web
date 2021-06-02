import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RightIcon from "@material-ui/icons/ArrowRightAlt";
import Button from "@material-ui/core/Button";

import useStyles from "./style";

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem className={classes.list} button>
          <p className={classes.list_h3}>1. Create your first class</p>
          <p className={classes.list_P}>Takes 5 minutes</p>
          <ListItemIcon>
            <RightIcon className={classes.right_icon} />
          </ListItemIcon>
        </ListItem>

        <ListItem className={classes.list2} button>
          <p className={classes.list2_h3}>2. Business Profle</p>
          <p className={classes.list2_P}>Takes 5 minutes</p>
          <ListItemIcon>
            <RightIcon className={classes.right2_icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem className={classes.list2} button>
          <p className={classes.list2_h3}>3. Details on Payments </p>
          <p className={classes.list2_P}>Takes 2 minutes</p>
          <ListItemIcon>
            <RightIcon className={classes.right2_icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem className={classes.list2} button>
          <p className={classes.list2_h3}>4. Online Listing </p>
          <p className={classes.list2_P}>Takes 2 minutes</p>
          <ListItemIcon>
            <RightIcon className={classes.right2_icon} />
          </ListItemIcon>
        </ListItem>
        <ListItem className={classes.list2} button>
          <p className={classes.list2_h3}>5. Invite customers </p>
          <p className={classes.list2_P}>Takes 1 minutes</p>
          <ListItemIcon>
            <RightIcon className={classes.right2_icon} />
          </ListItemIcon>
        </ListItem>
      </List>
      <div style={{ textAlign: "center" }}>
        <Button className={classes.go_to_step1}>Go to step1</Button>
      </div>
    </div>
  );
}
