import React from "react";
import "./Person.css";

const person = props => (
  <div className="Person">
    <p>
      I'm the Person {props.name} age: {props.age}
    </p>
    <h1>{props.children}</h1>
    <h3 onClick={props.click}>new name is {props.name} </h3>

    <input type="text" onChange={props.changed} value={props.name} />
  </div>
);

export default person;
