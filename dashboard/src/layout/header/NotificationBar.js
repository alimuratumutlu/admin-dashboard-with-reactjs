import React, { Component } from "react";
import axios from "axios";
import Notification from "./Notification";

export default class NotificationBar extends Component {
  constructor(props) {
    super(props)
    this.markAsRead = this.markAsRead.bind(this)
  };

  state = {
    notifications: [],
    notCount: 0
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/notifications");
    this.setState({ notifications: response.data });
    this.setState({ notCount: response.data.length });
  };

  markAsRead() {
    this.setState({notCount: 0})
  }

  render() {
    const notifications = this.state.notifications.map(notification => (
      <Notification
        who={notification.who}
        did={notification.did}
        what={notification.what}
        where={notification.where}
        when={notification.when}
        bg={notification.bg}
        icon={notification.icon}
      />
    ));

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
          <i className="fi-bell noti-icon" />
          <span className="badge badge-danger badge-pill noti-icon-badge">
            {this.state.notCount}
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
          <div className="dropdown-item noti-title">
            <h5 className="m-0">
              <span className="float-right">
                <a href="#" onClick={this.markAsRead} className="text-dark">
                  <small>Tümünü Okundu Yap</small>
                </a>
              </span>
              Bildirimler
            </h5>
          </div>

          <div className="slimscroll" style={{ maxHeight: 230 }}>
            {notifications}
          </div>

          <a
            href="javascript:void(0);"
            className="dropdown-item text-center text-primary notify-item notify-all"
          >
            Tümünü Görüntüle <i className="fi-arrow-right" />
          </a>
        </div>
      </li>
    );
  }
}
