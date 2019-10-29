import React from "react";

function Count(props) {
  const { name, value } = props;
  console.log("Rendering Count -" + name);
  return (
    <div>
      <p>
        {name} - {value}
      </p>
    </div>
  );
}

export default React.memo(Count);
