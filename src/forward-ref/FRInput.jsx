import React from "react";

const FRInput = React.forwardRef((props, inputRef) => {
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
});

export default FRInput;
