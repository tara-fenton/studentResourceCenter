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
          body: "legs"
        },
        {
          name: "bob",
          body: "arms"
        }
      ]
    };
    this.getFormData = this.getFormData.bind(this);
  }

  getFormData(value) {
    // this comes from the form and triggered on the submit button
    // SETS THE DISPLAY FOR THE EXERCISE WITH WHAT WAS SUBMITTED
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
