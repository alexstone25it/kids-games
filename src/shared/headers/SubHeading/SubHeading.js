import React from "react";

function SubHeading(props) {
  return (
    <div className="row justify-content-center text-center">
      <header>
        <h2 className="txtSize-4">{props.children}</h2>
      </header>
    </div>
  );
}

export default SubHeading;
