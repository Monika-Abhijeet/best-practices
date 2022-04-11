import React from "react";
import { useDispatch } from "react-redux";
import { increment } from "../../actions";
import { signIn } from "../../actions";

function Home(props) {
  const dispatch = useDispatch();
  return (
    <div>
      this is home page
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(signIn());
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Home;
