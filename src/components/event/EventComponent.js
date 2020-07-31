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
                <View style={styles.containerRight}>
                    <Text style={styles.hour}>{this.props.item.hourStart} - {this.props.item.hourEnd} </Text>
                    <Text style={styles.name}>{this.props.item.name}</Text>
                    <Text style={styles.description}>{this.props.item.description}</Text>
                </View>
                <View style={styles.containerLeft}>
                    <Text style={[styles.image, {backgroundColor: this.props.item.color}]}>{this.props.item.image}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerRight: {
        flex: 2,
        flexDirection: 'column',
        margin: 10,
    },
    containerLeft: {
        flex: 0.75,
    },
    hour: {
        fontFamily: 'Roboto',
        fontSize: 15,
        margin: 3,
        color: '#737373'
    },
    name: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 20,
        margin: 3,
    },
    description: {
        fontFamily: 'Roboto',
        fontSize: 13,
        margin: 3,
        color: '#929292'
    },
    image:{
        borderRadius: 100,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'sans-serif-condensed',
        width: 60,
        height: 60,
        color: 'white',
        fontSize: 45
    }
})