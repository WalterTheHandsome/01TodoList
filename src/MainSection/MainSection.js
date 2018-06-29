import React, { Component } from 'react'
import './MainSection.scss'
import Task from '../Components/Task.js'
import { data } from '../data.js'
let dataNative = deepClone(data)
function deepClone(from) {
  return JSON.parse(JSON.stringify(from))
}
class TaskList extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <ul>
        <Task key="-1" isAdd="true" updateHandler={this.props.updateHandler} />
        {this.props.data}
      </ul>
    )
  }
  // <Task key="-1" isAdd="true" updateHandler={this.props.updateHandler}/>
}

class MainSection extends Component {
  constructor (props) {
    super(props) // should have props.focus
    this.state = {
      rawData: dataNative,
      dataTask: dataNative.map((task, idx) =>{
        // console.log('idx is', idx)
        // console.log('task is', task)
        return <Task key={idx} idx={idx} task={task} updateHandler={this.updateHandler.bind(this)}/>
      })
    }
    // Ref: https://jsfiddle.net/ybeaz/njLx57u4/
    let updateHandler = this.updateHandler.bind(this)
  }

  updateHandler (idx, data) {

    // For debug
    // Issue #1, can't update the task
    // Issue #2, While add task, time is wrong

    // console.log('updateHandler in MainSection ' + idx, data )
    // console.log('this is', this)
    // console.log('this is', this)
    console.log('receive data in Main', data)
    
    let newData = deepClone(this.state.rawData)
    if (idx === undefined) {
      newData.push(data)
    } else {
      newData[idx] = data
    }
    console.log('final newData', newData)
    this.setState({
      rawData: newData,
      dataTask: newData.map((task, idx) => {
        return <Task key={idx} idx={idx} task={task} updateHandler={this.updateHandler.bind(this)}/>
      })
    })
  }

  render () {
    let updateHandler = this.updateHandler
    console.log('data ins MainSection', this.state.rawData)
    console.log('dataTask in ', this.state.dataTask)
    return (
      <div className="main_section">
        <Task key="-1" isAdd="true" updateHandler={updateHandler.bind(this)} task={{}} />
        {this.state.dataTask}
      </div>
    )
  }
}

export default MainSection
