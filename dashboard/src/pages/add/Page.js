import React, { Component } from "react";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

export default class AddPage extends Component {
  render() {
    return (
      <div className="content-page">
        <Header />
        <div className="content">
          <div className="container-fluid">
            <div class="card-box">
              <h4>
                <input
                  type="text"
                  id="simpleinput"
                  class="form-control"
                  placeholder="Yazı Başlığını Giriniz..."
                />
              </h4>
              <form method="post">
                <textarea id="elm1" name="area" />
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
