import { useState } from "react";

const InputBox = (props) => {
  return (
    <input 
    type={props.type} 
    id={props.id} 
    name={props.name} 
    placeholder={props.placeholder}>
    </input>
  );
};
export default InputBox;