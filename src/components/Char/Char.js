import React from "react";
import classes from "./Char.css";

const char = props => {
  return (
    <div onClick={props.click} className={classes.Char}>
      {props.char}
    </div>
  );
};

export default char;
