import React, { Component } from "react";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

import Table from "../../components/tables/posts/Table";

export default class ListPosts extends Component {
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
