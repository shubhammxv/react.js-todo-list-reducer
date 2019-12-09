import { combineReducers } from 'redux';
import toDoReducers from './toDoReducers';

const rootReducer = combineReducers({
  taskStates: toDoReducers,
})

export default rootReducer;