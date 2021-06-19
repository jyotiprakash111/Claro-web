import React from "react";
import SideBar from "../../../../components/common/SideBar";
import Header from "../../../../components/common/HeaderMain";
import Topbar from "./Topbar";

export default function Index() {
  return (
    <div>
      {" "}
      <SideBar />
      <div style={{ marginLeft: 300, marginTop: 20 }}>
        <Topbar />
      </div>
    </div>
  );
}
