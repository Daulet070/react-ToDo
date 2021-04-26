import React, { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component {

  state = {
    term: ''
  };

  onSearchChange = (event) => {
    const term = event.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input type="text"
              className="form-control search-input" 
              placeholder="Search"
              value={this.state.term}
              onChange={this.onSearchChange} />
    );
  }
}

export { SearchPanel };