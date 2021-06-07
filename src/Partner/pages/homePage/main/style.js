import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  salesDiv: {
    display: "flex",
    justifyContent: "space-between",
  },
  paper: {
    padding: 20,
    marginTop: 20,
    background: "#F8F8F8",
  },
  h4: {
    fontSize: 24,
    marginTop: 0,
    marginBottom: 15,
  },
  transaction_div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  transaction_div_p: {
    color: "#323232",
    fontSize: "18px",
  },
  link: {
    color: "#65B1EC",
  },
}));

export default useStyles;
