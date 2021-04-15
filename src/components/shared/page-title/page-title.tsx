import React from "react";

interface Props {
  text: string;
}

const PageTitle = ({ text }: Props) => {
  return (
    <div className='main-heading'>
      <h1>{text}</h1>
    </div>
  );
};

export default PageTitle;
