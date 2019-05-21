import React, { Component } from "react";
import ChartFlow from "./ChartFlow";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-box">

        <h4 className="header-title mb-4">Account Overview</h4>

        <div className="row">

          <ChartFlow title="Daily Sales" value="35,715" percentage="37" color="#0acf97"/>

          <ChartFlow title="Sales Analytics" value="97,511"  percentage="92"  color="#f9bc0b"/>

          <ChartFlow title="Statistics" value="965"  percentage="14"  color="#f1556c"/>

          <ChartFlow title="Total Revenu" value="32,540"  percentage="60"  color="#2d7bf4"/>

        </div>

      </div>
    );
  }
}
