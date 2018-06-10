import React, { Component } from 'react';
import './MainSection.scss'
import Task from '../Components/Task.js'
import { data } from '../data.js'

class TaskList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
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
    super(props)  // should have props.focus
    this.state = {
      rawData: data,
      dataTask: data.map((task, idx) =>{
        // console.log('idx is', idx)
        // console.log('task is', task)
        return <Task key={idx} idx={idx} task={task} updateHandler={this.updateHandler.bind(this)}/>
      })
    }
    // Ref: https://jsfiddle.net/ybeaz/njLx57u4/
    let updateHandler = this.updateHandler.bind(this)
  }

  updateHandler(idx, data) {

    // For debug
    // Issue #1, can't update the task
    // Issue #2, While add task, time is wrong

    console.log('updateHandler in MainSection ' + idx, data )
    console.log('this is', this)
    let newData = this.state.rawData
    if (idx === undefined) {
      newData.push(data)
    } else {
      newData[idx] = data
    }
    this.setState({
      rawData: newData,
      dataTask: newData.map((task, idx) =>{
        return <Task key={idx} idx={idx} task={task} updateHandler={this.updateHandler.bind(this)}/>
      })
    })
  }


  render () {
    let updateHandler = this.updateHandler
    return (
      <div className="main_section">
        <Task key="-1" isAdd="true" updateHandler={updateHandler.bind(this)} task={{}} />
        {this.state.dataTask}
      </div>
    )
  }
}

export default MainSection
