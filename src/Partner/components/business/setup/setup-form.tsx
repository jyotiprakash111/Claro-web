import React from "react";
import { useState } from "react";
import Button from "../../button/Button";
import FLexLayout from "../../FlexLayout/FlexLayout";
import InputDescriptionCard from "../../InputDescriptionCard/InputDescriptionCard";
import InputWithLabel from "../../InputWithLabel/inputWithLabel";

const SetupForm = () => {
  const [businessNameValue, setBusinessNameValue] = useState("");

  const onChangeBusinessValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessNameValue(e.target.value);
  };

  return (
    <div>
      <div
        className='P2_Paragraph_15px Section_heading'
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        {"Section 1:"}{" "}
        <span style={{ fontWeight: 800 }}> {"Business Info"} </span>
      </div>

      <FLexLayout rowORColumn='row' className='m-top-15'>
        <InputDescriptionCard
          description={`Your business name is
                    displayed across many areas including 
                    your booking invoice and sales invoice
                    and messages to the clients`}
        />

        <InputWithLabel
          onChange={onChangeBusinessValue}
          value={businessNameValue}
          label='Business Name'
        />
      </FLexLayout>

      <FLexLayout rowORColumn='row' className='m-top-15'>
        <InputDescriptionCard
          description={`This is the email address used to signUp.Please
                    contact us to change it
                    `}
        />

        <InputWithLabel
          value='example@mail.com'
          label='Email address (Owner Login)'
        />
      </FLexLayout>

      <FLexLayout rowORColumn='row' className='m-top-15'>
        <InputDescriptionCard
          description={`This is your webpage with all listed services. Share this link with customer to make bookings
                    `}
        />

        <InputWithLabel
          value='example@mail.com'
          label='Online booking Page link'
        />
      </FLexLayout>

      <div
        className='P2_Paragraph_15px Section_heading'
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        {"Section 2:"}{" "}
        <span style={{ fontWeight: 800 }}> {"Contact Details"} </span>
      </div>

      <FLexLayout rowORColumn='row' className='m-top-15'>
        <InputDescriptionCard
          description={`Your business name is
                    displayed across many areas including 
                    your booking invoice and sales invoice
                    and messages to the clients`}
        />

        <FLexLayout rowORColumn='column' style={{ width: "100%" }}>
          <FLexLayout rowORColumn='row'>
            <InputWithLabel
              onChange={onChangeBusinessValue}
              value={businessNameValue}
              label='Phone Number'
            />

            <InputWithLabel
              onChange={onChangeBusinessValue}
              value={businessNameValue}
              label='Industry'
            />
          </FLexLayout>

          <FLexLayout rowORColumn='row' style={{ marginTop: "20px" }}>
            <InputWithLabel
              onChange={onChangeBusinessValue}
              value={businessNameValue}
              label='Alternate Email Address'
            />
          </FLexLayout>
        </FLexLayout>
      </FLexLayout>

      <div
        className='P2_Paragraph_15px Section_heading'
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        {"Section 3:"}{" "}
        <span style={{ fontWeight: 800 }}>
          {" "}
          {"Time and Currency Settings"}{" "}
        </span>
      </div>

      <FLexLayout rowORColumn='row' className='m-top-15'>
        <InputDescriptionCard
          description={`Choose time zones and currencies which suits your business.`}
          highlightText={
            "Language is english only no dropdown available for it"
          }
        />

        <FLexLayout rowORColumn='column' style={{ width: "100%" }}>
          <FLexLayout rowORColumn='row'>
            <InputWithLabel
              onChange={onChangeBusinessValue}
              value={businessNameValue}
              label='Country'
            />

            <InputWithLabel
              onChange={onChangeBusinessValue}
              value={businessNameValue}
              label='TimeZone'
            />
          </FLexLayout>

          <FLexLayout rowORColumn='row' style={{ marginTop: "10px" }}>
            <InputWithLabel
              onChange={onChangeBusinessValue}
              value={businessNameValue}
              label='Currency'
            />

            <InputWithLabel
              onChange={onChangeBusinessValue}
              value={businessNameValue}
              label='Language'
            />
          </FLexLayout>
        </FLexLayout>
      </FLexLayout>

      <div
        className='P2_Paragraph_15px Section_heading'
        style={{ marginTop: "10px", marginBottom: "20px" }}
      >
        {"Section 4:"}{" "}
        <span style={{ fontWeight: 800 }}> {"Social Presence"} </span>
      </div>

      <FLexLayout rowORColumn='row' className='m-top-15'>
        <InputDescriptionCard
          description={`Add your company websites and social media links for sharing with your clients`}
        />

        <FLexLayout rowORColumn='column' style={{ width: "100%" }}>
          <FLexLayout rowORColumn='row' style={{ marginTop: "10px" }}>
            <InputWithLabel
              onChange={onChangeBusinessValue}
              value={businessNameValue}
              label='Website'
            />
          </FLexLayout>

          <FLexLayout rowORColumn='row' style={{ marginTop: "10px" }}>
            <InputWithLabel
              onChange={onChangeBusinessValue}
              value={businessNameValue}
              label='FaceBook Page'
            />
          </FLexLayout>

          <FLexLayout rowORColumn='row' style={{ marginTop: "10px" }}>
            <InputWithLabel
              onChange={onChangeBusinessValue}
              value={businessNameValue}
              label='Instagram Page'
            />
          </FLexLayout>
        </FLexLayout>
      </FLexLayout>

      <FLexLayout rowORColumn='row' justifyContent='center' alignItem='center'>
        <Button
          text='Delete Business'
          className='Button Delete-Business-Button'
        />
      </FLexLayout>

      <Button
        className='Button'
        text='Save Changes'
        style={{
          backgroundColor: "#FF8021",
          color: "white",
          height: "40px",
        }}
      />
    </div>
  );
};

export default SetupForm;
