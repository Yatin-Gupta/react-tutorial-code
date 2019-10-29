import React from "react";

function Button(props) {
  const { label } = props;
  return (
    <div>
      <button data-testid="button-testid">Hi {label}</button>
    </div>
  );
}

export default Button;
