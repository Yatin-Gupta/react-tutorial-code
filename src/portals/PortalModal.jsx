import React from "react";
import ReactDOM from "react-dom";

import "./Portals.css";

const PortalModal = () => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        margin: "auto",
        width: "300px",
        height: "100px",
        padding: "2%",
        border: "1px solid rgba(112,112,112)",
        boxShadow: "1px 1px 3px rgba(0,0,0,0.3)",
        zIndex: "999"
      }}
    >
      <div
        className="content"
        style={{ borderBottom: "2px solid #443737", borderBottomRadius: "2px" }}
      >
        <p>This is the secret modal message</p>
      </div>
      <button title="Close Me">Close</button>
    </div>,
    document.getElementById("modal-root")
  );
};

export default PortalModal;
