import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Shop(props) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await data.json();
    setPosts(posts);
  };
  return (
    <div>
      This is a shop page
      <ul>
        {posts.map((post) => {
          return (
            <Link to={`/shop/${post.id}`}>
              <li key={post.id}>{post.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Shop;
