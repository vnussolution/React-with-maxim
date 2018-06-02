import React from "react";
import classes from "./Person.css";

const person = props => (
  <div className={classes.Person} id={props.id}>
    <p>
      I'm the Person {props.name} age: {props.age}
    </p>
    <h1>{props.children}</h1>
    <h3>new name is {props.name} </h3>
    <button onClick={props.clicked}>delete me</button>

    <input type="text" onChange={props.changed} value={props.name} />
  </div>
);

export default person;
