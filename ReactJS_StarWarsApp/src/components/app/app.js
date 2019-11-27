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
import ItemDetails, { Record } from "../item-details/item-details";
import Row from "../row";

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

    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.swapiService;

    // для Record компонента необхожим item, мы получаем его с сервера в ItemDetails поэтому мы используем в самом ItemDetails React.cloneElement где и берем его из state
    const personDetails = (
      <ItemDetails itemId={11} getData={getPerson} getImageUrl={getPersonImage}>
        <Record field="gender" label="Gender" />
        <Record field="eyeColor" label="Eye Color" />
      </ItemDetails>
    );
    // как мы модем видеть мы теперь просто отдаем в Record те поля которые хотим видеть беря значения из Api
    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      >
        <Record field="model" label="Model" />
        <Record field="length" label="Length" />
        <Record field="costInCredits" label="Cost" />
      </ItemDetails>
    );

    return (
      <ErrorBoundry>
        <div className="stardb-app">
          <Header />
          <Row left={personDetails} right={starshipDetails} />
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

// {planet}

//           <div className="row mb2 button-row">
//             <button
//               className="toggle-planet btn btn-warning btn-lg"
//               onClick={this.toggleRandomPlanet}
//             >
//               Toggle Random Planet
//             </button>
//             <ErrorButton />
//           </div>

//           <PeoplePage />
