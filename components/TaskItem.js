import React, {Component} from 'react';

import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Button
} from 'react-native';

export default class TaskItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const taskItem = this.props.item;
        

        return (
            <TouchableOpacity 
                style={[styles.taskItem, (taskItem.id == 1) ? {borderTopWidth: 1} : {borderTopWidth: 0}]}
                onPress={() => {this.props.toggleTask()}}
            >
                <Text numberOfLines={1} style={[styles.taskItemText, (taskItem.done) ? styles.taskItemDone : ""]}>
                    {taskItem.text}
                </Text>

                <Button 
                    title="Remove"
                    color="black"
                    onPress={() => { this.props.removeTask() }}
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