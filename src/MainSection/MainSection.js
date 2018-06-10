import React, { Component } from 'react';
import './MainSection.scss'
import List from '../Components/List.js'
import { data } from '../data.js'
console.log(data)
console.log(Array.isArray(data))
// turn data into <List>
let listItem = data.map((list, idx) =>{
  console.log('idx is', idx)
  console.log('list is', list)
  return <List key={idx} idx={idx} title={list.title} comment={list.comment}></List>
})

class MainSection extends Component {
  render () {
    return (
      <div className="main_section">
        {listItem}
      </div>
    )
  }
}

export default MainSection
