import React from "react";
import Person from "./Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const persons = props => {
  return (
    <div>
      {props.people.map((person, index) => {
        return (
          <ErrorBoundary key={person.id}>
            <Person
              name={person.name}
              age={person.age}
              clicked={() => props.clickDelete(index)}
              changed={event => props.changeName(event, person.id)}
            />
          </ErrorBoundary>
        );
      })}
    </div>
  );
};

export default persons;
