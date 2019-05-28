import React, { Component } from "react";

import Header from "../../layout/Header";
import Footer from "../../layout/Footer";

export default class AddPost extends Component {
  componentDidMount() {
  }
  render() {
    return (
      <div className="content-page">
        <Header />

        <div className="content">
          <div className="container-fluid">
            <div class="row">
              <div class="col-sm-12">
                <div class="card-box">
                  <h4 class="header-title m-b-30">
                    <input
                      type="text"
                      id="simpleinput"
                      className="form-control"
                      placeholder="Yazı Başlığı..."
                    />
                  </h4>
                  
                
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
