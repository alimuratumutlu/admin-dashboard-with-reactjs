import React, { Component } from "react";
import axios from "axios";
import Notification from "./Notification";
import {connect} from 'react-redux'

import * as ACTIONS from '../../store/actions/actions'

class NotificationBar extends Component {
  constructor(props) {
    super(props);
  };

  state = {
    notifications: [],
  };

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3004/notifications");
    this.setState({ notifications: response.data });
    this.setState({ notCount: response.data.length });
  };

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
            {this.props.notCount}
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-right dropdown-menu-animated dropdown-lg">
          <div className="dropdown-item noti-title">
            <h5 className="m-0">
              <span className="float-right">
                <a href="#" onClick={() => this.props.action_creator1()} className="text-dark">
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

function mapStateToProps(state) {
  return {
    notCount: state.notification_reducer.notCount
  }

}

function mapDispatchToProps(dispatch) {
  return {
    action_creator1: () => dispatch(ACTIONS.okunduyap())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationBar)