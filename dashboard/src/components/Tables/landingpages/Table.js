import React, { Component } from "react";
import axios from 'axios';

import TableItems from "./TableItems";

export default class Table extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    landingpage: [],
  }

  componentDidMount = async () => {
    const response = await axios.get('http://localhost:3004/landingpages')
    this.setState({landingpage:response.data})
  }

  render() {
    const icerikListesi = this.state.landingpage.map(content => (
      <TableItems
        title={content.title}
        date={content.date}
        views={content.views}
        author={content.author}
        comments={content.comments}
        category={content.category}
      />
    ));

    return (
      <div className="row">
        <div className="col-xl-12">
          <div className="card-box">
            <h4 className="header-title mb-3">Blog İçerikleri</h4>

            <div className="table-responsive">
              <table className="table table-hover table-centered m-0">
                <thead>
                  <tr>
                    <th>Başlık</th>
                    <th>Tarih</th>
                    <th>Ziyaret</th>
                    <th>Site Adı</th>
                    <th>Oluşturan</th>
                    <th>Lead</th>
                    <th>Yönetim</th>
                  </tr>
                </thead>
                <tbody>{icerikListesi}</tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}