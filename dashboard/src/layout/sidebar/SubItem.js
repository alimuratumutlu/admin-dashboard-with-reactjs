import React, { Component } from "react";
import { Link } from 'react-router-dom';

export default class SubItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Items = this.props.menuItems.map(item => (
      <li>
        <Link to={item.link}>{item.text}</Link>
      </li>
    ));

    return (
      <ul class="nav-second-level" aria-expanded="false">
        {Items}
      </ul>
    );
  }
}
