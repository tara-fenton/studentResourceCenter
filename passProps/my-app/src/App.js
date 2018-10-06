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
    this.getFormData = this.getFormData.bind(this);
  }

  getFormData(value) {
    // SETS THE DISPLAY FOR THE EXERCISE WITH WHAT WAS SUBMITTED

    this.setState(prevState => ({
    exercise: {
        ...prevState.exercise,
        name: value
    }
}))

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
