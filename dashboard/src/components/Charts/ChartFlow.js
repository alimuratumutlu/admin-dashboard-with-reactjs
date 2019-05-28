import React, { Component } from "./node_modules/react";
import axios from 'axios';

export default class ChartFlow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-6  col-xl-3">
        <div className="card-box mb-0 widget-chart-two">
          <div className="float-right">
            <input
              data-plugin="knob"
              data-width="80"
              data-height="80"
              data-linecap="round"
              data-fgColor={this.props.color}
              value={this.props.percentage}
              data-skin="tron"
              data-angle-offset="180"
              data-readOnly="true"
              data-thickness=".1"
            />
          </div>
          <div className="widget-chart-two-content">
            <p className="text-muted mb-0 mt-2">{this.props.title}s</p>
            <h3 className="">${this.props.value}</h3>
          </div>
        </div>
      </div>
    );
  }
}
