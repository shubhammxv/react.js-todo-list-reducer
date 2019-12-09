import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers';

import ToDoComponent from './Components/ToDoComponent'
import './App.css';

const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={ store }>
          <ToDoComponent />
          </Provider>
      </div>
    )
  }
}

export default App;