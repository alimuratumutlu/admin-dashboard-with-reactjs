import React, { Component } from "react";

import Header from "../layout/Header";
import Footer from "../layout/Footer";

import Overview from "../components/charts/Overview";
import Table from "../components/tables/allcontents/Table";

class Home extends Component {
  render() {
    return (
      <div className="content-page">
        <Header />

        <section className="content">
          <div className="container-fluid">
            <Overview />
            <Table />
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}
export default Home;
