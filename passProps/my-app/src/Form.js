import React, { Component } from 'react';

class Form extends Component {
  
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.props.getFormData}>
          <input type='text'></input>
          <button type='submit' value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
