import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";

class App extends Component {
  state = {
    people: [{ name: "frank", age: 4 }, { name: "frankie", age: 5 }],
    username: "franktruc"
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
        { name: "frankie", age: 41 },
        { name: event.target.value, age: 51 }
      ]
    });
    //console.log("hello", this.state);
  };

  changeInputUserName = event => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <h2>hello thereqwe</h2>

        <h3> love asdf sdf sdfsdf</h3>
        <button onClick={this.clickButtonHandler}> click me </button>
        <Person
          name={this.state.people[0].name}
          age={this.state.people[0].age}
          click={this.switchNameHandler.bind(this, "new name123")}
        />
        <Person
          name={this.state.people[1].name}
          age={this.state.people[1].age}
          changed={this.changeName}
        />
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
