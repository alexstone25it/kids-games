import React, { Component } from "react";

import Animal from "./Animal";
import AnimalCounter from "./AnimalCounter";
import { RandomNum } from "../../sharedFuncs";

class AnimalCountComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animal: "dog",
      dogCount: 0,
      catCount: 0,
      totalCount: 0,
      countGuess: 0,
      isWinner: false
    };
    this.animalFlipHandler = this.animalFlipHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.numberChosen = this.numberChosen.bind(this);
  }
  animalFlipHandler(e) {
    let num = RandomNum(2, 1);
    const newAnimal = num === 1 ? "dog" : "cat";
    this.setState(prevState => {
      return {
        animal: newAnimal,
        dogCount: prevState.dogCount + (newAnimal === "dog" ? 1 : 0),
        catCount: prevState.catCount + (newAnimal === "cat" ? 1 : 0),
        totalCount: prevState.totalCount + 1,
        countGuess: 0
      };
    });
  }
  numberChosen(value) {
    this.setState(prevState => {
      return {
        ...prevState,
        countGuess: value,
        isWinner: prevState.totalCount === value ? true : false
      };
    });
  }
  resetHandler() {
    this.setState(prevState => {
      return {
        ...prevState,
        animal: "dog",
        dogCount: 0,
        catCount: 0,
        totalCount: 0
      };
    });
  }
  render() {
    const dogImg = {
      src: require("../../assets/images/lui-peng-ybHtKz5He9Y-unsplash.jpg"),
      alt: "A dog"
    };
    const catImg = {
      src: require("../../assets/images/akemy-mory-4tc7_jEgGzg-unsplash.jpg"),
      alt: "A cat."
    };
    return (
      <div className="container-fluid AnimalCountComponent">
        <Animal animal={this.state.animal === "dog" ? dogImg : catImg} />

        <AnimalCounter
          dogCount={this.state.dogCount}
          catCount={this.state.catCount}
          totalCount={this.state.totalCount}
          numberChosen={this.numberChosen}
          countGuess={
            !this.state.isWinner &&
            this.state.countGuess > 0 &&
            this.state.totalCount > 1
              ? this.state.countGuess
              : null
          }
        />
        {this.state.isWinner ? (
          <div className="row justify-content-center">You have won!</div>
        ) : (
          <div className="row justify-content-center">
            <button onClick={this.animalFlipHandler}>Flip the Animal!</button>
          </div>
        )}

        <div className="row justify-content-center">
          <button onClick={this.resetHandler}>Count the animals again!</button>
        </div>
      </div>
    );
  }
}

export default AnimalCountComponent;
