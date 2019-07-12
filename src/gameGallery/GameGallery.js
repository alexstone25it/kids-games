import React, { Component } from "react";
import "./GameGallery.css";

import AnimalCountComponent from "../games/animalCount/AnimalCountComponent";
import HumptyDumptyComponent from "../games/humptyDumpty/HumptyDumptyComponent";

class GameGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeGame: "humptydumpty"
    };
  }
  render() {
    const dogImg = require("../assets/images/lui-peng-ybHtKz5He9Y-unsplash.jpg");
    const catImg = require("../assets/images/akemy-mory-4tc7_jEgGzg-unsplash.jpg");
    const humptyImg = require("../assets/images/humpty.jpg");
    let renderedMain;
    switch (this.state.activeGame) {
      case "none":
        return (renderedMain = (
          <div className="GameGallery container-fluid">
            <div className="row text-center">
              <p className="col-12">What do you want to play?</p>
            </div>
            <div className="row text-center">
              <div className="col-12 col-sm-4">
                <h3>Animal Count</h3>
                <div className="row">
                  <div className="col-6">
                    <img
                      src={catImg}
                      alt="A cat"
                      className="GameGallery-image"
                    />
                  </div>
                  <div className="col-6">
                    <img
                      src={dogImg}
                      alt="A dog"
                      className="GameGallery-image"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-4">
                <h3>Dice Roll</h3>
                <div>dice</div>
              </div>
              <div className="col-12 col-sm-4">
                <h3>Humpty Dumpty on the wall</h3>
                <div className="row">
                  <div className="col">
                    <img
                      src={humptyImg}
                      alt="Humpty Dumpty"
                      className="GameGallery-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ));
      case "animalcount":
        return (renderedMain = (
          <div className="GameGallery container-fluid">
            <div className="row">
              <div className="col offset-1">
                <p>Dice Roll</p>
              </div>
              <div className="col">Humpty Dumpty on the wall</div>
            </div>
            <AnimalCountComponent />
          </div>
        ));
      case "humptydumpty":
        return (renderedMain = (
          <div className="GameGallery container-fluid">
            <div className="row">
              <div className="col offset-1">
                <p>DiceRoll</p>
              </div>
              <div className="col">Animal Count</div>
            </div>
            <HumptyDumptyComponent />
          </div>
        ));
      default:
        break;
    }

    return <div>{renderedMain}</div>;
  }
}

export default GameGallery;
