import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditableLabel from 'react-inline-editing';
import * as api from '../api/tasks';

class TaskDetais extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: this.props.task,
    };

    this.handleFocusOut = this.handleFocusOut.bind(this);
  }

  handleFocusOut(name) {
    api
      .updateTask(this.props.task.id, { name })
      .then(console.log('data updated'))
      .catch(console.log);
  }

  render() {
    let {
      name,
      tags,
      actual_effort,
      estimated_effort,
      due_date,
      is_high_priority,
      description,
    } = this.state.task;

    const date = new Date(due_date).toDateString();

    if (description) {
      description = description.split('_').join(' ');
    }

    return (
      <div
        className="task"
        style={{
          color: is_high_priority && '#e2444c',
        }}
      >
        <div className="taskInfo">
          <div className="button button-left">
            <Link to="/">
              <button>← Go back</button>
            </Link>
          </div>
          <div>
            <div className="mainInfo">
              <div className="inlineName mb-10">
                <span className="title">Task name:</span>
                <EditableLabel
                  text={name}
                  inputWidth="250px"
                  inputHeight="20px"
                  inputMaxLength={35}
                  inputClassName="inlineInput"
                  labelClassName="inlineLabel"
                  onFocusOut={this.handleFocusOut}
                />
              </div>
              <div className="mb-10" style={{ display: !tags && 'none' }}>
                <span className="title">Tags:</span> {tags}
              </div>
              <div className="mb-10">
                <span className="title">Actual effort:</span> {actual_effort}
              </div>
              <div className="mb-10">
                <span className="title">Estimated effort:</span> {estimated_effort}
              </div>
              <div className="mb-10">
                <span className="title">Due date:</span> {date}
              </div>
            </div>
            <div style={{ display: !description && 'none' }} className="description mb-10">
              {description}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskDetais;
