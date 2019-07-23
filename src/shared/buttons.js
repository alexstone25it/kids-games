import React from "react";
import { Link } from "react-router-dom";
import "./buttons.css";

export const RegButton = props => (
  <button
    className="btn btn-lg btn-outline-primary"
    type="button"
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export const DiffGameButton = () => (
  <div className="DiffGameButton container-fluid mt-3 mb-3">
    <div className="row text-center">
      <Link to="/" className="mx-auto">
        Play a different game?
      </Link>
    </div>
  </div>
);
