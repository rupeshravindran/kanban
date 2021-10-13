import React from "react";
import Task from "./Task";
import "./Stage.css";

class Stage extends React.Component {
  render() {
    return (
      <div className="Stage">
        <div>{this.props.stage}</div>
        {Object.values(this.props.tasks)
          .filter((task) => task.stage === this.props.stage)
          .map((task) => (
            <Task task={task} selectTask={this.props.selectTask} />
          ))}
      </div>
    );
  }
}

export default Stage;
