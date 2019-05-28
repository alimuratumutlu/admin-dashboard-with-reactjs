import React, { Component } from "react";

export default class Infobar extends Component {
  render() {
    return (
      <ul className="list-inline menu-left mb-0">
        <li className="float-left">
          <button className="button-menu-mobile open-left disable-btn">
            <i className="dripicons-menu" />
          </button>
        </li>
        <li>
          <div className="page-title-box">
            <h4 className="page-title">Logos Admin </h4>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">Evinize hoşgeldiniz</li>
            </ol>
          </div>
        </li>
      </ul>
    );
  }
}