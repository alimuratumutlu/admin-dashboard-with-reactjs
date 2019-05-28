import React, { Component } from "react";

export default class MessageBar extends Component {
  render() {
    return (
      <li className="dropdown notification-list">
        <a
          className="nav-link dropdown-toggle arrow-none"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="false"
          aria-expanded="false"
        >
          <i className="fi-speech-bubble noti-icon" />
          <span className="badge badge-custom badge-pill noti-icon-badge">
            6
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
          <div className="dropdown-item noti-title">
            <h5 className="m-0">
              <span className="float-right">
                <a href="" className="text-dark">
                  <small>Clear All</small>
                </a>{" "}
              </span>
              Chat
            </h5>
          </div>

          <div className="slimscroll" style={{ maxHeight: 230 }}>
            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="notify-icon">
                <img
                  src="./images/users/avatar-2.jpg"
                  className="img-fluid rounded-circle"
                  alt=""
                />{" "}
              </div>
              <p className="notify-details">Cristina Pride</p>
              <p className="text-muted font-13 mb-0 user-msg">
                Hi, How are you? What about our next meeting
              </p>
            </a>

            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="notify-icon">
                <img
                  src="./images/users/avatar-3.jpg"
                  className="img-fluid rounded-circle"
                  alt=""
                />{" "}
              </div>
              <p className="notify-details">Sam Garret</p>
              <p className="text-muted font-13 mb-0 user-msg">
                Yeah everything is fine
              </p>
            </a>

            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="notify-icon">
                <img
                  src="./images/users/avatar-4.jpg"
                  className="img-fluid rounded-circle"
                  alt=""
                />{" "}
              </div>
              <p className="notify-details">Karen Robinson</p>
              <p className="text-muted font-13 mb-0 user-msg">
                Wow that's great
              </p>
            </a>

            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="notify-icon">
                <img
                  src="./images/users/avatar-5.jpg"
                  className="img-fluid rounded-circle"
                  alt=""
                />{" "}
              </div>
              <p className="notify-details">Sherry Marshall</p>
              <p className="text-muted font-13 mb-0 user-msg">
                Hi, How are you? What about our next meeting
              </p>
            </a>

            <a href="javascript:void(0);" className="dropdown-item notify-item">
              <div className="notify-icon">
                <img
                  src="./images/users/avatar-6.jpg"
                  className="img-fluid rounded-circle"
                  alt=""
                />{" "}
              </div>
              <p className="notify-details">Shawn Millard</p>
              <p className="text-muted font-13 mb-0 user-msg">
                Yeah everything is fine
              </p>
            </a>
          </div>

          <a
            href="javascript:void(0);"
            className="dropdown-item text-center text-primary notify-item notify-all"
          >
            View all <i className="fi-arrow-right" />
          </a>
        </div>
      </li>
    );
  }
}
