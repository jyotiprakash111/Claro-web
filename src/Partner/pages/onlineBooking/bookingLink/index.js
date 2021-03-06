import React from "react";
import LinkIcon from "@material-ui/icons/Link";
import Button from "@material-ui/core/Button";

export default function Tab1() {
  const [temp, setTemp] = React.useState(true);
  return (
    <div>
      <p style={{ width: 500, fontSize: 18 }}>
        Personalize your booking link and share it with your customers. Let them
        make their bookings anytime they want.
      </p>

      <p>Public Booking Page Link</p>
      {temp ? (
        <div>
          <a style={{ textDecoration: "none", color: "#703cb0" }} href="#">
            https://www.picktime.com/wonderoo
          </a>
          <Button
            variant="contained"
            style={{
              height: 25,
              width: 50,
              fontSize: 12,
              background: "#65B1EC",
              marginLeft: 20,

              color: "#fff",
            }}
            onClick={() => {
              setTemp(false);
            }}
          >
            <LinkIcon style={{ fontSize: 20, color: "#fff" }} />
            Edit
          </Button>
        </div>
      ) : (
        <div style={{ width: "60%" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <p
              style={{
                background: "#efefef",
                height: 20,
                border: "1px solid #ccc",
                fontSize: 12,
                display: "flex",
                alignItems: "center",
                padding: 4,
              }}
            >
              https://www.picktime.com/
            </p>
            <input
              style={{
                border: "1px solid #65B1EC",
                height: 25,
                width: "100%",
                borderRadius: 2,
                paddingLeft: 10,
              }}
              value="wonderoo"
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              style={{
                color: "#323232",
                textTransform: "none",
                background: "#efefef",
                border: "1px solid #ccc",
              }}
              onClick={() => {
                setTemp(true);
              }}
            >
              Cancel
            </Button>
            <Button
              style={{
                color: "#fff",
                textTransform: "none",
                background: "#65B1EC",
                marginLeft: 10,
              }}
              onClick={() => {
                setTemp(true);
              }}
            >
              Save
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
