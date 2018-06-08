import React, { Component } from 'react';
import './List.scss'

class List extends Component {
  render () {
    return (
      <div className="list">
        <div className="add_task"></div>
        <div className="preview"></div>
        <div className="edit_section"></div>
      </div>
    )
  }
}

export default List
