import React, { Fragment } from "react";

const humptyDumptyOnWallImg = {
  src: require("../../assets/images/humpty.jpg"),
  alt: "Humpty Dumpty sitting on a wall."
};

function HumptyImage() {
  return (
    <Fragment>
      <img src={humptyDumptyOnWallImg.src} alt={humptyDumptyOnWallImg.alt} />
    </Fragment>
  );
}

export default HumptyImage;
