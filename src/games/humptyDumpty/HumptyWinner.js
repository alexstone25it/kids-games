import React, { Component } from "react";

class Humptywinner extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div>
        <p className="txtSize-3">You guessed {this.props.word.name}!</p>
        <p className="txtSize-3">You did it!</p>
      </div>
    );
  }
}

export default Humptywinner;
