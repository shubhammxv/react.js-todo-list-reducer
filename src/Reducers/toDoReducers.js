const initialState = {
    activeTasks: [],
    completedTasks: [],
    taskIds: [],
    allTasks: {},
    currentTask: ''
}

const toDoReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ON_CHANGE':
            return {...state, currentTask: action.currentTask};

        case 'ON_ADD':
            if (state.currentTask !== '') {
                return {...state,
                    currentTask: '',
                    activeTasks: [...state.activeTasks, action.taskId], 
                    taskIds: [...state.taskIds, action.taskId],
                    allTasks: {...state.allTasks, [action.taskId]: state.currentTask}}
            }
            return state;

        case 'ON_MARK_COMPLETE':
                state.activeTasks.splice(state.activeTasks.indexOf(action.taskId), 1);
                state.completedTasks.push(action.taskId);
                return state;

        case 'ON_MARK_INCOMPLETE':
                state.activeTasks.push(action.taskId);
                state.completedTasks.splice(state.completedTasks.indexOf(action.taskId), 1);
                return state;

        default:
            return state;
            
    }
}

export default toDoReducer;
