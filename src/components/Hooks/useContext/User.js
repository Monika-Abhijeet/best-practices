import React from "react";
import { useContext } from "react";

import { AppContext } from "./useContext";

function User(props) {
  const { username } = useContext(AppContext);
  return <div>Username is {username}</div>;
}

export default User;
