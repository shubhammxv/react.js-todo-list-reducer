import React, { Component } from 'react';

class AddTask extends Component {
    render() {
        return (
            <div>
                <input
                  className="task-input"
                  type="text"
                  value={this.props.currentTask}
                  onChange={(event) => this.props.handleOnChange(event.target.value)}
                />
                <button
                  className="task-button"
                  onClick={this.props.onAddTask}
                >
                  Add
                </button>
            </div>
        )
    }
}

export default AddTask;