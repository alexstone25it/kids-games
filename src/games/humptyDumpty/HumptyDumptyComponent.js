import React, { Component } from "react";

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
      correctguessedletters: [],
      isWinner: true
    };
    this.letterGuess = this.letterGuess.bind(this);
  }
  makeWord() {
    const num = RandomNum(WORDS.length, 0);
    return WORDS[num];
  }
  letterGuess(value) {
    let newWord = new Set(this.state.word).size;
    this.setState(prevState => ({
      ...prevState,
      correctguessedletters: [...prevState.correctguessedletters, value],
      isWinner:
        newWord === prevState.correctguessedletters.length + value.length
          ? true
          : false
    }));
  }
  render() {
    return (
      <div className="container-fluid HumptyDumptyComponent">
        <div className="row justify-content-center">
          <header>
            <h2>Humpty Dumpty on the Wall</h2>
          </header>
        </div>
        <div className="row justify-content-center">
          <p>Will he stay on or will you let him fall?</p>
        </div>
        <div className="row justify-content-center">
          <HumptyImage />
          <HumptyWord
            word={this.state.word}
            correctGuessedLetters={this.state.correctguessedletters}
          />
          {!this.state.isWinner ? (
            <HumptyButtons
              letterGuess={this.letterGuess}
              word={this.state.word}
            />
          ) : (
            <HumptyWinner word={this.state.word} />
          )}
        </div>
      </div>
    );
  }
}

export default HumptyDumptyComponent;
