import React, { Component } from "react";

class DiceRollComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 1,
      die2: 6,
      isRolling: false
    };
  }
  render() {
    return (
      <div className="container-fluid DiceRollComponent">
        <header className="row">
          <h2>Roll the Dice!</h2>
        </header>
        <div className="row">
          <button className="btn btn-lg btn-outline-primary">
            Let's roll the dice!
          </button>
        </div>
        <div className="row">
          <div className="col">Dice pic 1 here</div>
          <div className="col">Dice pic 2 here</div>
        </div>
        <div className="row">
          <div className="col">Dice pic 1 amount here</div>
          <div className="col">Dice pic 2 amount here</div>
        </div>

        <div className="row">
          <div className="col">
            <h3 className="row">Random add or minus them together</h3>
            <span className="row">die1</span>
            <span className="row">+ -</span>

            <span className="row">die2</span>
            <span className="row">-----</span>
            <span className="row">?</span>
          </div>
        </div>

        <div className="row">Yay or nnooooo!</div>
      </div>
    );
  }
}

export default DiceRollComponent;
