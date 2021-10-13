import React from "react";
import Control from "./components/Control";
import Stage from "./components/Stage";
import "./App.css";

const stages = ["New", "Active", "Resolved", "Closed"];

class App extends React.Component {
  state = {
    tasks: {},
    selectedTask: null,
  };

  addTask = (task) => {
    if (this.state.tasks[task.name]) {
      return;
    }

    this.setState((state) => ({
      ...state,
      tasks: { ...state.tasks, [task.name]: task },
    }));
  };

  selectTask = (task) => {
    this.setState((state) => ({
      ...state,
      selectedTask: task,
    }));
  };

  moveBack = () => {
    let index = stages.indexOf(this.state.selectedTask?.stage);
    let selectedTask = { ...this.state.selectedTask, stage: stages[index - 1] };

    this.setState((state) => ({
      tasks: { ...state.tasks, [selectedTask.name]: selectedTask },
      selectedTask,
    }));
  };

  moveForward = () => {
    let index = stages.indexOf(this.state.selectedTask?.stage);
    let selectedTask = { ...this.state.selectedTask, stage: stages[index + 1] };

    this.setState((state) => ({
      tasks: { ...state.tasks, [selectedTask.name]: selectedTask },
      selectedTask,
    }));
  };

  deleteTask = () => {};

  render() {
    return (
      <div className="App">
        <Control
          addTask={this.addTask}
          deleteTask={this.deleteTask}
          moveBack={this.moveBack}
          moveForward={this.moveForward}
          selectedTask={this.state.selectedTask}
        />
        <div className="StageContainer">
          {stages.map((stage) => (
            <Stage
              stage={stage}
              tasks={this.state.tasks}
              selectTask={this.selectTask}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
