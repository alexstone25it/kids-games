import React, { Fragment } from "react";

function Humptywinner(props) {
  return (
    <Fragment>
      <p className="txtSize-3">You guessed {props.word.name}!</p>
      <p className="txtSize-3">You did it!</p>
    </Fragment>
  );
}

export default Humptywinner;
