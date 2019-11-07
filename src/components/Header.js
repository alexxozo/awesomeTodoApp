import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "black",
        padding: 20,
    },
    headerTitle: {
        color: "white",
        fontSize: 30,
        textAlign: 'center'
    }
});