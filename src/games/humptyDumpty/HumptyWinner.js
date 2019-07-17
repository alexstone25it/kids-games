import React from "react";

function Humptywinner(props) {
  return (
    <div>
      <p className="txtSize-3">You guessed {props.word.name}!</p>
      <p className="txtSize-3">You did it!</p>
    </div>
  );
}

export default Humptywinner;
