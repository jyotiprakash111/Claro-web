import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

import FormDatePicker from "../../components/controls/FormDatePicker";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, FormProvider, useForm } from "react-hook-form";

import "./style.css";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(4),
    paddingBottom: 0,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

function renderPayment(temp) {
  console.log(temp);

  if (temp == 1) {
    return (
      <div>
        <label style={{ marginTop: 20 }}>Account No</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="Eg CR27592891"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Account Name</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="Eg John Doe"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Additional details</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="Add any other information"
          id="mail"
          name="account_no"
        />
      </div>
    );
  }
  if (temp == 0) {
    return (
      <div>
        <label style={{ marginTop: 20 }}>Name the payment method</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="E.g. Google pay"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Account details</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="E.g. Google pay"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Additional details</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="E.g. Google pay"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Add QR code / image (optional)</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="Add image icon"
          id="mail"
          name="account_no"
        />
      </div>
    );
  }
  if (temp == 2) {
    return (
      <div>
        <label style={{ marginTop: 20 }}>Name the payment method</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="E.g. Google pay"
          id="mail"
          name="account_no"
        />
        <label style={{ marginTop: 20 }}>Additional details (optional)</label>
        <input
          type="text"
          style={{ width: 250 }}
          placeholder="E.g. Google pay"
          id="mail"
          name="account_no"
        />
      </div>
    );
  }
}

const renderHeight = (temp) => {
  if (temp == 1) {
    return "90%";
  }
  if (temp == 3) {
    return "40%";
  }
  if (temp == 0) {
    return "100%";
  }
  if (temp == 2) {
    return "70%";
  }
};

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h5">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

