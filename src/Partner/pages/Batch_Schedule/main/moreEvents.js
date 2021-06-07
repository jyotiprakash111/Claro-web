import React , {useState}from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import "./style.css";
import CancelIcon from "@material-ui/icons/Cancel";
import { Divider } from "@material-ui/core";
import { TramRounded } from "@material-ui/icons";

export default function FormDialog(props) {
  const [paymentType, changePaymentType] = useState(0);
  const [open, setOpen] = useState(true);

  const handleClose = () =>{
    setOpen(false)
  }
  return (
    <div>
      <Dialog
        fullScreen
        style={{ width: 900, height: "70%", width: 800, margin: "20px auto" }}
        open={open}
        onClose={() => handleClose()}
      >
        <div style={{ padding: 20, height: 500, width: 700 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1>Add more timings Single event</h1>
            {/* <CancelIcon  onClose={() => handleClose()} /> */}
            <button onClick={()=> handleClose()}>
              Close
            </button>
          </div>

          <Divider />
          <form id="payment" style={{}}>
            <fieldset>
              <div style={{ display: "flex", width: "100%", flexWrap: "wrap" }}>
                <div style={{ width: "50%" }}>
                  <label style={{ marginTop: 10 }} for="business">
                    Class start date
                  </label>
                  <input
                    style={{
                      borderRadius: 20,
                      height: 40,
                      width: "70%",
                      color: "#323232",
                      marginTop: 10,
                    }}
                    type="date"
                    id="business"
                    name="user_job"
                    onChange={(e) => changePaymentType(e.target.value)}
                  />
                </div>

                <div style={{ width: "50%" }}>
                  {" "}
                  <label style={{ marginTop: 10 }} for="business">
                    Class repeat pattern
                  </label>
                  <select
                    style={{
                      borderRadius: 20,
                      height: 40,
                      width: "70%",
                      color: "#323232",
                      marginTop: 10,
                    }}
                    id="business"
                    name="user_job"
                    onChange={(e) => changePaymentType(e.target.value)}
                  >
                    <option value={0}>Does not repeat</option>
                    <option value={1}>Daily</option>
                    <option value={3}>Weekly</option>
                  </select>
                </div>
                <div style={{ width: "50%" }}>
                  <label style={{ marginTop: 10 }} for="business">
                    Class start time
                  </label>
                  <input
                    style={{
                      borderRadius: 20,
                      height: 40,
                      width: "70%",
                      color: "#323232",
                      marginTop: 10,
                    }}
                    type="time"
                    id="business"
                    name="user_job"
                    onChange={(e) => changePaymentType(e.target.value)}
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <label style={{ marginTop: 10 }} for="business">
                    Class end time
                  </label>
                  <input
                    style={{
                      borderRadius: 20,
                      height: 40,
                      width: "70%",
                      color: "#323232",
                      marginTop: 10,
                    }}
                    type="time"
                    id="business"
                    name="user_job"
                    onChange={(e) => changePaymentType(e.target.value)}
                  />
                </div>
              </div>
            </fieldset>
            <div style={{ textAlign: "left", marginLeft: 20 }}>
              <p>Time zone: Location and GMT time</p>
              <Button
                style={{
                  background: "#FF8021",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: 40,
                  width: 180,
                  height: 50,
                  marginTop: 20,
                }}
                onClick={() => handleClose()}
                variant="contained"
              >
                Save and continue
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    </div>
  );
}
