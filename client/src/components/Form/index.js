import React, { Component } from "react";

class Form extends Component {

  render() {
    return (
      <form>
        <p>Search: {this.props.value}</p>
        <input
          type="text"
          placeholder="Search Topic"
          name="searchTerm"
          value={this.props.value}
          onChange={this.props.handleInputChange}
        />

        <button onClick={this.props.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
