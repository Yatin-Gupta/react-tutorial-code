import React from "react";
import ComponentE from "./ComponentE";

import { UserProvider } from "./UserContext";

function ComponentC() {
  return (
    <div>
      {/* only value attribute can come */}
      <UserProvider value={"Yatin"}>
        <ComponentE />
      </UserProvider>
    </div>
  );
}

export default ComponentC;
