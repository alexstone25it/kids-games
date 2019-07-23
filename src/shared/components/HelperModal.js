import React from "react";
import { RegButton } from "../buttons";

function HelperModal(props) {
  return (
    <div className="modal" style={{ opacity: "1", display: "block" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <header>
              <h5>Appy the Helper</h5>
            </header>
            <RegButton onClick={props.helpButtonToggle}>
              <span>&times;</span>
            </RegButton>
          </div>
          <div className="modal-body">{props.children}</div>
          <div className="modal-footer" />
        </div>
      </div>
    </div>
  );
}

export default HelperModal;
