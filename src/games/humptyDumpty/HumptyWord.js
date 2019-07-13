import React from "react";

function HumptyWord(props) {
  const guesses = props.correctGuessedLetters;
  const wordArray = [...props.word];
  const showingLetters = wordArray.map(item =>
    guesses.indexOf(item) !== -1 ? item : "_"
  );

  return (
    <div className="col-12 col-sm-2 text-center txtSize-4">
      {showingLetters}
    </div>
  );
}

export default HumptyWord;
