import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Shop(props) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);
  // const fetchItems = async () => {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   const posts = await data.json();
  //   setPosts(posts);
  // };
  const fetchItems = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      setUsers(res.data);
    });
  };
  return (
    <div>
      This is a shop page
      <ul>
        {users.map((user) => {
          return (
            <Link to={`/shop/${user.id}`}>
              <li key={user.id}>
                {user.id} {user.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Shop;
