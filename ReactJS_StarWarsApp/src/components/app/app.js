import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorButton from "../error-button";
import PeoplePage from "../people-page";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";
import "./app.css";
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-details/person-details";

export default class App extends Component {
  swapiService = new SwapiService();
  state = {
    showRandomPlanet: true
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  render() {
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          {planet}

          <div className="row mb2 button-row">
            <button
              className="toggle-planet btn btn-warning btn-lg"
              onClick={this.toggleRandomPlanet}
            >
              Toggle Random Planet
            </button>
            <ErrorButton />
          </div>

          <PeoplePage />
        </div>
      </ErrorBoundry>
    );
  }
}

// <div className="row mb2">
// <div className="col-md-6">
//   <ItemList
//     onItemSelected={this.onPersonSelected}
//     getData={this.swapiService.getAllPlanets}
//     renderItem={item => item.name}
//   ></ItemList>
// </div>
// <div>
//   <PersonDetails personId={this.state.selectedPerson} />
// </div>
// </div>
