import React, { Component } from "react";
import SubItem from "./SubItem";

export default class Item extends Component {
  render() {
    return (
      <li>
        <a href="#">
          <i class={this.props.icon} /> <span> {this.props.title} </span>
          {this.props.arrow === true && <span class="menu-arrow" />}
        </a>
        {this.props.arrow === true && <SubItem menuItems={this.props.menu} />}
      </li>
    );
  }
}
