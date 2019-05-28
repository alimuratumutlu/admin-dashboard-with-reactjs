import React, { Component } from "./node_modules/react";

export default class Badge extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <span class={"badge badge-" + this.props.badgeType + " badge-pill float-right"}>{this.props.badgeCount}</span>;
  }
}