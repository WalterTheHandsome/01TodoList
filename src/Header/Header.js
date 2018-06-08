import React, { Component } from 'react';
import './Header.scss'

class Header extends Component {
  render () {
    return (
      <header className="container-fluid header">
        <div className="header_inner">
          <button className="col-4 title">
          My Tasks
          </button>
          <button className="col-4 title">
          In Progress
          </button>
          <button className="col-4 title">
          Completed
          </button>
        </div>
      </header>
    )
  }
}

export default Header
