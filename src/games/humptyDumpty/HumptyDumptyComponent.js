import React, { Component } from "react";

import HumptyQuestion from "./HumptyQuestion";
import HumptyImage from "./HumptyImage";
import HumptyWord from "./HumptyWord";
import HumptyButtons from "./HumptyButtons";
import HumptyWinner from "./HumptyWinner";

import "./HumptyDumptyComponent.css";
import { WORDS } from "./data/Words";
import { RandomNum } from "../../sharedFuncs";

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
  }
  makeWord() {
    const num = RandomNum(WORDS.length, 0);
    return WORDS[num];
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
        <div className="row justify-content-center">
          <header>
            <h2 className="txtSize-4">Humpty Dumpty on the Wall</h2>
          </header>
        </div>
        <div className="row justify-content-center text-center txtSize-3">
          <div className="col-12 col-sm-6 offset-sm-1 col-md-4 offset-md-0">
            <HumptyImage />
            <HumptyQuestion
              guessCount={this.state.guessCount}
              isWinner={this.state.isWinner}
            />
          </div>
          <div className="col-12 col-sm-6 offset-sm-1 col-md-4 offset-md-0">
            <HumptyWord
              word={this.state.word}
              correctGuessedLetters={this.state.correctguessedletters}
            />
          </div>
          <div className="col-12 col-sm-6 offset-sm-1 col-md-4 offset-md-0 txtSize-4">
            {gameStateShowing}
          </div>
        </div>
      </div>
    );
  }
}

export default HumptyDumptyComponent;
