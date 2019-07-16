import React from "react";

function HumptyWord(props) {
  const guesses = props.correctGuessedLetters;
  const wordArray = [...props.word.name];
  const showingLetters = wordArray.map(item =>
    guesses.indexOf(item) !== -1 ? item : "_"
  );

  return (
    <div>
      {props.word.colour === undefined ? (
        <img src={props.word.src} alt={props.word.alt} />
      ) : (
        <div
          style={{
            minHeight: "30rem",
            backgroundColor: `${props.word.name}`,
            border: "1px solid black"
          }}
        />
      )}
      <div
        className="mt-3"
        style={{ fontSize: "3.5rem", letterSpacing: ".5rem" }}
      >
        {showingLetters}
      </div>
    </div>
  );
}

export default HumptyWord;
