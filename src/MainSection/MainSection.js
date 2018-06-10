import React, { Component } from 'react';
import './MainSection.scss'
import Task from '../Components/Task.js'
import { data } from '../data.js'
console.log(data)
console.log(Array.isArray(data))
let taskItem = data.map((task, idx) =>{
  console.log('idx is', idx)
  console.log('task is', task)
  return <Task key={idx} idx={idx} title={task.title} comment={task.comment} timestamp={task.timestamp} />
})

class MainSection extends Component {
  constructor (props) {
    super(props)
    this.state = {
      focus: props.focus,
      data: data
    }
  }
  render () {
    return (
      <div className="main_section">
        <Task key="-1" isAdd="true"/>
        {taskItem}
      </div>
    )
  }
}

export default MainSection
