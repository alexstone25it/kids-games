import React, { Component } from "react";

import { Switch, Route } from "react-router-dom";

import GameGallery from "./gameGallery/GameGallery";
import AnimalCountComponent from "./games/animalCount/AnimalCountComponent";
import DiceRollComponent from "./games/diceRoll/DiceRollComponent";
import HumptyDumptyComponent from "./games/humptyDumpty/HumptyDumptyComponent";

class GamesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={GameGallery} />

        <Route exact path="/animalcount" component={AnimalCountComponent} />
        <Route exact path="/diceroll" component={DiceRollComponent} />
        <Route exact path="/humptydumpty" component={HumptyDumptyComponent} />
      </Switch>
    );
  }
}

export default GamesComponent;
