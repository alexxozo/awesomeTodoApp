import React, {Component} from 'react';

import store from './src/store';
import {Provider} from 'react-redux';

import TodoApp from './src/TodoApp';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    )
  }
};