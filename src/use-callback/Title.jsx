import React from "react";

function Title(props) {
  const { title } = props;
  console.log("Rendering Title - " + title);
  return <div>{title}</div>;
}

export default React.memo(Title);
