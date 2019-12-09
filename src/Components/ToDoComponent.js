import React, {Component} from 'react';
import { connect } from 'react-redux';
import { onChange, onAdd, onMarkComplete, onMarkIncomplete} from '../Actions'
import ActiveTask from '../Components/ActiveTasks';
import AddTask from '../Components/AddTask'
import Completed from '../Components/CompletedTasks';
import AllTasks from '../Components/AllTasks';
import '../Styles/ToDoComponent.css';


class ToDoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldUpdate: false,
    }
  }

  onMarkComplete = (taskId) => {
    this.setState({ shouldUpdate: true })
    this.props.onMarkComplete(taskId);
  }

  onMarkIncomplete = (taskId) => {
    this.setState({ shouldUpdate: true})
    this.props.onMarkIncomplete(taskId);
  }

  render() {
      const { onAdd, onChange, taskStates } = this.props;
      //console.log('toDoReducer', taskStates);
    return (
      <div className="wrapper">
        <div className="addTask">
          <AddTask
            onAddTask={onAdd}
            handleOnChange={onChange}
            currentTask={taskStates.currentTask}
          />
        </div>
        <div className="tasks-wrapper">
            <ActiveTask
              activeTasks={taskStates.activeTasks}
              allTasks={taskStates.allTasks}
              onMarkComplete={this.onMarkComplete}
            />
            <AllTasks
              taskIds={taskStates.taskIds}
              allTasks={taskStates.allTasks}
            />
            <Completed
              completedTasks={taskStates.completedTasks}
              allTasks={taskStates.allTasks}
              onMarkIncomplete={this.onMarkIncomplete} 
            />
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ taskStates }) => ({ taskStates })

export default connect(mapStateToProps, {
  onChange,
  onAdd,
  onMarkComplete,
  onMarkIncomplete
})(ToDoComponent)