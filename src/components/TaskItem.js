import React, {Component} from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Button
} from 'react-native';

import {connect} from 'react-redux';
import {toggleTask, removeTask} from '../actions';

class TaskItem extends Component {
    constructor(props) {
        super(props);
    }

    toggleTask(id) {
        //redux store
        this.props.dispatch(toggleTask(id));
    }

    removeTask(id) {
        //redux store
        this.props.dispatch(removeTask(id));
    }

    render() {
        const taskItem = this.props.item;
        
        return (
            <TouchableOpacity 
                style={[styles.taskItem, (taskItem.id == 1) ? {borderTopWidth: 1} : {borderTopWidth: 0}]}
                onPress={() => {this.toggleTask(taskItem.id)}}
            >
                <Text numberOfLines={1} style={[styles.taskItemText, (taskItem.done) ? styles.taskItemDone : ""]}>
                    {taskItem.text}
                </Text>

                <Button 
                    title="Remove"
                    color="black"
                    onPress={() => {this.removeTask(taskItem.id)}}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
   taskItem: {
    width: "100%",
    height: 40,
    paddingLeft: 15,
    paddingRight: 15, 
    borderColor: "#DDD", 
    borderStyle: "solid", 
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
   },
   taskItemText: {
       fontSize: 15,
       flex: 1
   },
   taskItemDone: {
       color: "#c5c4c4",
       textDecorationLine: "line-through"
   }
});

export default connect()(TaskItem);