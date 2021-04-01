import React, { Component } from "react";

export default class Searchbar extends Component {
  state = {
    term: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();

    this.props.onSearch(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Field</label>
            <input
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
