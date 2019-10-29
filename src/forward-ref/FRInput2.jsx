import React from "react";

const FRInput2 = props => {
  const { setRef } = props;
  return (
    <div>
      <input
        type="email"
        ref={ref => {
          setRef("emailRef", ref);
        }}
      />
      <textarea
        ref={ref => {
          setRef("addrRef", ref);
        }}
      ></textarea>
    </div>
  );
};

export default FRInput2;
