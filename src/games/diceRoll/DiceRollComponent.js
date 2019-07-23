import React, { Component } from "react";
import "./DiceRollComponent.css";
import OneDie from "./OneDie";
import { RandomNum } from "../../shared/funcs";
import { RegButton, DiffGameButton } from "../../shared/buttons";
import SubHeading from "../../shared/headers/SubHeading/SubHeading";
import DiceRollHelper from "./DiceRollHelper";

class DiceRollComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 1,
      die2: 6,
      mathSymbol: "+",
      guess: "",
      isWinner: false,
      tryAgain: 0
    };
    this.rollDiceHandler = this.rollDiceHandler.bind(this);
    this.guessHandler = this.guessHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.tryAgainHandler = this.tryAgainHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
    this.inputRef = React.createRef();
  }
  rollDiceHandler(event) {
    this.setState(prevState => ({
      ...prevState,
      die1: RandomNum(5, 1),
      die2: RandomNum(5, 1),
      mathSymbol: RandomNum(2, 0) === 1 ? "+" : "-"
    }));
  }
  guessHandler(event) {
    let value = event.target.value;
    this.setState(prevState => ({
      ...prevState,
      guess: value
    }));
  }
  submitHandler(event) {
    if (event.charCode === 13) {
      if (this.getTotal() === Number(this.state.guess)) {
        this.setState(prevState => ({
          ...prevState,
          isWinner: true
        }));
      } else {
        this.setState(prevState => ({
          ...prevState,
          tryAgain: prevState.tryAgain + 1
        }));
      }
    }
  }

  getTotal() {
    let num1 = this.state.die1;
    let num2 = this.state.die2;
    let sym = this.state.mathSymbol;
    let total;
    if (sym === "+") {
      total = num1 + num2;
    } else {
      total = num1 - num2;
    }
    return total;
  }
  tryAgainHandler() {
    this.setState(prevState => ({
      ...prevState,
      guess: ""
    }));
    this.inputRef.current.focus();
  }
  resetHandler() {
    this.setState(prevState => ({
      ...prevState,
      die1: RandomNum(5, 1),
      die2: RandomNum(5, 1),
      mathSymbol: RandomNum(2, 0) === 1 ? "+" : "-",
      guess: "",
      isWinner: false,
      tryAgain: 0
    }));
  }
  render() {
    let bigDie;
    let littleDie;
    if (this.state.die1 >= this.state.die2) {
      bigDie = this.state.die1;
      littleDie = this.state.die2;
    } else {
      bigDie = this.state.die2;
      littleDie = this.state.die1;
    }
    let ending;
    if (this.state.isWinner) {
      ending = (
        <div>
          <p>You did it!!!!!!!!!</p>

          <RegButton onClick={this.resetHandler}>Play Again?</RegButton>
        </div>
      );
    } else if (this.state.tryAgain > 1) {
      if (this.state.guess > this.getTotal()) {
        ending = (
          <div>
            <p>That was a bit too high, try a lower number</p>
            <RegButton onClick={this.tryAgainHandler}>Try Again?</RegButton>
          </div>
        );
      } else if (this.state.guess < this.getTotal()) {
        ending = (
          <div>
            <p>That was a bit too low, try a higher number</p>
            <RegButton onClick={this.tryAgainHandler}>Try Again?</RegButton>
          </div>
        );
      }
    } else if (this.state.tryAgain === 1 && !this.state.isWinner) {
      ending = (
        <div>
          <p>Oh, that was a good attempt!</p>
          <RegButton onClick={this.tryAgainHandler}>Try Again?</RegButton>
        </div>
      );
    } else if (this.state.tryAgain === 0 && !this.state.isWinner) {
      ending = (
        <div>
          <RegButton onClick={this.tryAgainHandler}>Try Again?</RegButton>
        </div>
      );
    }
    let sumToDo;
    if (this.state.mathSymbol === "+") {
      sumToDo = (
        <p>
          Let's add {bigDie} and {littleDie} together!
        </p>
      );
    } else {
      sumToDo = (
        <p>
          Let's take {littleDie} away from {bigDie}!
        </p>
      );
    }
    return (
      <div className="container-fluid DiceRollComponent">
        <SubHeading>Roll The Dice!</SubHeading>
        <div className="row justify-content-center">
          <RegButton onClick={this.rollDiceHandler}>
            Let's roll the dice!
          </RegButton>
        </div>
        <div className="row justify-content-center">
          <div className="col col-md-3 justify-content-center text-center">
            <OneDie dieNum={bigDie} />
            <p>This die rolled {bigDie}</p>
          </div>
          <div className="col col-md-3 justify-content-center text-center">
            <OneDie dieNum={littleDie} />
            <p>This die rolled {littleDie}</p>
          </div>
        </div>
        <div className="row justify-content-center">{sumToDo}</div>

        <div>
          <span className="row justify-content-center">{bigDie}</span>
          <span className="row justify-content-center mr-5">
            {this.state.mathSymbol}
          </span>
          <span className="row justify-content-center mt-n5">{littleDie}</span>
          <hr
            className="row mx-auto mb-5"
            style={{ width: "10rem", borderTop: "1px solid black" }}
          />
          <span className="row justify-content-center">
            <span className="col-12 text-center order-2">
              <label htmlFor="guess">What do you think it is?</label>
            </span>
            <span className="col-12 text-center order-1">
              <input
                ref={this.inputRef}
                className="order-1"
                type="text"
                name="guess"
                value={this.state.guess}
                onChange={this.guessHandler}
                onKeyPress={this.submitHandler}
              />
            </span>
          </span>
        </div>

        <div className="row justify-content-center m-3">{ending}</div>
        <div className="row justify-content-center">
          {!this.state.isWinner && (
            <DiceRollHelper
              mathSymbol={this.state.mathSymbol}
              bigDie={bigDie}
              littleDie={littleDie}
            />
          )}
        </div>
        <DiffGameButton />
      </div>
    );
  }
}

export default DiceRollComponent;
