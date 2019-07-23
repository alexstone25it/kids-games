import React, { Component, Fragment } from "react";
const uuid = require("uuid/v4");

class Counter extends Component {
  constructor(props) {
    super(props);
    this.numberChosenHandler = this.numberChosenHandler.bind(this);
    this.suggestHandler = this.suggestHandler.bind(this);
  }
  numberChosenHandler(event) {
    this.props.numberChosen(Number(event.target.value));
  }
  suggestHandler(props) {
    if (this.props.countGuess < this.props.totalCount) {
      return <p>Thats too low try again!</p>;
    } else {
      return <p>That's too high try again!</p>;
    }
  }
  render() {
    let suggest = this.props.countGuess && this.suggestHandler();

    return (
      <Fragment>
        <div className="row justify-content-center">
          <label>{this.props.counterIntroText}</label>
        </div>
        <div className="btn-toolbar justify-content-center" role="toolbar">
          <div
            className="btn-group"
            role="group"
            onClick={this.numberChosenHandler}
          >
            {Array.from(Array(10)).map((_, index) => (
              <button
                type="button"
                className="btn"
                key={uuid()}
                value={index + 1}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <div className="row justify-content-center">
          <p>{this.props.countGuess}</p>
          {suggest}
        </div>
      </Fragment>
    );
  }
}

export default Counter;
