import React from "react";
import "./Animal.css";

function Animal(props) {
  return (
    <div className="row col-8 col-md-4 offset-2 offset-md-4 Animal">
      <img src={props.animal.src} alt={props.animal.alt} />
    </div>
  );
}

export default Animal;
