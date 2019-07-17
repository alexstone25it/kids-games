import React, { Component } from "react";
import { RegButton } from "../../shared/buttons";

class DiceRollHelper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      help: false
    };
    this.helpButtonHandler = this.helpButtonHandler.bind(this);
  }
  helpButtonHandler() {
    this.setState({
      help: true
    });
  }
  render() {
    let helper;
    if (!this.state.help) {
      helper = (
        <RegButton onClick={this.helpButtonHandler}>
          Do you need some help?
        </RegButton>
      );
    } else if (this.props.mathSymbol === "+") {
      helper = (
        <div>
          {"*".repeat(this.props.die1)} + {"*".repeat(this.props.die2)}
          <p>Count all the stars</p>
        </div>
      );
    } else {
      helper = <div>something better than this</div>;
    }
    return helper;
  }
}

export default DiceRollHelper;
{
  /* make as a modal, change stars to yellow, if to be minus use a timeout and then black out the num of stars??*/
}
