import { isLabelWithInternallyDisabledControl } from "@testing-library/user-event/dist/utils";
import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
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
        <li>About</li>
        <li>Shop</li>
      </ul>
    </div>
  );
}

export default Nav;
