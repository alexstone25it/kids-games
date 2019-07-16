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
    let word = new Set(this.props.word.name);

    if (word.has(value)) {
      this.props.letterGuess(value);
    } else {
      this.props.addGuessCountHandler();
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
      <span className="txtSize-3" key={uuid()}>
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
      <div
        className="btn-group-lg text-center mt-3 mt-md-n3"
        role="group"
        onClick={this.letterGuessHandler}
      >
        {buttons}
      </div>
    );
  }
}

export default HumptyButtons;
