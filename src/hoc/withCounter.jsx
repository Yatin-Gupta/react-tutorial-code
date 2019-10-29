import React, { useState } from "react";

const withCounter = WrapperComponent => {
  const WithCounter = props => {
    const [counter, setCounter] = useState(0);
    const incrementCounter = () => {
      setCounter(counter + 1);
    };
    return (
      <React.Fragment>
        <WrapperComponent
          counter={counter}
          incrementCounter={incrementCounter}
          {...props} // Very important to include
        />
      </React.Fragment>
    );
  };
  return WithCounter;
};

export default withCounter;
