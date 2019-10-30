import React, { Component } from "react";

class Form extends Component {

  render() {
    return (
      <form className="d-flex w-100 p-2 bg-danger">
        <input
          className="pl-2 py-0 searchBox"
          type="text"
          placeholder="Search Topic"
          name="searchTerm"
          value={this.props.value}
          onChange={this.props.handleInputChange}
        />

        <button className="btn btn-dark text-danger no-round searchButton" onClick={this.props.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
