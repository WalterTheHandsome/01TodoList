import React, { Component } from 'react';
import './List.scss'
const STATE_NEW_TASK       = "new_task"
const STATE_ADD_NEW_TASK   = "add_new_task"
const STATE_TASK           = "task_with_data"
const STATE_EDIT_TASK      = "edit_task"

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "add_chk" + props.idx,
      checked: false,
      status: STATE_NEW_TASK,
      important: false,
      title: props.title,
      comment: props.comment
    }

    this.handlCheckBoxClicked = () => {
      console.log('click')
      this.setState({
        checked: !this.state.checked
      })
    }

    this.handleClickImportant = () => {
      this.setState({
        important: !this.state.important
      })
    }

    this.addShow = () => {
      if (this.state.status === STATE_NEW_TASK) {
        this.setState({
          status: STATE_ADD_NEW_TASK
        })
      }
    }
  } // end of constructor

  render () {
    return (
      <div className={'task ' + this.state.status}>
        <div className="add_task status" onClick={this.addShow}></div>
        <div className="preview_task">
          <div className="fa_checkbox">
            <input
             type="checkbox"
             id={this.state.id}
             />
             <label htmlFor={this.state.id} onClick={this.handlCheckBoxClicked}></label>
          </div>
          <span>{this.state.title}</span>
        </div>
        <div className="edit_section">

        </div>
      </div>
    )
  }
}

export default List
