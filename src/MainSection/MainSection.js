import React, { Component } from 'react';
import './MainSection.scss'
import List from '../Components/List.js'

class MainSection extends Component {
  render () {
    return (
      <div className="main_section">
        <List></List>
      </div>
    )
  }
}

export default MainSection
