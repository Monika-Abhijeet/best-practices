import axios from "axios";
import React, { Component } from "react";

class HttpRequests extends Component {
  componentDidMount() {
    console.log("inside component did mount");
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response));

    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });

    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ title: "React POST Request Example" }),
    // };
    // fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }
  render() {
    return <div></div>;
  }
}

export default HttpRequests;
