import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';

export default class EventComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.props.item.name}</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow'
    }
})
