import React from "react";

const humptyDumptyOnWallImg = {
  src: require("../../assets/images/humpty.jpg"),
  alt: "Humpty Dumpty sitting on a wall."
};

function HumptyImage() {
  return (
    <div className="row justify-content-center">
      <img src={humptyDumptyOnWallImg.src} alt={humptyDumptyOnWallImg.alt} />
    </div>
  );
}

export default HumptyImage;
