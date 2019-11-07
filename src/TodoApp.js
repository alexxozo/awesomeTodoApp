import React, { Component } from "react";
import { 
    View,
    FlatList, 
    StyleSheet,
    Text
} from "react-native";

import Header from './components/Header';
import InputBar from './components/InputBar';

import {connect} from 'react-redux';

class TodoApp extends Component {
    render() {
        return (
            <View>
                <Header title="Awesome TODO App" />
                <InputBar 
                    textChange={task => this.setState({ task })} 
                    addNewTask={() => this.addNewTask()}
                />
                <Text>
                    {this.state.tasks}
                </Text>
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

mapStateToProps = state => ({
    tasks: state.task
});

export default connect(mapStateToProps)(TodoApp);