import React from "react";
import { 
    StyleSheet,
    FlatList,
    Text,
    View
} from "react-native";

import TaskItem from './TaskItem';

import {connect} from 'react-redux';

const TaskList = ({
    tasks,
    toggleTodo
}) => (
    <View>
        <FlatList
            data={tasks}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item, index}) => {
                return (
                    <TaskItem 
                        item={item}
                    />
                )
            }}
            /> 
        
    </View>
    )

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    };
}

export default connect(mapStateToProps)(TaskList);
