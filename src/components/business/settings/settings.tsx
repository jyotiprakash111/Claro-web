import React from "react";
import "../../../assets/css/settings.scss";
import FlexLayout from "../../FlexLayout/FlexLayout";
import PageTitle from "../../shared/page-title/page-title";
import SettingsCard from "./settings-card";

const Settings = () => {
  const leftPanelData = [
    {
      title: "General",
      items: [
        {
          title: "Business Setup",
          subTitle: "Manage basic business details like name,timezone.",
        },
        {
          title: "Location",
          subTitle: "Manage multiple outlets for your business",
        },
      ],
    },
    {
      title: "Team",
      items: [
        {
          title: "Team Schedule",
          subTitle: "Build a systematic work schedule for your team",
        },
        {
          title: "Closed Dates",
          subTitle: "Set the dates on your calendar when you are closed",
        },
        { title: "Members", subTitle: "Add or remove members to your team" },
        {
          title: "Permissions",
          subTitle:
            "Manage permission and restriction to any member of your team",
        },
      ],
    },
    {
      title: "User Profile",
      items: [
        {
          title: "Personal Details",
          subTitle: "Provide your personal details or change your password",
        },
      ],
    },
  ];

  const rightPanelData = [
    {
      title: "Payments",
      items: [
        {
          title: "Payment Methods",
          subTitle:
            "Setup different payment options for customers to make online booking.",
        },
        {
          title: "Taxes",
          subTitle: "Manage Tax rates that apply to items sold at checkout",
        },
        {
          title: "Invoice Template",
          subTitle:
            "Configure details displayed on invoices issued to your clients",
        },
      ],
    },
    {
      title: "Communications",
      items: [
        {
          title: "Notification",
          subTitle: "Manage updates for staff and consumers ",
        },
        {
          title: "Booking Form",
          subTitle: "Manage the customer details required for each booking",
        },
        {
          title: "Cancellation Policy",
          subTitle: "State Cancellation policy and terms and conditions",
        },
        {
          title: "Cancellation Reason",
          subTitle: "Ask why customer cancelled a scheduled class",
        },
        {
          title: "Manage Cancellations",
          subTitle:
            "Setup guidelines for cancellations and Ask why they cancelled",
        },
      ],
    },
  ];

  return (
    <FlexLayout rowORColumn='row'>
      <div className='settings-sidebar'></div>
      <FlexLayout rowORColumn='column' className='business-content-container'>
        <PageTitle text={"Settings"} />
        <span className='setting-line'></span>
        <FlexLayout rowORColumn='row' className='settings-content-container'>
          <FlexLayout rowORColumn='column' className='settings-sub-container'>
            {leftPanelData.map((x, i) => (
              <SettingsCard key={i} title={x.title} items={x.items} />
            ))}
          </FlexLayout>
          <FlexLayout rowORColumn='column' className='settings-sub-container'>
            {rightPanelData.map((x, i) => (
              <SettingsCard key={i} title={x.title} items={x.items} />
            ))}
          </FlexLayout>
        </FlexLayout>
      </FlexLayout>
    </FlexLayout>
  );
};

export default Settings;
