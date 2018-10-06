import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Display extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Display">
        {this.props.exercise.name}
      </div>
    );
  }
}

export default Display;
