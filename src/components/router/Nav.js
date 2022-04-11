import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Nav(props) {
  const counter = useSelector((state) => {
    return state.counterReducer;
  });
  const Nav = {
    minHeight: "10vh",
    backgroundColor: "red",
    display: "flex",
    justifyContent: "space-around",
    color: "white",
  };
  return (
    <div style={Nav}>
      <h3>React App</h3>
      <ul>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/shop">
          <li>Shop</li>
        </Link>
        <li>Count {counter}</li>
      </ul>
    </div>
  );
}

export default Nav;
