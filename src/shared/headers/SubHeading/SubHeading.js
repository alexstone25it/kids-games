import React from "react";

function SubHeading(props) {
  return (
    <div className="row justify-content-center">
      <header className="col-12 text-center">
        <h2 className="txtSize-4">{props.children}</h2>
      </header>
    </div>
  );
}

export default SubHeading;
