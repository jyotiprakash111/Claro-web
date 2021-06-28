import React from "react";
import {
  LaptopChromebook as LaptopChromebookIcon,
  DescriptionOutlined as DescriptionOutlinedIcon,
  Home as HomeIcon,
  Today as TodayIcon,
  People as PeopleIcon,
  MonetizationOn as MonetizationOnIcon,
  Sort as SortIcon,
  Loyalty as LoyaltyIcon,
} from "@material-ui/icons";

export const menu = [
  {
    icon: <HomeIcon />,
    title: "Home",
    to: "/",
  },
  {
    icon: <SortIcon />,
    title: "Services",
    to: "/home_services",
    items: [
      {
        title: "Classes",
        to: "/home_classes",
      },
    ],
  },
  {
    icon: <TodayIcon />,
    title: "Schedule",
    to: "/schedule",
  },
  {
    icon: <MonetizationOnIcon />,
    title: "Sales",
    to: "/sales",
  },
  {
    icon: <PeopleIcon />,
    title: "Customers",
    to: "/customer",
  },
  {
    icon: <LoyaltyIcon />,
    title: "Batch Schedule",
    to: "/batch_schedule",
  },
  {
    icon: <LaptopChromebookIcon />,
    title: "Online Booking",
    to: "/online_booking",
  },
  {
    icon: <DescriptionOutlinedIcon />,
    title: "Settings",
    to: "/settings",
    items: [
      {
        title: "General",
        to: "/settings",
      },
      {
        title: "Home Services",
        to: "/home_services",
      },
      {
        title: "Home Classes",
        to: "/home_classes",
      },
    ],
  },
];
