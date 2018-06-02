import React from "react";

const userInput = props => {
  const myStyle = {
    width: "50%",
    border: "2px solid red",
    textAlign: "center",
    margin: "20px auto",
    cursor: "pointer"
  };
  return (
    <div style={myStyle}>
      <label>Input: </label>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default userInput;
