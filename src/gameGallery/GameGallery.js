import React from "react";
import "./GameGallery.css";
import { Link } from "react-router-dom";

function GameGallery() {
  const dogImg = require("../assets/images/lui-peng-ybHtKz5He9Y-unsplash.jpg");
  const catImg = require("../assets/images/akemy-mory-4tc7_jEgGzg-unsplash.jpg");
  const humptyImg = require("../assets/images/humpty.jpg");

  return (
    <div className="GameGallery container-fluid">
      <div className="row text-center">
        <p className="col-12">What do you want to play?</p>
      </div>
      <div className="row text-center">
        <div className="col-12 col-sm-4">
          <Link to="/animalcount">
            <h3>Animal Counting</h3>
            <div className="row">
              <div className="col-6">
                <img src={catImg} alt="A cat" className="GameGallery-image" />
              </div>
              <div className="col-6">
                <img src={dogImg} alt="A dog" className="GameGallery-image" />
              </div>
            </div>
          </Link>
        </div>
        <div className="col-12 col-sm-4">
          <Link to="/diceroll">
            <h3>Dice Rolling</h3>
            <div>dice</div>
          </Link>
        </div>
        <div className="col-12 col-sm-4">
          <Link to="/humptydumpty">
            <h3>Humpty Dumpty on the Wall</h3>
            <div className="row">
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
