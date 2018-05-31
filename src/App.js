import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    people: [
      { id: "1", name: "frank", age: 4 },
      { id: "2", name: "frankie", age: 5 },
      { id: "3", name: "truc", age: 6 }
    ],
    username: "franktruc",
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
    console.log("hello", this.state);

    const people = this.state.people.slice();
    people.splice(deleteIndex, 1);
    this.setState({ people });
  };

  render() {
    let people = null;
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person
                name={person.name}
                age={person.age}
                key={person.id}
                clicked={() => this.clickDeleteHandler(index)}
                changed={event => this.changeNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h2>hello </h2>

        <button onClick={this.toggleHandler}> toggle </button>
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
