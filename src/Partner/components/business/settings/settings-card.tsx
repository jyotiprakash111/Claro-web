import React from "react";
import { Link } from "react-router-dom";
import SettingsCardItem from "./settings-card-item";

interface Props {
  title: string;
  items: { title: string; subTitle: string }[];
}

const SettingsCard = (props: Props) => {
  const { title, items } = props;
  return (
    <Link to='/business-setup' style={{ textDecoration: "none" }}>
      <div className='settings-card'>
        <div className='settings-card-heading-h1'> {title} </div>
        {items.map((item, i) => (
          <SettingsCardItem
            borderRequired={i === items.length - 1}
            title={item.title}
            subTitle={item.subTitle}
            key={i}
          />
        ))}
      </div>
    </Link>
  );
};

export default SettingsCard;
