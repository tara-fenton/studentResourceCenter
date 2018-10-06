import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(evt) {
    this.setState({value: evt.target.value});
  }
  onSubmit(evt) {
    evt.preventDefault();
    // PASS THE VALUES TO THE APP FROM SUBMITTING FORM
    this.props.getFormData(this.state.value);
  }
  render() {
    return (
      <div className="Form">
        <form onSubmit={this.onSubmit}>
          <input value={this.state.value} onChange={this.onChange}></input>
          <button type='submit' value="Submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
