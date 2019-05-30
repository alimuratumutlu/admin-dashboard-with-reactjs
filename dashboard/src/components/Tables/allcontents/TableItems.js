import React, { Component } from "react";

export default class TableItems extends Component {
  render() {
    return (
      <tr>
        <td>
          <h5 className="m-0 font-weight-normal">{this.props.title}</h5>
        </td>

        <td>
          <i className="mdi text-primary" /> {this.props.date}
        </td>

        <td><button type="button" class="btn btn-dark btn-rounded waves-light waves-effect">{this.props.views}</button></td>

        <td>{this.props.category}</td>

        <td>{this.props.author}</td>

        <td><button type="button" class="btn btn-success btn-rounded waves-light waves-effect">{this.props.comments} </button></td>

        <td>   
            <button type="button" class="btn btn-pink waves-effect waves-light"> <span>Sil</span> <i class="fa fa-trash-o" /> </button>
            {" "}{" "} 
            <button type="button" class="btn btn-info waves-effect waves-light"> <i className="fa fa-pencil-square-o" /> <span>Düzenle</span> </button>
        </td>
      </tr>
    );
  }
}
