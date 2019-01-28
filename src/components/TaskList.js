import React, { Component } from 'react';
import Task from './Task';
import * as api from '../api/tasks';

class TaskList extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    api
      .getTasks({ obj_status: 'active' })
      .then(tasks => {
        this.setState({
          tasks: tasks,
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const activeTasks = this.state.tasks.map(item => {
      return <Task key={item.id} item={item} />;
    });

    return (
      <div>
        <h1 className="header"> Active tasks list</h1>

        <div className="taskList">{activeTasks}</div>
      </div>
    );
  }
}

export default TaskList;
