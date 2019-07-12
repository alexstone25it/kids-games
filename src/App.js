import React from "react";
import "./App.css";

import PrimaryHeader from "./headers/PrimaryHeader";
import GameGallery from "./gameGallery/GameGallery";

function App() {
  return (
    <div className="App container-fluid p-0">
      <PrimaryHeader />
      <GameGallery />
    </div>
  );
}

export default App;
