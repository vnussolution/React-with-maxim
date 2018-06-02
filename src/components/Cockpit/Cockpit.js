import React from "react";
import classes from "./Cockpit.css";
const cockpit = props => {
  const assignedClasses = [];
  let btnClasses = "";

  if (props.people.length <= 2) assignedClasses.push(classes.red);
  if (props.people.length <= 1) assignedClasses.push(classes.bold);
  if (props.show) btnClasses = classes.Red;
  return (
    <div className={classes.Cockpit}>
      <h2>{props.title} </h2>
      <p className={assignedClasses.join(" ")}> some texts here</p>
      <button className={btnClasses} onClick={props.toggle}>
        toggle
      </button>

      <input type="text" onChange={props.showLength} />
      <p> the length is {props.text.length}</p>
    </div>
  );
};

export default cockpit;
