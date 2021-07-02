import React from "react";

//Table Components
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

//Menu component import
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

//style import//
import useStyles from "./style";

//Menu Components Data
import MoreEvents from "./moreEventDialog/index";
const options = ["Edit", "View"];
const ITEM_HEIGHT = 48;

//Table Raw Data
function createData(name, calories, fat, carbs, protein, amount) {
  return { name, calories, fat, carbs, protein, amount };
}
const rows = [
  createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
  createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
  createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
];

export default function Schedule() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [open1, setDialog] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div id="batch_schedule_schedule">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead style={{ background: "#F8F8F8" }}>
            <TableRow>
              <TableCell>Sl no</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Schedule Name</TableCell>
              <TableCell>Class Start Time</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Start Time</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.calories}</TableCell>
                <TableCell>{row.fat}</TableCell>
                <TableCell>{row.carbs}</TableCell>
                <TableCell>{row.protein}</TableCell>
                <TableCell>
                  <div className={classes.tableCellAmount}>
                    {row.amount}{" "}
                    <div>
                      <MoreEvents
                        open={open1}
                        handleClose={() => setDialog(false)}
                      />
                      <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                      >
                        <MoreVertIcon />
                      </IconButton>
                      <Menu
                        id="long-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        PaperProps={{
                          style: {
                            maxHeight: ITEM_HEIGHT * 4.5,
                            width: 100,
                            padding: 0,
                          },
                        }}
                      >
                        {options.map((option, i) => (
                          <MenuItem
                            key={option}
                            selected={option === "Pyxis"}
                            onClick={() => setDialog(true)}
                            style={{
                              background: i == 0 ? "#65B1EC" : "",
                              color: i == 0 ? "#fff" : "",
                            }}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </Menu>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
