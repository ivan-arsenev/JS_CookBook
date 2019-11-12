import React from 'react';
import './SearchPanel.css';

export default class SearchPanel extends React.Component {
  state = {
    term: ''
  };
  onSearch = e => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };
  render() {
    return (
      <input
        type='text'
        className='form-control search-input'
        placeholder='search'
        onChange={e => this.onSearch(e)}
        value={this.state.term}
      />
    );
  }
}
