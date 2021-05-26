import React from "react";
import FlexLayout from "../../FlexLayout/FlexLayout";
import Button from "../../Button/Button";
import "../../../assets/css/setup.scss";
import SetupForm from "./setup-form";

const BusinessSetup = () => {
  return (
    <FlexLayout rowORColumn='row'>
      <div
        style={{ color: "wheat", width: "250px", backgroundColor: "#262c4c" }}
      >
        {" "}
      </div>

      <FlexLayout rowORColumn='column' className='Business-content-container'>
        <FlexLayout
          rowORColumn='row'
          id='Setting-Heading'
          justifyContent={"between"}
        >
          <div> Business Setup </div>
          <Button
            className='Button'
            text='Preview'
            style={{
              backgroundColor: "white",
              color: "#FF8021",
              border: "1px solid #FF8021",
              height: "40px",
            }}
          />
        </FlexLayout>

        <div style={{ marginTop: "5px" }} className='P2_Paragraph_15px'>
          {"Setup > General > Business > Setup"}
        </div>
        <div className='P2_Paragraph_15px'>
          {"Manage Settings such as your Business Name and TimeZone"}
        </div>

        <SetupForm />
      </FlexLayout>
    </FlexLayout>
  );
};

export default BusinessSetup;
