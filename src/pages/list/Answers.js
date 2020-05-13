import React, { Component } from "react";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

import Table from "../../components/tables/answers/Table";

export default class ListAnswers extends Component {
  render() {
    return (
      <div className="content-page">
        <Header />

        <div className="content">
          <div className="container-fluid">
            <Table />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
