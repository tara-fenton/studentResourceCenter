import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newExerciseData: {
        name: "",
        body: ""
      },
      created: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(fieldName, value) {
    this.setState((prevState, props) => {
      const newExerciseData = Object.assign({}, prevState.newExerciseData);
      newExerciseData[fieldName] = value;
      return {
        newExerciseData: newExerciseData
      };
    });
  }

  onSubmit(evt) {
    evt.preventDefault();
    // PASS THE VALUES TO THE APP FROM SUBMITTING FORM
    this.props.getFormData(this.state.newExerciseData);
  }
  render() {
    const { name, body } = this.state.newExerciseData;
    return (
      <div className="Form">
        <form onSubmit={this.onSubmit}>
          Name:
          <input
            value={name}
            onChange={evt => this.onChange("name", evt.target.value)}
          />
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
