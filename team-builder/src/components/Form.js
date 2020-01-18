import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    // Ref creation
    this.TeamBuilderForm = React.createRef();
    this.TeamBuilderName = React.createRef();
    this.TeamBuilderRole = React.createRef();
    this.TeamBuilderAlert = React.createRef();
    this.submitForm = this.submitForm.bind(this);

    this.state = {
      members: []
    };
  }

  submitForm(e) {
    e.preventDefault();
    let newMembers = [];
    newMembers.push(
      `Name: ${this.TeamBuilderName.current.value} Role: ${
        this.TeamBuilderRole.current.value
      }`
    );

    // Clear Form
    this.TeamBuilderForm.current.reset();
    this.setState({ members: newMembers });
  }

  render() {
    return (
      <div className="formContainer">
        <h1 className="projectName">Forms - Team Builder</h1>
        <div className="members">Members: {this.state.members}</div>
        <div className="company-info">
          <h1>Team Builder Setup</h1>
          <p>Enter Information on the right !</p>
        </div>
        <div className="TeamBuilder">
          <form ref={this.TeamBuilderForm} onSubmit={this.submitForm}>
            <p>
              <label>Name</label>
              <input
                type="text"
                name="name"
                ref={this.TeamBuilderName}
                required
              />
            </p>
            <p>
              <label>Role</label>
              <input type="text" name="role" ref={this.TeamBuilderRole} />
            </p>
            <p className="full">
              <button>Submit</button>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
