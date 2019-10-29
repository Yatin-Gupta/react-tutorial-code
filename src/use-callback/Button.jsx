import React from "react";

function Button(props) {
  const { children, clickHandler } = props;
  console.log("Rendering Button - " + children);
  return (
    <div>
      <button onClick={clickHandler}>{children}</button>
    </div>
  );
}

export default React.memo(Button);
