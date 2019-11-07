import React, {Component} from 'react';

import {connect} from 'react-redux';
import {addTask} from '../actions';

import {
    TextInput,
    View,
    StyleSheet,
    TouchableOpacity,
    Text
} from 'react-native';

class InputBar extends Component {
    constructor() {
        super();
    }

    state = {
        text: ''
    }

    newTask(text) {
        //redux store
        this.props.dispatch(addTask(text));
        this.setState({text: ''});
    }

    render() {
        return (
            <View style={{padding:20, flexDirection:"row"}}>
                <TextInput 
                    style={styles.input}
                    onChangeText={(text) => {this.setState({text})}}
                    value={this.state.text}
                    placeholder="*eg wash the dog"
                />  
                <TouchableOpacity 
                    style={styles.button}
                    onPress={() => this.newTask(this.state.text)}
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

export default connect()(InputBar);