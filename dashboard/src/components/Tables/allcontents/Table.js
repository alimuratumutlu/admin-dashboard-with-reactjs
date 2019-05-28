import React, { Component } from "./node_modules/react";
import axios from './node_modules/axios';

import TableItems from "./TableItems";

export default class Table extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    content: [],
  }

  componentDidMount = async () => {
    const response = await axios.get('http://localhost:3004/content')
    this.setState({content:response.data})
  }

  render() {
    const icerikListesi = this.state.content.map(content => (
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
            <h4 className="header-title mb-3">İçerik Yönetimi</h4>

            <div className="table-responsive">
              <table className="table table-hover table-centered m-0">
                <thead>
                  <tr>
                    <th>Başlık</th>
                    <th>Tarih</th>
                    <th>Okunma</th>
                    <th>Kategori</th>
                    <th>Yazar</th>
                    <th>Yorumlar</th>
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