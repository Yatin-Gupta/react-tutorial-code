import React from "react";

// But optional value will only be shown when no provider is provided. Only consumer is used.
//If provider is also used, but no value is specified on it, than we cannot expect it to show default value. It will show nothing or undefined in that case.
const UserContext = React.createContext("Optional Default Value");

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
