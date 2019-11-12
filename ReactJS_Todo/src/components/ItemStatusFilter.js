import React, { Component } from "react";
import "./ItemStatusFilter.css";

export default class ItemStatusFilter extends Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" }
  ];
  render() {
    let { filter, onStatusChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const buttonClass = isActive ? "btn-info" : "btn-outline-secondary";
      return (
        <button
          type="button"
          key={name}
          className={`btn ${buttonClass}`}
          onClick={e => onStatusChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}
