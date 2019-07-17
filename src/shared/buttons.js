import React from "react";

export const RegButton = props => (
  <button
    className="btn btn-lg btn-outline-primary"
    type="button"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);
