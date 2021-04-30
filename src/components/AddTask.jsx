import React, { Component } from "react";

class AddTask extends Component {
  state = {};
  render() {
    return (
      <form>
        <div className="d-flex flex-column bd-highlight mb-3 m-3">
          <input type="text" placeholder="Add Your Task here" />
          <input
            type="text"
            placeholder="Add Date here"
            style={{ marginTop: 10, marginBottom: 10 }}
          />
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default AddTask;
