import React from 'react';
import './Task.css';

class Task extends React.Component {
  render() {
    return (
      <div className="Task" 
      data-testid={`task-${this.props.task.name.split(' ').join('-')}`}
      onClick={() => {this.props.selectTask(this.props.task)}}>
        {this.props.task.name}
      </div>
    );
  }
 
}

export default Task;
