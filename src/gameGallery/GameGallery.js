import React from "react";
import { Link } from "react-router-dom";

import "./GameGallery.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiceOne, faDiceSix } from "@fortawesome/free-solid-svg-icons";

function GameGallery() {
  const dogImg = require("../assets/images/lui-peng-ybHtKz5He9Y-unsplash.jpg");
  const catImg = require("../assets/images/akemy-mory-4tc7_jEgGzg-unsplash.jpg");
  const humptyImg = require("../assets/images/humpty.jpg");

  return (
    <div className="GameGallery container-fluid mt-5">
      <div className="row text-center">
        <p className="col-12">What do you want to play?</p>
      </div>
      <div className="row">
        <div className="col-12 col-sm-4 mt-3 mt-sm-0">
          <Link to="/animalcount">
            <header className="row justify-content-center">
              <h3 className="darkgreen txtSize-3">Animal Counting</h3>
            </header>
            <div className="row justify-content-center">
              <div className="col-6">
                <img src={catImg} alt="A cat" className="GameGallery-image" />
              </div>
              <div className="col-6">
                <img src={dogImg} alt="A dog" className="GameGallery-image" />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-sm-4 mt-5 mt-sm-0">
          <Link to="/diceroll">
            <header className="row justify-content-center">
              <h3 className="blue txtSize-3">Dice Rolling</h3>
            </header>
            <div className="row">
              <div className="col-6 text-right">
                <FontAwesomeIcon icon={faDiceOne} />
              </div>
              <div className="col-6 text-left">
                <FontAwesomeIcon icon={faDiceSix} />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-sm-4 mt-5 mt-sm-0">
          <Link to="/humptydumpty">
            <header className="row justify-content-center">
              <h3 className="red txtSize-3">Humpty Dumpty</h3>
            </header>

            <div className="row justify-content-center">
              <div className="col">
                <img
                  src={humptyImg}
                  alt="Humpty Dumpty"
                  className="GameGallery-image"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GameGallery;
