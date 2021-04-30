import React, { Component } from "react";

class Task extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="d-flex justify-content-between bg-light m-3 p-2 shadow-sm ">
          <div>
            <div style={{ fontFamily: "Georgia, serif" }}>
              {this.props.task.task}
            </div>
            <span className="font-weight-light" style={{ fontSize: 14 }}>
              {this.props.task.date}
            </span>
          </div>
          <button
            className="btn btn-sm btn-danger"
            style={{ height: 20, lineHeight: 0.2 }}
          >
            x
          </button>
        </div>
      </React.Fragment>
    );
  }
}
// shadow-sm p-3 mb-5 bg-white rounded

export default Task;
