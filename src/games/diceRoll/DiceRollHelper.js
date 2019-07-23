import React, { Component, Fragment } from "react";
import { RegButton } from "../../shared/buttons";
import HelperModal from "../../shared/components/HelperModal";
import DiceRollModalBody from "./DiceRollModalBody";

class DiceRollHelper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helpNeeded: false
    };
    this.helpButtonToggleHandler = this.helpButtonToggleHandler.bind(this);
  }
  helpButtonToggleHandler() {
    this.setState({
      helpNeeded: !this.state.helpNeeded
    });
  }
  render() {
    return (
      <Fragment>
        <RegButton onClick={this.helpButtonToggleHandler}>
          Do you need some help?
        </RegButton>
        {this.state.helpNeeded && (
          <HelperModal helpButtonToggle={this.helpButtonToggleHandler}>
            <DiceRollModalBody
              bigDie={this.props.bigDie}
              littleDie={this.props.littleDie}
              mathSymbol={this.props.mathSymbol}
            />
          </HelperModal>
        )}
      </Fragment>
    );
  }
}

export default DiceRollHelper;
