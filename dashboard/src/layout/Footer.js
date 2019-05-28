import React, { Component } from 'react'

export default class Footer extends Component {
   render() {
    const dt = new Date();
    const year = dt.getFullYear()
    
    return (
        <footer className="footer">
            2018 - {year} © Tekhnelogos. <span className="d-none d-sm-inline-block"> - TEKCMS</span>
        </footer>
    )
  }
}