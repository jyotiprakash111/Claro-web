import React from "react";
import Button from "@material-ui/core/Button";

export default function button(props) {
  return (
    <div>
      <Button
        style={{
          color: "#F8F8F8",
          background: "#65B1EC",
          borderRadius: 20,
          width: props.width,
          height: props.height,
          textTransform: "none",
        }}
        onClick={() => props.onClick()}
        variant={props.variant}
      >
        {props.text}
      </Button>
    </div>
  );
}
