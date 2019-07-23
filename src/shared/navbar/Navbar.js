import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
    this.navClickedHandler = this.navClickedHandler.bind(this);
  }
  navClickedHandler(event) {
    this.setState(prevState => ({
      navOpen: !prevState.navOpen
    }));
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark text-center mt-n2">
        <button
          className="navbar-toggler ml-auto"
          type="button"
          onClick={this.navClickedHandler}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          style={
            this.state.navOpen ? { display: "block" } : { display: "none" }
          }
        >
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                Game Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/animalcount" className="nav-link">
                Animal Counting
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/diceroll" className="nav-link">
                Dice Rolling
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/humptydumpty" className="nav-link">
                Humpty Dumpty Words
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
