import React from "react";

const validation = props => {
  let message = props.textLength >= 5 ? "Text long enough" : "Text too short";

  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

export default validation;
