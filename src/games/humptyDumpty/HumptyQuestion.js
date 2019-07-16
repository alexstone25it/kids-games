import React from "react";

function HumptyQuestion(props) {
  return props.isWinner ? (
    <p>He stayed on!</p>
  ) : props.guessCount < 7 ? (
    <p>Will he stay on or will he fall?</p>
  ) : (
    <p>Oh no! He fell!</p>
  );
}

export default HumptyQuestion;
