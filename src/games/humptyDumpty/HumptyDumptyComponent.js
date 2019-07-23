import React, { Component } from "react";

import HumptyQuestion from "./HumptyQuestion";
import HumptyImage from "./HumptyImage";
import HumptyWord from "./HumptyWord";
import HumptyButtons from "./HumptyButtons";
import HumptyWinner from "./HumptyWinner";
import SubHeading from "../../shared/headers/SubHeading/SubHeading";
import { RegButton, DiffGameButton } from "../../shared/buttons";
import "./HumptyDumptyComponent.css";
import { ENGLISH_WORDS } from "./DATA/ENGLISH_WORDS";
import { RandomNum } from "../../shared/funcs";

class HumptyDumptyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.makeWord(),
      guessCount: 0,
      correctguessedletters: [],
      isWinner: false
    };
    this.letterGuess = this.letterGuess.bind(this);
    this.addGuessCountHandler = this.addGuessCountHandler.bind(this);
    this.resetHandler = this.resetHandler.bind(this);
  }
  makeWord() {
    const num = RandomNum(ENGLISH_WORDS.length, 0);
    return ENGLISH_WORDS[num];
  }
  letterGuess(value) {
    let newWord = new Set(this.state.word.name).size;
    this.setState(prevState => ({
      ...prevState,
      correctguessedletters: [...prevState.correctguessedletters, value],
      isWinner:
        newWord === prevState.correctguessedletters.length + value.length
          ? true
          : false
    }));
  }
  addGuessCountHandler() {
    this.setState(prevState => ({
      ...prevState,
      guessCount: prevState.guessCount + 1
    }));
  }
  resetHandler() {
    this.setState(prevState => ({
      ...prevState,
      word: this.makeWord(),
      guessCount: 0,
      correctguessedletters: [],
      isWinner: false
    }));
  }
  render() {
    const gameStateShowing =
      this.state.guessCount >= 7 ? (
        <div>Loser</div>
      ) : !this.state.isWinner ? (
        <HumptyButtons
          letterGuess={this.letterGuess}
          addGuessCountHandler={this.addGuessCountHandler}
          word={this.state.word}
        />
      ) : (
        <HumptyWinner word={this.state.word} />
      );
    return (
      <div className="container-fluid HumptyDumptyComponent">
        <SubHeading>Humpty Dumpty On The Wall</SubHeading>
        <div className="row justify-content-center text-center txtSize-3">
          <div className="col-12 col-sm-6 col-md-4 offset-md-0">
            <HumptyImage />
            <HumptyQuestion
              guessCount={this.state.guessCount}
              isWinner={this.state.isWinner}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 offset-md-0">
            <HumptyWord
              word={this.state.word}
              correctGuessedLetters={this.state.correctguessedletters}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 offset-md-0 txtSize-4">
            {gameStateShowing}
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <RegButton onClick={this.resetHandler}>Play Again?</RegButton>
        </div>
        <DiffGameButton />
      </div>
    );
  }
}

export default HumptyDumptyComponent;
