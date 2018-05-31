import React from "react";

const userInput = props => (
  <div>
    <label>Input: </label>
    <input type="text" onChange={props.changed} value={props.name} />
  </div>
);

export default userInput;
