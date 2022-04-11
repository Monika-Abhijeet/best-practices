import React from "react";
import { useSelector } from "react-redux";

function About(props) {
  const isLogged = useSelector((state) => {
    return state.loggedReducer;
  });
  return <div>This is about page {isLogged}</div>;
}

export default About;
