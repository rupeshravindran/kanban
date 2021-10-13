import React from "react";
import "./Control.css";

class Control extends React.Component {
  state = {
    task: "",
  };

  handleTask = (event) => {
    this.setState({
      task: event.target?.value,
    });
  };

  render() {
    return (
      <div className="Control">
        <div>
          <input
            id="userId"
            type="text"
            value={this.state.task}
            onChange={this.handleTask}
          />
          <button
            onClick={() => {
              this.props.addTask({
                name: this.state.task,
                stage: "New",
              });
            }}
          >
            Create New
          </button>
        </div>
        <div
          style={{
            marginTop: "10px",
          }}
        >
          <label>{this.props?.selectedTask?.name}</label>
          <button
            onClick={() => {
              this.props.moveForward();
            }}
            disabled={
              !this.props?.selectedTask ||
              this.props?.selectedTask.stage === "Closed"
            }
          >
            Move Forward
          </button>
          <button
            onClick={() => {
              this.props.moveBack();
            }}
            disabled={
              !this.props?.selectedTask ||
              this.props?.selectedTask.stage === "New"
            }
          >
            Move Back
          </button>
          <button
            onClick={() => {
              this.props.deleteTask();
            }}
            disabled={!this.props?.selectedTask}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Control;
