import React, { Component } from "react";
import SubMenuItem from "./SubMenuItem";
import Badge from "./Badge";

export default class MenuItem extends Component {
  render() {
    return (
      <li>
        <a href="javascript: void(0);">
          <i class={this.props.icon} /> <span> {this.props.title} </span>
          {this.props.notification == true && <Badge badgeType={this.props.badgeType} badgeCount={this.props.badgeCount}/>}
          {this.props.arrow == true && <span class="menu-arrow"></span> }

        </a>
            {this.props.arrow == true && <SubMenuItem menuItems={this.props.menu} /> }
      </li>
    );
  }
}
