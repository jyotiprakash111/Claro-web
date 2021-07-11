import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "./Dialog";
import Dialog2 from "./Dialog2";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setDialog] = React.useState(false);
  const [open2, setDialog2] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Dialog open={open} handleClose={() => setDialog(false)} />
      <Dialog2 open={open2} handleClose={() => setDialog2(false)} />
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ padding: 0 }}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ padding: 0 }}
      >
        <MenuItem
          style={{ background: "#65B1EC", color: "#fff" }}
          onClick={() => setDialog(true)}
        >
          View
        </MenuItem>
        <MenuItem onClick={() => setDialog2(true)}>Delete</MenuItem>
      </Menu>
    </div>
  );
}
