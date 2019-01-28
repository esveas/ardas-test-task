import React from 'react';
import TaskDetais from './TaskDetais';
import * as api from '../api/tasks';

class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTask: null,
    };
    api
      .getTaskById(Number(props.match.params.id))
      .then(task => {
        this.setState({
          activeTask: task,
        });
      })
      .catch(console.log);
  }
  render() {
    if (this.state.activeTask === null) {
      return <div>loading...</div>;
    }
    return (
      <div className="taskDetails">
        <TaskDetais key={this.state.activeTask.id} task={this.state.activeTask} />
      </div>
    );
  }
}

export default TaskContainer;
