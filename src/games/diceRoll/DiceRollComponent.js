import React, { Component } from "react";
import OneDie from "./OneDie";
import { RandomNum } from "../../shared/funcs";
import { RegButton } from "../../shared/buttons";
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

    this.resetHandler = this.resetHandler.bind(this);
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

  resetHandler() {
    this.setState = {
      die1: RandomNum(5, 1),
      die2: RandomNum(5, 1),
      mathSymbol: RandomNum(2, 0) === 1 ? "+" : "-",
      guess: "",
      isWinner: false,
      tryAgain: 0
    };
  }
  render() {
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
            <RegButton>Try Again?</RegButton>
          </div>
        );
      } else if (this.state.guess < this.getTotal()) {
        ending = (
          <div>
            <p>That was a bit too low, try a higher number</p>
            <RegButton>Try Again?</RegButton>
          </div>
        );
      }
    } else if (this.state.tryAgain === 1 && !this.state.isWinner) {
      ending = (
        <div>
          <p>Oh, that was a good attempt!</p>
          <RegButton>Try Again?</RegButton>
        </div>
      );
    } else if (this.state.tryAgain === 0 && !this.state.isWinner) {
      ending = (
        <div>
          <RegButton>Try Again?</RegButton>
        </div>
      );
    }
    return (
      <div className="container-fluid DiceRollComponent">
        <SubHeading>Roll The Dice!</SubHeading>
        <div className="row">
          <RegButton onClick={this.rollDiceHandler}>
            Let's roll the dice!
          </RegButton>
        </div>
        <div className="row">
          <div className="col">
            <OneDie dieNum={this.state.die1} />
          </div>
          <div className="col">
            <OneDie dieNum={this.state.die2} />
          </div>
        </div>
        <div className="row">
          <div className="col">This die rolled {this.state.die1}</div>
          <div className="col">This die rolled {this.state.die2}</div>
        </div>

        <div className="row">
          <div className="col">
            <h3 className="row">
              Let's {this.state.mathSymbol === "+" ? "add" : "minus"}{" "}
              {this.state.die1} {this.state.mathSymbol === "+" ? "and" : "from"}{" "}
              {this.state.die2}
            </h3>
            <span className="row"> {this.state.die1}</span>
            <span className="row">
              <span className="col">{this.state.mathSymbol}</span>
              <span className="col">{this.state.die2}</span>
            </span>

            <span className="row">
              <hr style={{ width: "10%", borderTop: "1px solid black" }} />
            </span>
            <span className="row">
              <label htmlFor="guess">What do you think it is?</label>
              <input
                type="text"
                name="guess"
                value={this.state.guess}
                onChange={this.guessHandler}
                onKeyPress={this.submitHandler}
              />
            </span>
          </div>
        </div>

        <div className="row">{ending}</div>
        {!this.state.isWinner && (
          <DiceRollHelper
            mathSymbol={this.state.mathSymbol}
            die1={this.state.die1}
            die2={this.state.die2}
          />
        )}
      </div>
    );
  }
}

export default DiceRollComponent;
