import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function ShopDetails() {
  const { id } = useParams();
  const counter = useSelector((state) => {
    console.log(state.counterReducer);
    return state.counterReducer;
  });
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    // const data = await fetch(
    //   `https://jsonplaceholder.typicode.com/users/${id}`
    // );
    // const user = await data.json();
    // setUser(user);
    // console.log(user);

    const data = axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  };
  return (
    <div>
      {" "}
      This is details of user {user.name}
      <p>this is counter details {counter}</p>
    </div>
  );
}

export default ShopDetails;
