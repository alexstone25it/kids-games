import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceOne,
  faDiceTwo,
  faDiceThree,
  faDiceFour,
  faDiceFive,
  faDiceSix
} from "@fortawesome/free-solid-svg-icons";

class OneDie extends Component {
  render() {
    let renderedDie;
    switch (this.props.dieNum) {
      case 1:
        renderedDie = <FontAwesomeIcon icon={faDiceOne} />;
        break;
      case 2:
        renderedDie = <FontAwesomeIcon icon={faDiceTwo} />;
        break;
      case 3:
        renderedDie = <FontAwesomeIcon icon={faDiceThree} />;
        break;
      case 4:
        renderedDie = <FontAwesomeIcon icon={faDiceFour} />;
        break;
      case 5:
        renderedDie = <FontAwesomeIcon icon={faDiceFive} />;
        break;
      case 6:
        renderedDie = <FontAwesomeIcon icon={faDiceSix} />;
        break;
      default:
        renderedDie = <FontAwesomeIcon icon={faDiceSix} />;
    }
    return (
      <div className="DiceRollComponent-OneDie-dieWrapper">{renderedDie}</div>
    );
  }
}

export default OneDie;
