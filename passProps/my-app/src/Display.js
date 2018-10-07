import React, { Component } from "react";

class Display extends Component {

  render() {
    const exercises = this.props.exercise;
    const exercisesArray = Object.values(exercises);
    const ex = exercisesArray.map((ex, i) => {
      return (
        <div className="ex" key={i}>
          <h3>{ex.name} : {ex.body}</h3>
        </div>
      );
    });
    return <div className="Display">{ex}</div>;
  }
}

export default Display;
