import React, { Component } from "react";

export default class UserMenu extends Component {
  render() {
    return (
      <li className="dropdown notification-list">
        <a
          className="nav-link dropdown-toggle nav-user"
          data-toggle="dropdown"
          href="#"
          role="button"
          aria-haspopup="false"
          aria-expanded="false"
        >
          <img
            src="../images/users/avatar-1.jpg"
            alt="user"
            className="rounded-circle"
          />{" "}
          <span className="ml-1">
            Murat U.<i className="mdi mdi-chevron-down" />{" "}
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated profile-dropdown">
          <div className="dropdown-item noti-title">
            <h6 className="text-overflow m-0">Selamlar !</h6>
          </div>

          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <i className="fi-head" /> <span>Profilim</span>
          </a>

          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <i className="fi-cog" /> <span>Ayarlar</span>
          </a>

          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <i className="fi-help" /> <span>Yardım</span>
          </a>

          <a href="javascript:void(0);" className="dropdown-item notify-item">
            <i className="fi-power" /> <span>Çıkış</span>
          </a>
        </div>
      </li>
    );
  }
}
