import React, { Component } from "react";
import "./AnimalCountComponent.css";
import Animal from "./Animal";
import Counter from "../../shared/components/Counter";
import { RandomNum } from "../../shared/funcs";
import { RegButton, DiffGameButton } from "../../shared/buttons";
import SubHeading from "../../shared/headers/SubHeading/SubHeading";

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
        totalCount: 0,
        isWinner: false
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
    const counterIntroText = "How many dogs and cats have you seen?";
    return (
      <div className="container-fluid AnimalCountComponent">
        <SubHeading>Animal Counting</SubHeading>
        <div className="row col-8 col-md-4 offset-2 offset-md-4 ">
          <Animal animal={this.state.animal === "dog" ? dogImg : catImg} />
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <p>There have been {this.state.dogCount} dogs.</p>
          </div>
          <div className="row justify-content-center">
            <p> There have been {this.state.catCount} cats.</p>
          </div>
          <Counter
            counterIntroText={counterIntroText}
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
        </div>
        {this.state.isWinner ? (
          <div className="row justify-content-center">You have won!</div>
        ) : (
          <div className="row justify-content-center mb-3">
            <RegButton onClick={this.animalFlipHandler}>
              Flip the Animal!
            </RegButton>
          </div>
        )}

        <div className="row justify-content-center">
          <RegButton onClick={this.resetHandler}>
            Count the animals again!
          </RegButton>
        </div>
        <DiffGameButton />
      </div>
    );
  }
}

export default AnimalCountComponent;
