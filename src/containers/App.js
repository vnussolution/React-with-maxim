import React, { Component } from "react";
import classes from "../containers/App.css";
import Persons from "../components/Persons/Persons";
import Validation from "../components/Validation/Validation";
import Char from "../components/Char/Char";
import Cockpit from "../components/Cockpit/Cockpit";

import hoc from "../hoc/HOC";
import Aux from "../hoc/Aux";

class App extends Component {
  constructor(probs) {
    super(probs);
    console.log(`[App.js] inside constructor`);
  }

  componentWillMount() {
    console.log(`[App.js] inside componentWillMount`);
  }

  componentDidMount() {
    console.log(`[App.js] inside componentDidMount`);
  }

  // UPDATE

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      `[UPDATE App.js] inside shouldComponentUpdate`,
      nextProps,
      nextState
    );
    return (
      nextState.showPeople !== this.state.showPeople ||
      nextState.people !== this.state.people ||
      nextState.text !== this.state.text
    );
  }

  componentWillUpdate(nextProps, nextState) {
    console.log(
      `[UPDATE App.js] inside componentWillUpdate`,
      nextProps,
      nextState
    );
  }
  componentDidUpdate(nextProps, nextState) {
    console.log(
      `[UPDATE App.js] inside componentDidUpdate`,
      nextProps,
      nextState
    );
  }

  state = {
    people: [
      { id: "1", name: "frank", age: 4 },
      { id: "2", name: "frankie", age: 5 },
      { id: "3", name: "truc", age: 6 }
    ],
    username: "franktruc",
    text: "",
    showPeople: false,
    toggleCounter: 0
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
    this.setState((prevState, props) => {
      return {
        showPeople: !this.state.showPeople,
        toggleCounter: prevState.toggleCounter + 1
      };
    });
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
    console.log(`[App.js] inside render`);

    let people = null;

    if (this.state.showPeople) {
      people = (
        <Persons
          people={this.state.people}
          clickDelete={this.clickDeleteHandler}
          changeName={this.changeNameHandler}
        />
      );
    }

    return (
      <Aux>
        <button onClick={() => this.setState({ showPeople: true })}>
          button for testing shouldComponentUpdate
        </button>

        <Cockpit
          title={this.props.title}
          people={this.state.people}
          toggle={this.toggleHandler}
          showLength={this.showLengthHandler}
          text={this.state.text}
          show={this.state.showPeople}
        />
        <Validation textLength={this.state.text.length} />
        {this.displayChars()}
        {people}
        {/* <UserInput
          changed={this.changeInputUserName}
          name={this.state.username}
        />
        <UserOutput username={this.state.username} /> */}
      </Aux>
    );
  }
}

export default hoc(App, classes.App);
