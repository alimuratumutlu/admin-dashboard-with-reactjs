import React, { Component } from 'react'

export default class Logo extends Component {
  render() {
    return (
        <div className="topbar-left">
        <a href="index.html" className="logo">
            <span>
                <img src="./images/logo.png" alt="" height="22"/>
            </span>
            <i>
                <img src="./images/logo_sm.png" alt="" height="28"/>
            </i>
        </a>
    </div>
    )
  }
}
