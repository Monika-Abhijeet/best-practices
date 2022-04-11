import React from "react";
import { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";

export const AppContext = createContext(null);

function UseContextTutorial(props) {
  const [username, setUsername] = useState("");
  return (
    <AppContext.provider value={{ username, setUsername }}>
      <div>
        <Login />
        <User />
      </div>
    </AppContext.provider>
  );
}

export default UseContextTutorial;
