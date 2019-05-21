import React, { Component } from "react";
import SubMenuItem from "./SubMenuItem";

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li>
        <a href="javascript: void(0);">
          <i class={this.props.icon} /> <span> {this.props.title} </span>
          {this.props.arrow == "true" && <span class="menu-arrow" />}
        </a>
            {this.props.arrow == "true" && <SubMenuItem menuItems={this.props.menu} /> }
      </li>
    );
  }
}