export default function FormDialog(props) {
  const [paymentType, changePaymentType] = React.useState(0);
  const [arr, setArr] = React.useState([]);
  const validationSchema = yup.object().shape({});
  const methods = useForm({
    resolver: yupResolver(validationSchema),
  });
  return (
    <FormProvider {...methods}>
      <Dialog
        fullScreen
        style={{
          width: 800,
          margin: "0px auto",
          maxHeight: "95%",
          height: 650,
        }}
        open={props.open}
        onClose={() => props.handleClose()}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => props.handleClose()}
        >
          New Customer
        </DialogTitle>
        <div style={{ padding: 20, width: 700, paddingTop: 0 }}>
          <form id="customer">
            <fieldset>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label style={{ marginTop: 20 }}>First Name</label>
                  <input
                    type="text"
                    style={{
                      borderRadius: 5,
                      height: 40,
                      width: 300,
                      color: "#323232",
                      marginTop: 10,
                      border: "1px solid #ccc",
                    }}
                    placeholder=""
                    id="mail"
                    name="account_no"
                  />
                </div>
                <div>
                  <label style={{ marginTop: 20 }}>Last Name</label>
                  <input
                    type="text"
                    style={{
                      borderRadius: 5,
                      height: 40,
                      width: 300,
                      color: "#323232",
                      marginTop: 10,
                      border: "1px solid #ccc",
                    }}
                    placeholder=""
                    id="mail"
                    name="account_no"
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label style={{ marginTop: 10 }}>Contact No</label>
                  <input
                    type="text"
                    style={{
                      borderRadius: 5,
                      height: 40,
                      width: 300,
                      color: "#323232",
                      marginTop: 10,
                      border: "1px solid #ccc",
                    }}
                    placeholder="Enter mobile number here"
                    id="mail"
                    name="account_no"
                  />
                </div>
                <div>
                  <label style={{ marginTop: 10 }}>Email Address</label>
                  <input
                    type="text"
                    style={{
                      borderRadius: 5,
                      height: 40,
                      width: 300,
                      color: "#323232",
                      marginTop: 10,
                      border: "1px solid #ccc",
                    }}
                    placeholder="Enter customer’s email address here"
                    id="mail"
                    name="account_no"
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label style={{ marginTop: 10 }} for="business">
                    Gender (optional)
                  </label>
                  <select
                    style={{
                      borderRadius: 5,
                      height: 40,
                      width: 300,
                      color: "#323232",
                      marginTop: 10,
                      border: "1px solid #ccc",
                    }}
                    id="customer"
                    name="user_job"
                    onChange={(e) => changePaymentType(e.target.value)}
                  >
                    <option value={0}>Male</option>
                    <option value={1}>Female</option>
                  </select>
                </div>
                <div>
                  <label style={{ marginTop: 10 }}>Date of Birth</label>
                  <FormDatePicker
                    name="startTime"
                    placeholder="DD/MM/YYYY"
                    required={true}
                    width="300px"
                  />
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <label style={{ marginTop: 10 }} for="business">
                    Send Notification by
                  </label>
                  <select
                    style={{
                      borderRadius: 5,
                      height: 40,
                      width: 300,
                      color: "#323232",
                      marginTop: 10,
                      border: "1px solid #ccc",
                    }}
                    id="business"
                    name="user_job"
                    onChange={(e) => changePaymentType(e.target.value)}
                  >
                    <option value={0}>Email</option>
                    <option value={1}>Whatsapp</option>
                    <option value={2}>Sms</option>
                  </select>
                </div>
                <div>
                  <label style={{ marginTop: 10 }}>
                    Customer address (optional)
                  </label>
                  <input
                    type="text"
                    style={{
                      borderRadius: 5,
                      height: 40,
                      width: 300,
                      color: "#323232",
                      marginTop: 10,
                      border: "1px solid #ccc",
                    }}
                    placeholder="Add customer’s address here"
                    id="mail"
                    name="account_no"
                  />
                </div>
              </div>

              {arr.map((item, i) => {
                return (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "53%",
                      }}
                    >
                      <p style={{ fontSize: 18 }}>New Participant {i + 1}</p>
                      <IconButton
                        aria-label="close"
                        onClick={() => setArr(arr.filter((item) => item !== i))}
                      >
                        <DeleteOutlineIcon
                          style={{ color: "#e43a15", fontSize: 25 }}
                        />
                      </IconButton>
                    </div>

                    <label
                      style={{ marginTop: 0, fontSize: 13, color: "#323232" }}
                    >
                      Name of the participant?
                    </label>
                    <input
                      type="text"
                      style={{
                        width: 350,
                        borderRadius: 5,
                        border: "1px solid rgba(50, 50, 50, 0.3)",
                      }}
                      placeholder="Type here"
                      id="mail"
                      name="account_no"
                    />
                    <label
                      style={{ marginTop: 0, fontSize: 13, color: "#323232" }}
                    >
                      Birthday of the participant (for children below 18yo)
                    </label>
                    <input
                      type="text"
                      style={{
                        width: 350,
                        borderRadius: 5,
                        border: "1px solid rgba(50, 50, 50, 0.3)",
                      }}
                      placeholder="Type here"
                      id="mail"
                      name="account_no"
                    />
                    <label
                      style={{ marginTop: 0, fontSize: 13, color: "#323232" }}
                    >
                      Gender of the participant (optional)
                    </label>
                    <input
                      type="text"
                      style={{
                        width: 350,
                        borderRadius: 5,
                        border: "1px solid rgba(50, 50, 50, 0.3)",
                      }}
                      placeholder="Type here"
                      id="mail"
                      name="account_no"
                    />
                  </div>
                );
              })}
            </fieldset>
            <div>
              <Button
                style={{
                  textTransform: "capitalize",
                  color: "#65B1EC",
                  textDecoration: "underlined",
                  marginTop: 20,
                }}
                onClick={() => setArr([...arr, ...[arr.length]])}
              >
                + Add dependent participants
              </Button>
            </div>
            <div style={{ textAlign: "end", marginRight: "2%" }}>
              <Button
                style={{
                  background: "#FF8021",
                  color: "#fff",
                  textTransform: "none",
                  borderRadius: 20,
                  width: 150,
                  marginBottom: 20,
                }}
                onClick={() => props.handleClose()}
                variant="contained"
              >
                Save and Exit
              </Button>
            </div>
          </form>
        </div>
      </Dialog>
    </FormProvider>
  );
}
