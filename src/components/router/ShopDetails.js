import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ShopDetails() {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetchItem();
  }, []);
  const fetchItem = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const post = await data.json();
    setPost(post);
    console.log(post);
  };
  return <div> This is details of shop {post.title}</div>;
}

export default ShopDetails;
