import React, { Component } from "react";
import { 
    View,
    FlatList, 
    StyleSheet,
    Text
} from "react-native";
import {connect} from 'react-redux';
import {getTasks} from './actions';

import Header from './components/Header';
import InputBar from './components/InputBar';
import TaskList from './components/TaskList';

class TodoApp extends Component {
    constructor(props) {
        super(props)
        this.props.dispatch(getTasks());
    }

    render() {
        return (
            <View 
                style={{flex: 1}} >
                <Header title="Awesome TODO App" />
                <InputBar />
                <TaskList />
             </View>
        );
    }
}

export default connect()(TodoApp);