import React from "react";
import { Route, Switch } from "react-router-dom";
import Stepper from "../../shared/stepper";
import AdditionalDetails from "./additional-details";
import BasicInfoForm from "./basic-info-form";
import PricingPackages from "./pricing-packages";
import ReviewPublish from "./review-publish";
import ScheduleLocation from "./schedule-location";

let stepperOptions = [
  {
    label: "Basic Information",
    step: 1,
    link: "/new-class/basic-info",
    component: BasicInfoForm,
  },
  {
    label: "Schedule & Location",
    step: 2,
    link: "/new-class/schedule-location",
    component: ScheduleLocation,
  },
  {
    label: "Pricing & Package",
    step: 3,
    link: "/new-class/pricing-packages",
    component: PricingPackages,
  },
  {
    label: "Additional details",
    step: 4,
    link: "/new-class/additional-details",
    component: AdditionalDetails,
  },
  {
    label: "Review and Publish",
    step: 5,
    link: "/new-class/review",
    component: ReviewPublish,
  },
];

const NewClass = () => {
  return (
    <>
      <div className='main-heading'>
        <h1>New Class</h1>
        <nav aria-label='breadcrumb'>
          <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
              <a href='#'>Services</a>
            </li>
            <li className='breadcrumb-item'>
              <a href='#'>Classes</a>
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
              New Class
            </li>
          </ol>
        </nav>
      </div>
      <div
        className='alert alert-success-border alert-dismissible fade show'
        role='alert'
      >
        <i className='bi bi-check-circle-fill'></i> New category is successfully
        added. Please select it from the drop down menu
        <button
          type='button'
          className='btn-close'
          data-bs-dismiss='alert'
          aria-label='Close'
        ></button>
      </div>

      <Stepper options={stepperOptions} activeStep={2} />
    </>
  );
};

export default NewClass;
