import React, { Component } from "react";
import "./GameGallery.css";

import AnimalCountComponent from "../games/animalCount/AnimalCountComponent";

class GameGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGame: "animalcount"
    };
  }
  render() {
    const dogImg = require("../assets/images/lui-peng-ybHtKz5He9Y-unsplash.jpg");
    const catImg = require("../assets/images/akemy-mory-4tc7_jEgGzg-unsplash.jpg");
    console.log(this.state.activeGame);
    let renderedMain;
    switch (this.state.activeGame) {
      case "none":
        return (renderedMain = (
          <div className="row">
            <div className="col-12 col-sm-4">
              <p>DiceRoll</p>
            </div>
            <div className="col-12 col-sm-4">
              <p>AnimalCount</p>
            </div>
            <div className="col-12 col-sm-4">
              <div className="row">
                <div className="col-6">
                  <img src={catImg} alt="A dog" />
                </div>
                <div className="col-6">
                  <img src={dogImg} alt="A cat" />
                </div>
              </div>
            </div>
          </div>
        ));
      case "animalcount":
        return (renderedMain = (
          <div className="container">
            <div className="row">
              <div className="col-4 offset-4">
                <p>DiceRoll</p>
              </div>
            </div>
            <AnimalCountComponent />
          </div>
        ));
      default:
        break;
    }

    return <div className="GameGallery container-fluid">{renderedMain}</div>;
  }
}

export default GameGallery;
