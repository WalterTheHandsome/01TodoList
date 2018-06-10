import React, { Component } from 'react';
import './Task.scss'
const STATE_NEW_TASK       = "new_task"
const STATE_ADD_NEW_TASK   = "add_new_task"
const STATE_TASK           = "task_with_data"
const STATE_EDIT_TASK      = "edit_task"
import moment from 'moment-js'

class FaIcon extends Component {
  constructor(props) {
    super(props)
    // props should have classString and content
  }
  render () {
    if (!this.props.classString) return null
    if (this.props.content.length !== 0) {
      return (
        <div>
          <i className={this.props.classString}></i>
          <span>{this.props.content}</span>
        </div>
      )
    }
    return <div><i className={this.props.classString}></i></div>
  }
}

class Star extends Component {
  constructor(props) {
    super(props)
    this.handleClick = props.onClick
  }
  render() {
    if (this.props.important) {
      return <i className="fas fa-star star" onClick={this.handleClick} />
    } else {
      return <i className="far fa-star star" onClick={this.handleClick} />
    }
  }
}

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: "add_chk" + props.idx,
      done: false,
      status: props.isAdd? STATE_NEW_TASK : STATE_TASK,
      isAdd: props.isAdd,
      important: false,
      title: props.title || "Type something here...",
      comment: props.comment || '',
      timestamp: props.timestamp || -1,
      timeThumbnail: moment(props.timestamp).format('MM/dd'),
      dateHuman: moment(props.timestamp).format('yyyy/mm/dd'),
      timeHuman: moment(props.timestamp).format('MM/dd')
    }

    this.handlCheckBoxClicked = () => {
      console.log('click')
      this.setState({
        done: !this.state.done
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

    this.validate = () => {
      let timeMoment = moment(this.state.timeHuman, 'YYYY-MM-DD')
      let dateMoment = moment(this.state.dateHuman, 'HH-mm')
      if (timeMoment.isValid() && dateMoment.isValid()) {
        // this.applyData()
        console.log('valid')
      } else {
        window.alert('You need to enter valid date or time.')
      }
    }

    this.cancelBoth = () => {
      this.setState({
        status: this.state.status === STATE_EDIT_TASK ? STATE_TASK : STATE_NEW_TASK
      })
    }

    this.setImportant = () => {
      console.log('set important')
      this.setState({
        important: !this.state.important
      })
    }
  } // end of constructor

  render () {
    return (
      // task container
      <div className={'task ' + this.state.status}>
        <div className="add_task status" onClick={this.addShow}></div>
        <div className={this.state.important ? 'preview_task important': 'preview_task'}>
          <div className="fa_checkbox">
            <input type="checkbox" id={this.state.id}/>
            <label htmlFor={this.state.id} onClick={this.handlCheckBoxClicked}></label>
          </div>
          <div className="title">
            <span>{this.state.title}</span>
          </div>
          <div className="function_group">
            <Star important={this.state.important} onClick={this.setImportant}/>
            <i className="fas fa-pencil-alt edit_button" onClick={this.showEdit}></i>
          </div>
          <div className="list_state_group">
            <FaIcon content={this.state.timestamp !== -1 ? this.state.timeThumbnail : ''} classString={this.state.timestamp !== -1 ? 'far fa-calendar-alt' : ''}></FaIcon>
            <FaIcon content={''} classString={this.state.comment.length !== 0 ? 'fas fa-comment-dots' : ''}></FaIcon>
          </div>
        </div>
        <div className="edit_section">
          <div className="line">
            <div className="subtitle">
              <i className="far fa-calendar-alt"></i>
              Deadline
            </div>
            <input type="text" className="date" placeholder="yyyy/mm/dd" defaultValue={this.state.dateHuman} />
            <input type="text" className="time" placeholder="hh:mm" defaultValue={this.state.timeHuman} />
          </div>
          <div className="line">
            <div className="subtitle">
              <i className="far fa-comment-dots"></i>
              Comment
            </div>
            <textarea name="" id="" cols="30" rows="10" className="comment" defaultValue={this.state.comment}></textarea>
          </div>
          <div className="function_group">
            <button className="cancel" onClick={this.cancelBoth}>
              <i className="fas fa-times"></i>
              Cancel
            </button>
            <button className="apply" onClick={this.validate}>
              <i className="fas fa-plus"></i>
              {this.state.status === STATE_ADD_NEW_TASK ? 'Add Task' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default List
