import React, { Component } from "react";

import "./HumptyButtons.css";
const uuid = require("uuid/v4");

class HumptyButtons extends Component {
  constructor(props) {
    super(props);
    this.letterGuessHandler = this.letterGuessHandler.bind(this);
  }
  letterGuessHandler(event) {
    let value = event.target.value;
    this.props.letterGuess(value);
  }
  render() {
    const alphabet = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
    const alphabetArray = alphabet.split(",");
    const buttons = alphabetArray.map(item => (
      <button className="btn HumptyButtons-button" key={uuid()} value={item}>
        {item}
      </button>
    ));
    return (
      <div className="container HumptyButtons">
        <div className="row justify-content-center">
          <div
            className="col-12 col-sm-8 btn-group-lg"
            role="group"
            onClick={this.letterGuessHandler}
          >
            {buttons}
          </div>
        </div>
      </div>
    );
  }
}

export default HumptyButtons;
