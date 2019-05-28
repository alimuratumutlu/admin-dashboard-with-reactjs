import React, { Component } from "react";
import { Link } from "react-router-dom";

class Logo extends Component {
  render() {
    return (
      <div className="topbar-left">
        <Link to="/" className="logo">
          <span>
            <img src="./images/logo.png" alt="" height="22" />
          </span>
          <i>
            <img src="./images/logo_sm.png" alt="" height="28" />
          </i>
        </Link>
      </div>
    );
  }
}
export default Logo;
