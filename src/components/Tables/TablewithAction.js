import React, { Component } from "react";

export default class TablewithAction extends Component {
  render() {
    return (
      <div className="card-box">
        <h4 className="header-title mb-3">Wallet Balances</h4>

        <div className="table-responsive">
          <table className="table table-hover table-centered m-0">
            <thead>
              <tr>
                <th>Profile</th>
                <th>Name</th>
                <th>Currency</th>
                <th>Balance</th>
                <th>Reserved in orders</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    src="./images/users/avatar-2.jpg"
                    alt="contact-img"
                    title="contact-img"
                    className="rounded-circle thumb-sm"
                  />
                </td>

                <td>
                  <h5 className="m-0 font-weight-normal">Tomaslau</h5>
                  <p className="mb-0 text-muted">
                    <small>Member Since 2017</small>
                  </p>
                </td>

                <td>
                  <i className="mdi mdi-currency-btc text-primary" /> BTC
                </td>

                <td>0.00816117 BTC</td>

                <td>0.00097036 BTC</td>

                <td>
                  <a href="#" className="btn btn-sm btn-custom">
                    <i className="mdi mdi-plus" />
                  </a>
                  <a href="#" className="btn btn-sm btn-danger">
                    <i className="mdi mdi-minus" />
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <img
                    src="./images/users/avatar-3.jpg"
                    alt="contact-img"
                    title="contact-img"
                    className="rounded-circle thumb-sm"
                  />
                </td>

                <td>
                  <h5 className="m-0 font-weight-normal">Erwin E. Brown</h5>
                  <p className="mb-0 text-muted">
                    <small>Member Since 2017</small>
                  </p>
                </td>

                <td>
                  <i className="mdi mdi-currency-eth text-primary" /> ETH
                </td>

                <td>3.16117008 ETH</td>

                <td>1.70360009 ETH</td>

                <td>
                  <a href="#" className="btn btn-sm btn-custom">
                    <i className="mdi mdi-plus" />
                  </a>
                  <a href="#" className="btn btn-sm btn-danger">
                    <i className="mdi mdi-minus" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="./images/users/avatar-4.jpg"
                    alt="contact-img"
                    title="contact-img"
                    className="rounded-circle thumb-sm"
                  />
                </td>

                <td>
                  <h5 className="m-0 font-weight-normal">Margeret V. Ligon</h5>
                  <p className="mb-0 text-muted">
                    <small>Member Since 2017</small>
                  </p>
                </td>

                <td>
                  <i className="mdi mdi-currency-eur text-primary" /> EUR
                </td>

                <td>25.08 EUR</td>

                <td>12.58 EUR</td>

                <td>
                  <a href="#" className="btn btn-sm btn-custom">
                    <i className="mdi mdi-plus" />
                  </a>
                  <a href="#" className="btn btn-sm btn-danger">
                    <i className="mdi mdi-minus" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="./images/users/avatar-5.jpg"
                    alt="contact-img"
                    title="contact-img"
                    className="rounded-circle thumb-sm"
                  />
                </td>

                <td>
                  <h5 className="m-0 font-weight-normal">Jose D. Delacruz</h5>
                  <p className="mb-0 text-muted">
                    <small>Member Since 2017</small>
                  </p>
                </td>

                <td>
                  <i className="mdi mdi-currency-cny text-primary" /> CNY
                </td>

                <td>82.00 CNY</td>

                <td>30.83 CNY</td>

                <td>
                  <a href="#" className="btn btn-sm btn-custom">
                    <i className="mdi mdi-plus" />
                  </a>
                  <a href="#" className="btn btn-sm btn-danger">
                    <i className="mdi mdi-minus" />
                  </a>
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    src="./images/users/avatar-6.jpg"
                    alt="contact-img"
                    title="contact-img"
                    className="rounded-circle thumb-sm"
                  />
                </td>

                <td>
                  <h5 className="m-0 font-weight-normal">Luke J. Sain</h5>
                  <p className="mb-0 text-muted">
                    <small>Member Since 2017</small>
                  </p>
                </td>

                <td>
                  <i className="mdi mdi-currency-btc text-primary" /> BTC
                </td>

                <td>2.00816117 BTC</td>

                <td>1.00097036 BTC</td>

                <td>
                  <a href="#" className="btn btn-sm btn-custom">
                    <i className="mdi mdi-plus" />
                  </a>
                  <a href="#" className="btn btn-sm btn-danger">
                    <i className="mdi mdi-minus" />
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
