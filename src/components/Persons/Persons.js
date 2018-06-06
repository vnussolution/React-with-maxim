import React, { PureComponent } from "react";
import Person from "./Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

class Persons extends PureComponent {
  constructor(probs) {
    super(probs);
    console.log(`[Persons.js] inside constructor`);
  }

  componentWillMount() {
    console.log(`[Persons.js] inside componentWillMount`);
  }

  componentDidMount() {
    console.log(`[Persons.js] inside componentDidMount`);
  }

  componentWillReceiveProps() {
    console.log(`[UPDATE Persons.js] inside componentWillReceiveProps`);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(
  //     `[UPDATE Persons.js] inside shouldComponentUpdate`,
  //     nextProps,
  //     nextState
  //   );
  //   return (
  //     nextProps.people !== this.props.people ||
  //     nextProps.clickDelete !== this.props.clickDelete ||
  //     nextProps.changeName !== this.props.changeName
  //   );
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      `[UPDATE Persons.js] inside componentWillUpdate`,
      nextProps,
      nextState
    );
  }
  componentDidUpdate(nextProps, nextState) {
    console.log(
      `[UPDATE Persons.js] inside componentDidUpdate`,
      nextProps,
      nextState
    );
  }
  render() {
    console.log(`[Persons.js] inside render`);

    return (
      <div>
        {this.props.people.map((person, index) => {
          return (
            <ErrorBoundary key={person.id}>
              <Person
                position={index}
                name={person.name}
                age={person.age}
                clicked={() => this.props.clickDelete(index)}
                changed={event => this.props.changeName(event, person.id)}
              />
            </ErrorBoundary>
          );
        })}
      </div>
    );
  }
}

export default Persons;
