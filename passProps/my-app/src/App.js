import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Display from "./Display";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newExerciseData: [
        {
          name: "tara",
          body: ""
        },
        {
          name: "bob",
          body: ""
        }
      ]
    };
    this.getFormData = this.getFormData.bind(this);
  }

  getFormData(value) {

    this.setState((prevState, props) => {
      return {
        newExerciseData: [...prevState.newExerciseData, value]
      };
    });
  }
  
  render() {
    return (
      <div className="App">
        <Form getFormData={this.getFormData} />
        <Display exercise={this.state.newExerciseData} />
      </div>
    );
  }
}

export default App;
