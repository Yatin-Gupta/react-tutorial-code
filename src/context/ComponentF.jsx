import React from "react";
import { UserConsumer } from "./UserContext";

function ComponentF() {
  return (
    <UserConsumer>
      {username => {
        console.log(username);
        return <div>ComponentF {username}</div>;
      }}
    </UserConsumer>
  );
}

export default ComponentF;
