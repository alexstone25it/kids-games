import React, { Component } from "react";
const uuid = require("uuid/v4");

class AnimalCounter extends Component {
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
      <div className="container AnimalCounter">
        <div className="row justify-content-center">
          <p>There have been {this.props.dogCount} dogs.</p>
        </div>
        <div className="row justify-content-center">
          <p> There have been {this.props.catCount} cats.</p>
        </div>
        <div className="row justify-content-center">
          <label>How many dogs and cats have you seen?</label>
        </div>
        <div className="btn-toolbar" role="toolbar">
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
      </div>
    );
  }
}

export default AnimalCounter;
