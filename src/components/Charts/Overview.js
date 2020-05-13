import React, { Component } from "react";

export default class Overview extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    statistics: {},
  };

  componentDidMount = async () => {
    const response = await fetch("http://localhost:3004/statistics");
    this.setState({ statistics: response.data });
  };

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div class="row">
            <div class="col-md-6 col-xl-3">
              <div class="card-box tilebox-one">
                <i class="icon-chart float-right text-muted" />
                <h6 class="text-muted text-uppercase mt-0">
                  Bugünkü Ziyaretçiler
                </h6>
                <h2 class="m-b-20" data-plugin="counterup">
                  {this.state.statistics.todaysvisitors}
                </h2>
                <span class="badge badge-custom"> +11% </span>{" "}
                <span class="text-muted">From previous period</span>
              </div>
            </div>

            <div class="col-md-6 col-xl-3">
              <div class="card-box tilebox-one">
                <i class="icon-chart float-right text-muted" />
                <h6 class="text-muted text-uppercase mt-0">
                  Bugünkü Sayfa İzlenimi
                </h6>
                <h2 class="m-b-20">
                  <span data-plugin="counterup">
                    {this.state.statistics.dailyviews}
                  </span>
                </h2>
                <span class="badge badge-danger"> -29% </span>{" "}
                <span class="text-muted">From previous period</span>
              </div>
            </div>

            <div class="col-md-6 col-xl-3">
              <div class="card-box tilebox-one">
                <i class="icon-chart float-right text-muted" />
                <h6 class="text-muted text-uppercase mt-0">
                  Bu Ayki Ziyaretçiler
                </h6>
                <h2 class="m-b-20">
                  <span data-plugin="counterup">
                    {this.state.statistics.thismonthsvisitors}
                  </span>
                </h2>
                <span class="badge badge-custom"> 0% </span>{" "}
                <span class="text-muted">From previous period</span>
              </div>
            </div>

            <div class="col-md-6 col-xl-3">
              <div class="card-box tilebox-one">
                <i class="icon-rocket float-right text-muted" />
                <h6 class="text-muted text-uppercase mt-0">
                  Bu Ayki Sayfa İzlenimi
                </h6>
                <h2 class="m-b-20" data-plugin="counterup">
                  {this.state.statistics.monthlyviews}
                </h2>
                <span class="badge badge-custom"> +89% </span>{" "}
                <span class="text-muted">Last year</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
