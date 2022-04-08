import React from "react";
import propTypes, { number } from "prop-types";

function Child(props) {
  return (
    <div>
      <h2> My name is {props.name}</h2>
      <h2> My age is {props.age}</h2>

      <h2> My email is {props.email}</h2>
      <h2> price of sugar is {props.price}</h2>
      <h2>{props.fruits.map((fruit) => fruit)}</h2>
    </div>
  );
}

export default Child;
