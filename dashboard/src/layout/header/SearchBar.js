import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <li className="hide-phone app-search">
            <form>
              <input
                type="text"
                placeholder="İçeriklerde ara..."
                className="form-control"
              />
              <button type="submit">
                <i className="fa fa-search" />
              </button>
            </form>
          </li>
        )
    }
}
