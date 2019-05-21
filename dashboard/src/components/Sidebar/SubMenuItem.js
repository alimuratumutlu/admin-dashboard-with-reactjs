import React, { Component } from "react";

export default class SubMenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const Items = this.props.menuItems.map(item => (
        <li>
          <a href={item.link}>{item.text}</a>
        </li>
      ));

    return (
      <ul class="nav-second-level" aria-expanded="false">
        {Items}
      </ul>
    );
  }
}
