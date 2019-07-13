import React from "react";

const humptyDumptyOnWallImg = {
  src: require("../../assets/images/humpty.jpg"),
  alt: "Humpty Dumpty sitting on a wall."
};

function HumptyImage() {
  return (
    <div className="col-12 col-sm-4">
      <img src={humptyDumptyOnWallImg.src} alt={humptyDumptyOnWallImg.alt} />
    </div>
  );
}

export default HumptyImage;
