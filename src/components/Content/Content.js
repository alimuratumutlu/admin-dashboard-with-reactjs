import React, { Component } from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";
import Overview from "../charts/overview";
import TablewithAction from "../tables/TablewithAction";

export default class Content extends Component {
  render() {
    return (
      <div className="content-page">
        <Topbar />

        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <Overview />
              </div>
            </div>

            <div className="row">
              <div className="col-xl-12">
                <TablewithAction />
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
