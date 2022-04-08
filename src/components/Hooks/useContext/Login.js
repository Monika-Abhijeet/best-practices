import React, { useContext } from "react";
import { UseContext } from "react";
import { AppContext } from "./useContext";

function Login(props) {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} />
    </div>
  );
}

export default Login;
