import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  tableCellAmount: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-between",
  },
  dialogContainer: {
    width: 760,
    margin: "20px auto",
  },
  dialogContainerHeading: {
    padding: 20,
    height: 500,
    width: 700,
  },
  formSingleEvent: {
    display: "flex",
    width: "100%",
    flexWrap: "wrap",
  },
  formSingleEventDiv: {
    width: "50%",
  },
  formSingleEventDiv2: {
    textAlign: "left",
    marginLeft: 20,
  },
  formSingleEventDivLabel: {
    marginTop: 10,
  },
  formSingleEventDivSelect: {
    border: "1px solid #ccc",
    height: 40,
    width: "80%",
  },
  formSingleEventDivButton: {
    background: "#FF8021",
    color: "#fff",
    textTransform: "none",
    borderRadius: 5,
    width: 180,
    height: 40,
    marginTop: 20,
    marginBottom: 30,
  },
  renderForm1Input: {
    width: 150,
    border: "1px solid #ccc",
    marginLeft: 10,
    marginRight: 10,
  },
}));

export default useStyles;
