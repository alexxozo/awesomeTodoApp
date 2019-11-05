import React, {Component} from 'react';
import {
  View,
  FlatList,
  AsyncStorage
} from 'react-native';

import Header from './components/Header';
import InputBar from './components/InputBar';
import TaskItem from './components/TaskItem';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      task: '',
      tasks: []
    };

    this.loadStoredTasks();
  }

  async loadStoredTasks() {
    try {
      const tasks = await AsyncStorage.getItem('tasks');
      if (tasks !== null) {
        this.setState({
          tasks: JSON.parse(tasks)
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async saveTasks() {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks));
    } catch (error) {
      console.log(error);
    }
  }

  addNewTask() {
    let tasks = this.state.tasks;

    if (this.state.task !== '') {
      tasks.push({
        id: tasks.length + 1,
        text: this.state.task,
        done: false
      });
    }

    this.setState({
      tasks,
      task: ''
    });

    this.saveTasks();
  }

  toggleTask(index) {
    let tasks = this.state.tasks;

    if (tasks[index]) {
      tasks[index].done = !tasks[index].done;
    }

    this.setState({
      tasks
    });

    this.saveTasks();
  }

  removeTask(index) {
    let tasks = this.state.tasks;

    if (tasks[index]) {
      tasks.splice(index, 1);
    }

    this.setState({
      tasks
    });

    this.saveTasks();
  }

  render() {
    return (
      <View>
        <Header title="Awesome TODO App" />
        <InputBar 
          textChange={task => this.setState({ task })} 
          addNewTask={() => this.addNewTask()}
        />
        <FlatList
          data={this.state.tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item, index}) => {
            return (
              <TaskItem 
                item={item}
                toggleTask={() => this.toggleTask(index)}
                removeTask={() => this.removeTask(index)}
              />
            )
          }}
        />
      </View>
    )
  }
};