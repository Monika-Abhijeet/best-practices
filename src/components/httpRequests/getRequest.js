import React, { Component } from "react";
import axios from "axios";
class GetRequest extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    axios
      .delete("https://jsonplaceholder.typicode.com/usersjj/1")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <ul></ul>
        {this.state.users.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </div>
    );
  }
}

export default GetRequest;
