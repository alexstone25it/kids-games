import React, { Fragment } from "react";

function Animal(props) {
  return (
    <Fragment>
      <img src={props.animal.src} alt={props.animal.alt} />
    </Fragment>
  );
}

export default Animal;
