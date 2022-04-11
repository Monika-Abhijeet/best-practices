import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";

// let store = createStore(reducer);
//STORE => globalised state

//  ACTION =>function that returns an object
const increment = () => {
  return {
    type: "INCREMENT",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

// REDUCER => describes how action transforms this state to next state

const counter = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
  }
};

let store = createStore(counter);
// display it in console
store.subscribe(() => console.log(store.getState()));

// DIPATCH => dispatch action to reducer
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());

// dispatch action to reducer , reducer checks the action and updates the store

ReactDOM.render(<App />, document.getElementById("root"));
