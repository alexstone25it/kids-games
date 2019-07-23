import React, { Component } from "react";
import "./PrimaryHeader.css";

class PrimaryHeader extends Component {
  render() {
    return (
      <div className="PrimaryHeader container-fluid bg-purple">
        <header>
          <h1 className="row align-items-center justify-content-left justify-content-md-center">
            <span className="blue">K</span>
            <span className="pink">i</span>
            <span className="green">d</span>
            <span className="yellow">s</span>
            <span className="red">G</span>
            <span className="blue">a</span>
            <span className="pink">m</span>
            <span className="red">e</span>
            <span className="green">s</span>
          </h1>
        </header>
      </div>
    );
  }
}

export default PrimaryHeader;
