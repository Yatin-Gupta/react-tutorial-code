import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { store } from "./AppConfig";
import rootReducer from "./reducer";
import thunk from "redux-thunk";

const logMiddleware = store => next => action => {
  const result = next(action);
  console.log(result);
  return { ...result };
};

const reduxStore = createStore(
  rootReducer,
  store,
  applyMiddleware(logMiddleware, thunk)
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
