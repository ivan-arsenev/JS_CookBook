import React, { Component } from 'react';
import './ItemAddForm.css';
export default class ItemAddForm extends Component {
  state = {
    label: ''
  };

  onLabelChange = e => {
    this.setState({
      label: e.target.value.toUpperCase()
    });
  };
  onSubmit = e => {
    e.preventDefault(); // don't allow to reload page
    this.props.onItemCliked(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className='item-add-form d-flex' onSubmit={this.onSubmit}>
        <input
          type='text'
          className='form-control'
          placeholder='What need to be done'
          onChange={this.onLabelChange}
          value={this.state.label}
        />

        <button className='btn btn-outline-secondary'>Add</button>
      </form>
    );
  }
}
