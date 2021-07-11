import React from "react";

export interface Setting_Item_Props {
  title: string;
  subTitle: string;
  borderRequired: boolean;
}

const SettingsCardItem = (props: Setting_Item_Props) => {
  const borderStyle = props.borderRequired ? { borderBottom: "none" } : {};
  return (
    <div className='settings-card-item' style={{ ...borderStyle }}>
      <div className='settings-card-heading-h2'>{props.title}</div>
      <div className='settings-card-heading-h3'>{props.subTitle}</div>
    </div>
  );
};

export default SettingsCardItem;
