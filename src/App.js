import React, { Component } from 'react';
import TaskList from './components/TaskList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TaskContainer from './components/TaskContainer';
import './style.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={TaskList} />
          <Route path="/tasks/:id" component={TaskContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
