import React, { Component } from 'react'

export default class Notification extends Component {
    render() {
        return (
            <a href="javascript:void(0);" className="dropdown-item notify-item" style={{height:72}}>
              <div className={"notify-icon bg-"+ this.props.bg}>
                <i className={this.props.icon} />
              </div>
              <p className="notify-details">
                {this.props.who}{" "}{this.props.did}{" "}{this.props.what}{" "}on{" "}{this.props.where}Caleb Flakelar commented on Admin
                <small className="text-muted">{this.props.when}</small>
              </p>
            </a>
        )
    }
}