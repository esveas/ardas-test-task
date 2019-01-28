import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Task = ({
  item: { id, name, tags, actual_effort, estimated_effort, due_date, is_high_priority },
}) => {
  const date = new Date(due_date);

  return (
    <div
      className="task"
      style={{
        color: is_high_priority && '#e2444c',
      }}
    >
      <div className="taskInfo">
        <div className="mb-10">
          <span className="title">Task name:</span> {name}
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
          <span className="title">Due date:</span> {date.toDateString()}
        </div>
      </div>
      <div className="button">
        <Link to={'/tasks/' + id}>
          <button>read more</button>
        </Link>
      </div>
    </div>
  );
};

export default Task;
