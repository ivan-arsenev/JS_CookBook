import React, { Component } from "react";

import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";
import SwapiService from "../../services/swapi-service";
import Row from "../row";

// компонет отвечающий за ошибки
import ErrorBoundry from "../error-boundry";

import "./people-page.css";

export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 3
  };

  onPersonSelected = selectedPerson => {
    this.setState({ selectedPerson });
  };

  /* 
    renderItem - рендер функция это паттерн реакта когда вы передаете в реакт компонент функцию которая занимается рендером части этого компонента или вообще всего компонента 🐱‍💻
  
  */

  render() {
    // свойства элементы
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={item => `${item.name}`} // or any jsx element
      >
        {item => ` (${item.birthYear} 🌠)`}
      </ItemList>
    );

    // свойства элементы
    const personDetails = (
      <ErrorBoundry>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundry>
    );

    //
    return <Row left={itemList} right={personDetails} />;
  }
}
