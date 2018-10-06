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

  getFormData(evt) {
    evt.preventDefault();
    console.log("got data");
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
