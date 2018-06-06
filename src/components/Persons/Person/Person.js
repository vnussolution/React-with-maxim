import React, { Component } from "react";
import classes from "./Person.css";
import PropTypes from "prop-types";

class Person extends Component {
  constructor(probs) {
    super(probs);
    console.log(`[Person.js] inside constructor`);
  }

  componentWillMount() {
    console.log(`[Person.js] inside componentWillMount`);
  }

  componentDidMount() {
    console.log(`[Person.js] inside componentDidMount`);
    //because this cycle hook happens after render, so we can do this
    if (this.props.position === 1) {
      this.inputElement.focus();
    }
  }
  componentWillUnmount() {
    // Component is about to get removed => Perform any cleanup work here!
    console.log(`[Person.js] inside componentWillUnmount`);
  }

  // componentWillUnmount() {
  //   // Component is about to get removed => Perform any cleanup work here!
  //   console.log("I'm about to be removed!");
  // }

  render() {
    console.log(`[Person.js] inside render`);
    // to throw an error
    const rando = Math.random();
    if (rando > 1) throw Error("something went wrong here"); // change rado >0.5 to throw error 50%

    return (
      <div className={classes.Person} id={this.props.id}>
        <p>
          I'm the Person {this.props.name} age: {this.props.age}
        </p>
        <h1>{this.props.children}</h1>
        <h3>new name is {this.props.name} </h3>
        <button onClick={this.props.clicked}>delete me</button>

        <input
          type="text"
          ref={input => (this.inputElement = input)}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  clicked: PropTypes.func,
  changed: PropTypes.func
};
export default Person;
