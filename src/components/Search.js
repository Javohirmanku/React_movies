import { type } from "@testing-library/user-event/dist/type";
import React from "react";

export default class Search extends React.Component {
  state = {
    search: "panda",
    type: "all"
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  handleFilter = (e) => {
    this.setState(()=> ({type: e.target.dataset.type}), ()=>{
      this.props.searchMovie(this.state.search, this.state.type)
    })
  }

  render() {
    return (
      <div className="row">
        <div className="input-field ">
          <input
            type="search"
            className="validate"
            placeholder="Search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="search__btn btn"
            onClick={() => this.props.searchMovie(this.state.search, this.state.type)}
          >
            Search Movies
          </button>
        </div>
        <div>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handleFilter}
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handleFilter}
              checked={this.state.type === "series"}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
