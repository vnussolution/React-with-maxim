import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    people: [
      { name: "frank", age: 4 },
      { name: "frankie", age: 5 },
      { name: "truc", age: 6 }
    ],
    username: "franktruc",
    showPeople: false
  };

  clickButtonHandler = () => {
    this.setState({
      people: [{ name: "22frank", age: 41 }, { name: "33frankie", age: 51 }]
    });
    console.log("hello", this.state);
  };

  switchNameHandler = newName => {
    this.setState({
      people: [{ name: newName, age: 41 }, { name: "33frankie", age: 51 }]
    });
  };

  changeName = event => {
    this.setState({
      people: [
        { name: event.target.value, age: 4 },
        { name: event.target.value, age: 5 },
        { name: event.target.value, age: 6 }
      ]
    });
    //console.log("hello", this.state);
  };

  changeInputUserName = event => {
    this.setState({ username: event.target.value });
  };

  toggleHandler = () => {
    this.setState({ showPeople: !this.state.showPeople });
  };

  render() {
    let people = null;
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map(person => {
            return (
              <Person
                name={person.name}
                age={person.age}
                changed={this.changeName}
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
        <UserInput
          changed={this.changeInputUserName}
          name={this.state.username}
        />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
