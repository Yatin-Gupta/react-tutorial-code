import React, { useState, useCallback } from "react";
import Title from "./Title";
import Button from "./Button";
import Count from "./Count";

function Operation() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1);
  }, [salary]);

  return (
    <div>
      <Title title={"useCallback Hook"} />
      <Count name={"age"} value={age} />
      <Button clickHandler={incrementAge}>Increment Age</Button>
      <Count name={"salary"} value={salary} />
      {/* React.memo not work for callbacks. To handle callbacks we need to useCallback hook */}
      <Button clickHandler={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default Operation;
