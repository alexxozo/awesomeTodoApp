import React, { Component } from "react";
import { 
    View,
    FlatList, 
    StyleSheet
} from "react-native";

import Header from './components/Header';
import InputBar from './components/InputBar';
import TaskItem from './components/TaskItem';

class TodoApp extends Component {
    render() {
        return (
            <View>
                <Header title="Awesome TODO App" />
                <InputBar 
                    textChange={task => this.setState({ task })} 
                    addNewTask={() => this.addNewTask()}
                />
                {/* <FlatList
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
                /> */}
             </View>
        );
    }
}
export default TodoApp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});