import React, { Component } from "react";

import ErrorButton from "../error-button/error-button";
import SwapiService from "../../services/swapi-service";

import "./item-details.css";

const Record = ({ item, field, label }) => {
  return (
    <li className="list-group-item">
      <span className="term">{label}</span>
      <span>{item[field]}</span>
    </li>
  );
};

// naming export
export { Record };

export default class ItemDetails extends Component {
  swapiService = new SwapiService();

  state = {
    item: null,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) {
      return;
    }

    getData(itemId).then(item => {
      this.setState({ item, image: getImageUrl(item) });
    });
  }

  render() {
    const { item, image } = this.state;
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const { id, name, gender, birthYear, eyeColor } = item;

    // props children
    return (
      <div className="item-details card">
        <img className="item-image" src={image} alt="character" />

        <div className="card-body">
          <h4>{name}</h4>
          <ul className="list-group list-group-flush">
            {React.Children.map(this.props.children, (child, idx) => {
              // делает так какого типа чайлд вам попался. идет по каждому чайлду и обработает null undefined
              // React.Children упрощает обработку props.children
              // собственно сдесь идет передача пропсов в компонент из app.js элемента Record
              return React.cloneElement(child, { item }); // по мимо тех что копируются добавить еще свойств в дополнение
            })}
          </ul>
          <ErrorButton />
        </div>
      </div>
    );
  }
}
