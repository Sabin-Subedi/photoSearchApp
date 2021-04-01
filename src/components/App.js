import React, { Component } from "react";
import Searchbar from "./Searchbar";
import unsplash from "../api/unsplash";
import Imagelist from "./Imagelist";

export default class App extends Component {
  state = {
    images: [],
  };

  onSearchSubmit = (term) => {
    unsplash
      .get(`search/photos`, {
        params: {
          query: term,
        },
      })
      .then((response) => {
        this.setState({ images: response.data.results });
      });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSearch={this.onSearchSubmit} />
        Found: {this.state.images.length} Images
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}
