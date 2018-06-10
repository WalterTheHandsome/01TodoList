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
      status: props.isAdd? STATE_NEW_TASK : STATE_TASK,
      important: false,
      title: props.title,
      comment: props.comment,
      isAdd: props.isAdd
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

    this.showEdit = () => {
      if (this.state.status === STATE_TASK) {
        this.setState({
          status: STATE_EDIT_TASK
        })
      }
    }
  } // end of constructor

  render () {
    if (this.state.isAdd) {
      return(
        <div className={'task ' + this.state.status}>
          <div className="add_task status" onClick={this.addShow}></div>
          <div className="edit_section">

          </div>
        </div>
      )
    } else {
      return (
        <div className={'task ' + this.state.status}>
            <div className="preview_task">
              <div className="fa_checkbox">
                <input
                type="checkbox"
                id={this.state.id}
                />
                <label htmlFor={this.state.id} onClick={this.handlCheckBoxClicked}></label>
              </div>
              <div className="title">
                <span>{this.state.title}</span>
                <i className="fas fa-pencil-alt"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          <div className="edit_section">

          </div>
        </div>
      )
    }
  }
}

export default List
