import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reducer from "./store/reducer";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchIncrement, watchDecrement } from "./sagas/saga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, compose( applyMiddleware(sagaMiddleware), composeEnhancers));

sagaMiddleware.run(watchIncrement);
sagaMiddleware.run(watchDecrement);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
