import React, { Component } from "react";
import Task from "./Task";

class Tasks extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.tasks.map((task) => (
          <Task task={task} key={task.id} />
        ))}
      </React.Fragment>
    );
  }
}

export default Tasks;
