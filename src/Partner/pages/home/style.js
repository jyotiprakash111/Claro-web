import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  p: {
    fontSize: 18,
    width: "80%",
  },
  paper: {
    padding: 20,
    background: "#F8F8F8",
  },
  container: {
    width: "98%",
  },
  dialogAction: {
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  dialogButtonAction: {
    textAlign: "center",
  },
  ////////////////////////////
  list: {
    display: "flex",
    background: "#65B1EC",
    padding: 0,
    borderRadius: 10,
  },
  list2: {
    display: "flex",
    marginTop: 10,
    padding: 0,
    borderRadius: 10,
  },
  list_h3: {
    width: 350,
    color: "#fff",
    marginLeft: 20,
    fontSize: 20,
  },
  list_P: {
    fontSize: 18,
    color: "#fff",
  },
  list2_h3: {
    width: 350,
    color: "#323232",
    marginLeft: 20,
    fontSize: 20,
  },
  list2_P: {
    fontSize: 18,
    color: "#323232",
  },
  right_icon: {
    fontSize: 40,
    color: "#fff",
    width: 50,
  },
  right2_icon: {
    fontSize: 40,
    color: "#fff",
    width: 50,
  },
  go_to_step1: {
    textTransform: "capitalize",
    background: "#65B1EC",
    borderRadius: 20,
    width: 120,
    color: "#F8F8F8",
  },
}));

export default useStyles;
