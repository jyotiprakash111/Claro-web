import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
import TrendingUpOutlinedIcon from "@material-ui/icons/TrendingUpOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import HomeIcon from "@material-ui/icons/Home";
import TodayIcon from "@material-ui/icons/Today";
import PeopleIcon from "@material-ui/icons/People";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import SortIcon from "@material-ui/icons/Sort";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import React from "react";

export const menu = [
  {
    icon: <HomeIcon />,
    title: "Home",
    to: "/",
  },
  {
    icon: <SortIcon />,
    title: "Services",
    items: [
      {
        title: "Home Screen",
        to: "/homescreen",
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
    icon: <LoyaltyIcon />,
    title: "Online Booking",
    to: "/batch_schedule",
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
