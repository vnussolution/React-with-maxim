import React, { Component } from "react";
import classes from "../containers/App.css";
import Person from "../components/Persons/Person/Person";
import Validation from "../components/Validation/Validation";
import Char from "../components/Char/Char";

import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

class App extends Component {
  state = {
    people: [
      { id: "1", name: "frank", age: 4 },
      { id: "2", name: "frankie", age: 5 },
      { id: "3", name: "truc", age: 6 }
    ],
    username: "franktruc",
    text: "",
    showPeople: false
  };

  clickButtonHandler = () => {
    this.setState({
      people: [{ name: "22frank", age: 41 }, { name: "33frankie", age: 51 }]
    });
  };

  switchNameHandler = newName => {
    this.setState({
      people: [{ name: newName, age: 41 }, { name: "33frankie", age: 51 }]
    });
  };

  changeNameHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(person => person.id === id);

    const person = { ...this.state.people[personIndex] };

    person.name = event.target.value;
    //const new_person = Object.assign({}, this.state.people[personIndex]); // another way to copy an object

    const people = [...this.state.people];

    people[personIndex] = person;

    this.setState({
      people: people
    });
  };

  changeInputUserName = event => {
    this.setState({ username: event.target.value });
  };

  toggleHandler = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  clickDeleteHandler = deleteIndex => {
    const people = this.state.people.slice();
    people.splice(deleteIndex, 1);
    this.setState({ people });
  };

  showLengthHandler = event => {
    this.setState({
      text: event.target.value
    });
  };

  deleteLetterHandler = index => {
    let text = this.state.text.slice();
    let array = text.split("");
    array.splice(index, 1);
    let result = array.join("");
    console.log("hello", index, array);

    this.setState({ text: result });
  };

  displayChars = () => {
    const text = this.state.text.slice();
    const array = text.split("");

    return (
      <div>
        {array.map((letter, index) => {
          return (
            <Char
              key={index}
              char={letter}
              click={() => this.deleteLetterHandler(index)}
            />
          );
        })}
      </div>
    );
  };

  render() {
    let people = null;
    let btnClasses = "";

    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  clicked={() => this.clickDeleteHandler(index)}
                  changed={event => this.changeNameHandler(event, person.id)}
                />
              </ErrorBoundary>
            );
          })}
        </div>
      );
      btnClasses = classes.Red;
    }

    const assignedClasses = [];

    if (this.state.people.length <= 2) assignedClasses.push(classes.red);
    if (this.state.people.length <= 1) assignedClasses.push(classes.bold);

    return (
      <div className={classes.App}>
        <h2>hello </h2>
        <p className={assignedClasses.join(" ")}> some texts here</p>
        <button className={btnClasses} onClick={this.toggleHandler}>
          {" "}
          toggle{" "}
        </button>

        <input type="text" onChange={this.showLengthHandler} />
        <p> the length is {this.state.text.length}</p>

        <Validation textLength={this.state.text.length} />
        {this.displayChars()}
        {people}
        {/* <UserInput
          changed={this.changeInputUserName}
          name={this.state.username}
        />
        <UserOutput username={this.state.username} /> */}
      </div>
    );
  }
}

export default App;
