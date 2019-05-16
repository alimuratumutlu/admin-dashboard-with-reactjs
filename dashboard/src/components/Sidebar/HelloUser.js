import React, { Component } from "react";

export default class HelloUser extends Component {
  render() {
    return (
      <div className="user-box">
        <div className="user-img">
          <img
            src="./images/users/avatar-1.jpg"
            alt="user-img"
            title="Mat Helme"
            className="rounded-circle img-fluid"
          />
        </div>
        <h5>
          <a href="#">Maxine Kennedy</a>{" "}
        </h5>
        <p className="text-muted">Admin Head</p>
      </div>
    );
  }
}
