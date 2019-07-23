import React from "react";

function DiceRollModalBody(props) {
  let sum;
  if (props.mathSymbol === "+") {
    sum = (
      <div>
        <div className="row">
          <div className="col">
            <p>{props.bigDie}</p>
          </div>
          <div className="col">
            <p>{props.mathSymbol}</p>
          </div>
          <div className="col">
            <p>{props.littleDie}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">{"*".repeat(props.bigDie)}</div>
          <div className="col">{"*".repeat(props.littleDie)}</div>
        </div>
        <div className="row">
          <p>Try to count all the yellow stars you see</p>
        </div>
      </div>
    );
  } else {
    sum = (
      <div>
        <div className="row">
          <div className="col">
            <p>{props.bigDie}</p>
          </div>
          <div className="col">
            <p>{props.mathSymbol}</p>
          </div>
          <div className="col">
            <p>{props.littleDie}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {"*".repeat(props.bigDie - props.littleDie)}
          </div>
          <div className="col">{"^".repeat(props.littleDie)}</div>
        </div>
        <div className="row">
          <p>Try to count all the yellow stars you see</p>
        </div>
      </div>
    );
  }
  return <div className="container-fluid">{sum}</div>;
}

export default DiceRollModalBody;
