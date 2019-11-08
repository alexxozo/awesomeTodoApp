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
    loading, 
    error
}) => {
    if (!loading) {
        return (
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
        )
    } else {
        return (
            <Text>Loading Tasks ...</Text>
        )
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        tasks: state.tasks ? state.tasks : [],
        error: state.error
    };
}

export default connect(mapStateToProps)(TaskList);
