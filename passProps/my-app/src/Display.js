import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div className="Display">
        {this.props.exercise.name}
      </div>
    );
  }
}

export default Display;
