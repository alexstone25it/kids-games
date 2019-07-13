import React, { Component } from "react";
import "./Humptywinner.css";

class Humptywinner extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="col-12 col-sm-6 text-center">
        <p className="txtSize-2">You guessed {this.props.word}!</p>
        <p className="txtSize-2">You are the winner!</p>
      </div>
    );
  }
}

export default Humptywinner;
