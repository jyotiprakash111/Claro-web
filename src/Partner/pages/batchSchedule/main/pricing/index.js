import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";
import Table from "./Table";

const Customers = () => {
  return (
    <div style={{ marginRight: 100 }}>
      <div>
        <Table />
        <div style={{ display: "flex", alignItems: "center" }}>
          <p style={{ color: "#FF8021" }}>Show More</p>
          <ArrowDropDownIcon style={{ color: "#FF8021", marginTop: 3 }} />
        </div>
      </div>
    </div>
  );
};
export default Customers;
