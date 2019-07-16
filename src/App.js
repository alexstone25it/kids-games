import React from "react";
import "./App.css";

import Navbar from "./navbar/Navbar";
import PrimaryHeader from "./headers/PrimaryHeader";
import GamesComponent from "./GamesComponent";

function App() {
  return (
    <div className="App container-fluid p-0">
      <PrimaryHeader />
      <Navbar />
      <GamesComponent />
    </div>
  );
}

export default App;
