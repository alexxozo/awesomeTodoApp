import React, { Component } from "react";
import { 
    View,
    FlatList, 
    StyleSheet,
    Text
} from "react-native";

import Header from './components/Header';
import InputBar from './components/InputBar';
import TaskList from './components/TaskList';

class TodoApp extends Component {
    render() {
        return (
            <View>
                <Header title="Awesome TODO App" />
                <InputBar />
                <TaskList />
             </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default TodoApp;