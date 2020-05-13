import React, { Component } from "react";
import Infobar from "./header/Infobar";
import SearchBar from "./header/SearchBar";
import UserMenu from "./header/UserMenu";
import MessageBar from "./header/MessageBar";
import NotificationBar from "./header/NotificationBar";

export default class Header extends Component {
  render() {
    return (
      <header className="topbar">
        <nav className="navbar-custom">
          <ul className="list-unstyled topbar-right-menu float-right mb-0">
            <SearchBar />

            <NotificationBar />

            <UserMenu />
          </ul>

          <Infobar />
        </nav>
      </header>
    );
  }
}
