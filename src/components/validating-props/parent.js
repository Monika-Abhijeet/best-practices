import React from "react";
import Child from "./child";
import propTypes from "prop-types";

function Parent(props) {
  return (
    <div>
      <Child
        name="Monika"
        age={20}
        price={20}
        fruits={[34, "apple", "jackfruit"]}
      />
    </div>
  );
}

export default Parent;

Child.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  email: propTypes.string,
  price: propTypes.oneOfType([propTypes.number, propTypes.string]),
  fruits: propTypes.arrayOf(propTypes.string),
};
