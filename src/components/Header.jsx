import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div
        className="d-flex justify-content-between"
        style={{ marginBottom: 30 }}
      >
        <h1>Task Tracker</h1>
        <button
          className={
            this.props.state
              ? "btn btn-sm m-2 btn-danger"
              : "btn btn-sm m-2 btn-success"
          }
          onClick={this.props.addOrClose}
        >
          {this.props.state ? "Close" : "Add"}
        </button>
      </div>
    );
  }
}

export default Header;
