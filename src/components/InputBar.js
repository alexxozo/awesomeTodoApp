import React, {Component} from 'react';

import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';
import { black, white } from 'ansi-colors';

export default class InputBar extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={{padding:20, flexDirection:"row"}}>
                <TextInput 
                    style={styles.input}
                    onChangeText={(task) => {this.props.textChange(task)}}
                    value={this.props.task}
                    placeholder="*eg wash the dog"
                />  
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.props.addNewTask()}
                >
                    <Text style={styles.buttonText}>+</Text>    
                </TouchableOpacity>               
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        borderColor: "black",
        borderStyle: "solid",
        borderWidth: 2,
        flex: 2
    },
    button: {
        flex:1, 
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    },
    buttonText: {
        fontSize: 40,
        color: "white"
    }
});