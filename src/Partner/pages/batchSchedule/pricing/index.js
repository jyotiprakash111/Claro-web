import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import useStyles from "./style";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function createData(name, calories, fat, carbs, protein, amount) {
  return { name, calories, fat, carbs, protein, amount };
}

const rows = [
  createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
  createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
  createData("xxxx", "dd mmm yyyy", "John Doe", "Paytm", "Paid", "$ xx"),
];

export default function Pricing() {
  const classes = useStyles();
  return (
    <div className={classes.pricingContainer}>
      <div>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead style={{ background: "#F8F8F8" }}>
              <TableRow>
                <TableCell>Plan Type</TableCell>
                <TableCell>Price Name</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Payment Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.calories}</TableCell>
                  <TableCell>{row.fat}</TableCell>
                  <TableCell>{row.carbs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className={classes.pricingContainerDiv}>
          <p className={classes.pricingContainerDivP}>Show More</p>
          <ArrowDropDownIcon className={classes.pricingContainerDivIcon} />
        </div>
      </div>
    </div>
  );
}
