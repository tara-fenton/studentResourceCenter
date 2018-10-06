import React, { Component } from 'react';
import './App.css';
import Form from "./Form"
import Display from "./Display"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: {
        name: 'tara'
      }
    }
  }

  getFormData(value) {
    // evt.preventDefault();
    console.log("got data");
    // this comes from the form and triggered on the submit button

    // get the data from the Form
    console.log("im in the value ",value);
  }
  render() {
    return (
      <div className="App">
        <Form getFormData={this.getFormData} />
        <Display exercise={this.state.exercise}  />
      </div>
    );
  }
}

export default App;
