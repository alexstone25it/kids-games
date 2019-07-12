import React, { Component } from "react";

import HumptyImage from "./HumptyImage";
import HumptyWord from "./HumptyWord";
import HumptyButtons from "./HumptyButtons";

import { WORDS } from "./data/Words";
import { RandomNum } from "../../sharedFuncs";

class HumptyDumptyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.makeWord()
    };
    this.letterGuess = this.letterGuess.bind(this);
  }
  makeWord() {
    const num = RandomNum(WORDS.length, 0);
    return WORDS[num];
  }
  letterGuess(value) {
    console.log(value);
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
        <HumptyImage />
        <HumptyWord word={this.state.word} />
        <HumptyButtons letterGuess={this.letterGuess} />
      </div>
    );
  }
}

export default HumptyDumptyComponent;
