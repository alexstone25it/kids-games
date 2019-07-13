import React, { Component } from "react";

const uuid = require("uuid/v4");

class HumptyButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledletters: []
    };
    this.letterGuessHandler = this.letterGuessHandler.bind(this);
  }
  letterGuessHandler(event) {
    let value = event.target.value;
    let word = new Set(this.props.word);
    if (word.has(value)) {
      this.props.letterGuess(value);
    }
    this.setState(prevState => ({
      ...prevState,
      disabledletters: [...prevState.disabledletters, value]
    }));
  }
  render() {
    const alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    const alphabetArray = alphabet.split(",");
    const buttons = alphabetArray.map(item => (
      <span className="txtSize-2" key={uuid()}>
        <button
          className="btn"
          disabled={this.state.disabledletters.indexOf(item) !== -1}
          value={item}
        >
          {item}
        </button>
      </span>
    ));
    return (
      <div className="col-12 col-sm-6">
        <div
          className="btn-group-lg text-center"
          role="group"
          onClick={this.letterGuessHandler}
        >
          {buttons}
        </div>
      </div>
    );
  }
}

export default HumptyButtons;
